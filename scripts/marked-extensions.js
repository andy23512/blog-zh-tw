/* global hexo */
'use strict';

// Keeps the output of the former hexo-renderer-markdown-it setup (markdown-it +
// footnote, mark, emoji, typographer and anchor plugins) on top of
// hexo-renderer-marked.

const { Tokenizer } = require('marked');
const markedFootnote = require('marked-footnote');

const EMOJI = {
  information_source: 'ℹ️',
  no_entry_sign: '🚫',
  x: '❌',
  arrow_down: '⬇️',
  arrow_left: '⬅️',
  arrow_right: '➡️'
};
const EMOJI_RE = new RegExp(`:(?:${Object.keys(EMOJI).join('|')}):`);

// ---------------------------------------------------------------------------
// Typographer (markdown-it "replacements" rule). Quotes are handled separately.
// ---------------------------------------------------------------------------
function typographer(str) {
  return str
    .replace(/\((c|tm|r)\)/gi, (m, k) => ({ c: '©', r: '®', tm: '™' })[k.toLowerCase()])
    .replace(/\+-/g, '±')
    .replace(/\.{2,}/g, '…')
    .replace(/([?!])…/g, '$1..')
    .replace(/([?!]){4,}/g, '$1$1$1')
    .replace(/,{2,}/g, ',')
    .replace(/(^|[^-])---(?=[^-]|$)/gm, '$1—')
    .replace(/(^|\s)--(?=\s|$)/gm, '$1–')
    .replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, '$1–');
}

// ---------------------------------------------------------------------------
// Smart quotes: port of markdown-it/lib/rules_core/smartquotes.js (v13).
// It works on the flat list of inline tokens of one paragraph, so it needs the
// characters before/after a quote even when they sit in another token (a link,
// bold text, ...) and the nesting level of each token.
// ---------------------------------------------------------------------------
const APOSTROPHE = "\u2019";
const isWhiteSpace = (code) => {
  if (code >= 0x2000 && code <= 0x200a) return true;
  switch (code) {
    case 0x09:
    case 0x0a:
    case 0x0b:
    case 0x0c:
    case 0x0d:
    case 0x20:
    case 0xa0:
    case 0x1680:
    case 0x202f:
    case 0x205f:
    case 0x3000:
      return true;
  }
  return false;
};
const isMdAsciiPunct = (c) =>
  (c >= 0x21 && c <= 0x2f) || (c >= 0x3a && c <= 0x40) || (c >= 0x5b && c <= 0x60) || (c >= 0x7b && c <= 0x7e);
const isPunctChar = (ch) => /^\p{P}$/u.test(ch);

// Flatten inline tokens into [{ kind, level, content }] in document order.
function flattenInline(tokens, level, out) {
  for (const t of tokens) {
    switch (t.type) {
      case 'text':
        out.push({
          kind: 'text',
          level,
          get content() {
            return t.text;
          },
          set content(v) {
            t.text = v;
          }
        });
        break;
      case 'escape':
      case 'codespan':
      case 'emoji':
        out.push({ kind: 'content', level, content: t.text });
        break;
      case 'html':
        out.push({ kind: 'content', level, content: t.raw });
        break;
      case 'image':
        out.push({ kind: 'content', level, content: t.text });
        break;
      case 'br':
        out.push({ kind: 'break', level });
        break;
      default:
        if (Array.isArray(t.tokens)) {
          out.push({ kind: 'bound', level });
          flattenInline(t.tokens, level + 1, out);
          out.push({ kind: 'bound', level });
        }
    }
  }
}

function smartQuotes(inlineTokens, quotes) {
  const [openDbl, closeDbl, openSgl, closeSgl] =
    typeof quotes === 'string' && quotes.length === 4 ? [...quotes] : ['“', '”', '‘', '’'];
  const tokens = [];
  flattenInline(inlineTokens, 0, tokens);
  const replaceAt = (str, index, ch) => str.slice(0, index) + ch + str.slice(index + 1);
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const thisLevel = token.level;

    let j;
    for (j = stack.length - 1; j >= 0; j--) {
      if (stack[j].level <= thisLevel) break;
    }
    stack.length = j + 1;

    if (token.kind !== 'text') continue;

    let text = token.content;
    let pos = 0;
    let max = text.length;

    OUTER: while (pos < max) {
      const re = /['"]/g;
      re.lastIndex = pos;
      const t = re.exec(text);
      if (!t) break;

      let canOpen = true;
      let canClose = true;
      pos = t.index + 1;
      const isSingle = t[0] === "'";

      let lastChar = 0x20;
      if (t.index - 1 >= 0) {
        lastChar = text.charCodeAt(t.index - 1);
      } else {
        for (j = i - 1; j >= 0; j--) {
          if (tokens[j].kind === 'break') break;
          if (!tokens[j].content) continue;
          lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
          break;
        }
      }

      let nextChar = 0x20;
      if (pos < max) {
        nextChar = text.charCodeAt(pos);
      } else {
        for (j = i + 1; j < tokens.length; j++) {
          if (tokens[j].kind === 'break') break;
          if (!tokens[j].content) continue;
          nextChar = tokens[j].content.charCodeAt(0);
          break;
        }
      }

      const isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
      const isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
      const isLastWhiteSpace = isWhiteSpace(lastChar);
      const isNextWhiteSpace = isWhiteSpace(nextChar);

      if (isNextWhiteSpace) {
        canOpen = false;
      } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) canOpen = false;
      }

      if (isLastWhiteSpace) {
        canClose = false;
      } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) canClose = false;
      }

      if (nextChar === 0x22 && t[0] === '"') {
        if (lastChar >= 0x30 && lastChar <= 0x39) {
          canClose = canOpen = false; // 1"" - count first quote as an inch
        }
      }

      if (canOpen && canClose) {
        canOpen = isLastPunctChar;
        canClose = isNextPunctChar;
      }

      if (!canOpen && !canClose) {
        if (isSingle) token.content = replaceAt(token.content, t.index, APOSTROPHE);
        continue;
      }

      if (canClose) {
        for (j = stack.length - 1; j >= 0; j--) {
          const item = stack[j];
          if (item.level < thisLevel) break;
          if (item.single === isSingle && item.level === thisLevel) {
            const open = isSingle ? openSgl : openDbl;
            const close = isSingle ? closeSgl : closeDbl;
            token.content = replaceAt(token.content, t.index, close);
            tokens[item.token].content = replaceAt(tokens[item.token].content, item.pos, open);
            text = token.content;
            max = text.length;
            stack.length = j;
            continue OUTER;
          }
        }
      }

      if (canOpen) {
        stack.push({ token: i, pos: t.index, single: isSingle, level: thisLevel });
      } else if (canClose && isSingle) {
        token.content = replaceAt(token.content, t.index, APOSTROPHE);
      }
    }
  }
}

// marked cuts plain text at every '!' (it may start an image), while markdown-it
// sees the whole run. Join neighbouring plain text so rules that span such a
// cut (the '!!!!' -> '!!!' replacement and the quote logic) behave the same.
function mergeText(tokens) {
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.type === 'text' && !t.tokens) {
      while (tokens[i + 1] && tokens[i + 1].type === 'text' && !tokens[i + 1].tokens) {
        t.raw += tokens[i + 1].raw;
        t.text += tokens[i + 1].text;
        tokens.splice(i + 1, 1);
      }
      t.text = t.text.replace(/([?!]){4,}/g, '$1$1$1');
    } else if (Array.isArray(t.tokens)) {
      mergeText(t.tokens);
    }
  }
}

function inlineBlock(tokens, quotes) {
  mergeText(tokens);
  smartQuotes(tokens, quotes);
}

// Apply the inline rules to every block that holds inline tokens.
function walkBlocks(tokens, quotes) {
  for (const t of tokens) {
    if (t.type === 'paragraph' || t.type === 'heading' || (t.type === 'text' && Array.isArray(t.tokens))) {
      inlineBlock(t.tokens, quotes);
      continue;
    }
    if (t.type === 'table') {
      t.header.forEach((c) => inlineBlock(c.tokens, quotes));
      t.rows.forEach((row) => row.forEach((c) => inlineBlock(c.tokens, quotes)));
      continue;
    }
    for (const key of ['tokens', 'items', 'content']) {
      if (Array.isArray(t[key])) walkBlocks(t[key], quotes);
    }
  }
}

// ---------------------------------------------------------------------------
// Inline extensions: ==mark== and :emoji:
// ---------------------------------------------------------------------------
const mark = {
  name: 'mark',
  level: 'inline',
  start(src) {
    return src.search(/==\S/);
  },
  tokenizer(src) {
    const m = /^==(?=\S)([\s\S]*?\S)==/.exec(src);
    if (m) {
      return { type: 'mark', raw: m[0], text: m[1], tokens: this.lexer.inlineTokens(m[1]) };
    }
  },
  renderer(token) {
    return `<mark>${this.parser.parseInline(token.tokens)}</mark>`;
  }
};

const emoji = {
  name: 'emoji',
  level: 'inline',
  // marked cuts plain text at the position returned here, so only report real
  // emoji candidates: returning the first ":" would split "https://..." and
  // stop it from being auto-linked.
  start(src) {
    return src.search(EMOJI_RE);
  },
  tokenizer(src) {
    const m = /^:([a-z0-9_+-]+):/.exec(src);
    if (m && EMOJI[m[1]]) {
      return { type: 'emoji', raw: m[0], text: EMOJI[m[1]] };
    }
  },
  renderer(token) {
    return token.text;
  }
};

hexo.extend.filter.register('marked:use', function (use) {
  use(markedFootnote({ refMarkers: true, footnoteDivider: true }));
  const quotes = (hexo.config.marked || {}).quotes;
  const smartypants = (hexo.config.marked || {}).smartypants;
  use({
    hooks: {
      processAllTokens(tokens) {
        if (smartypants) walkBlocks(tokens, quotes);
        return tokens;
      }
    }
  });
});

hexo.extend.filter.register('marked:extensions', function (extensions) {
  extensions.push(mark, emoji);
});

// ---------------------------------------------------------------------------
// Tokenizer overrides
// ---------------------------------------------------------------------------
// Limit an auto-linked URL the way markdown-it's linkify did: after the host
// only ":", "/", "?" or "#" continue the URL (so "http://example.com。" does not
// swallow the full-width full stop) and an unmatched ")" ends it.
function limitLinkifiedUrl(tokenizer, token) {
  if (!token || token.type !== 'link') return token;
  const host = /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9-]+\.?)+/.exec(token.raw);
  if (!host) return token;

  let raw;
  if (!/^[:/?#]/.test(token.raw.slice(host[0].length))) {
    raw = host[0];
  } else {
    raw = token.raw;
    let depth = 0;
    for (let i = host[0].length; i < raw.length; i++) {
      if (raw[i] === '(') depth++;
      else if (raw[i] === ')' && --depth < 0) {
        raw = raw.slice(0, i);
        break;
      }
    }
  }

  let previous;
  do {
    previous = raw;
    raw = tokenizer.rules.inline._backpedal.exec(raw)?.[0] ?? '';
  } while (previous !== raw);

  if (raw === token.raw) return token;
  const href = host[1] === 'www.' ? `http://${raw}` : raw;
  return { type: 'link', raw, text: raw, href, tokens: [{ type: 'text', raw, text: raw }] };
}

hexo.extend.filter.register('marked:tokenizer', function (tokenizer) {
  tokenizer.url = function (src) {
    if (!this.options.autolink) return;
    return limitLinkifiedUrl(this, Tokenizer.prototype.url.call(this, src));
  };

  // markdown-it only treats "~~text~~" as strikethrough; marked also accepts a
  // single "~", which turns "2~3 keys ... 3~4" into <del>.
  tokenizer.del = function (src) {
    const m = /^~~(?=\S)([\s\S]*?\S)~~/.exec(src);
    if (m) {
      return { type: 'del', raw: m[0], text: m[1], tokens: this.lexer.inlineTokens(m[1]) };
    }
  };

  // Replaces hexo-renderer-marked's smartypants (which turns every "--" into a
  // dash). Quotes are resolved later, over the whole paragraph, in smartQuotes().
  // The text is left unescaped: marked's renderer escapes it.
  tokenizer.inlineText = function (src) {
    const { smartypants } = this.options;
    const cap = this.rules.inline.text.exec(src);
    if (!cap) return;
    const raw = cap[0];
    const text = this.lexer.state.inRawBlock || this.rules.inline.url.exec(src) ? raw : smartypants ? typographer(raw) : raw;
    return { type: 'text', raw, text };
  };
});

// ---------------------------------------------------------------------------
// Renderer overrides
// ---------------------------------------------------------------------------
// Keep the heading markup the site produced with markdown-it-anchor:
// `<a class="header-anchor">¶</a>` before the text, and "-v2", "-v3" suffixes
// for duplicate heading ids (hexo-renderer-marked would emit "-1", "-2").
hexo.extend.filter.register('marked:renderer', function (renderer) {
  const original = renderer.heading;
  renderer.heading = function (token) {
    const counts = this.options._headingId || {};
    const before = { ...counts };
    const html = original.call(this, token);
    const m = /^<h(\d) id="([^"]*)"><a href="#[^"]*" class="headerlink" title="[^"]*"><\/a>([\s\S]*)<\/h\d>$/.exec(html);
    if (!m) return html;
    let [, level, id, text] = m;
    const key = Object.keys(counts).find((k) => counts[k] !== before[k] && before[k] !== undefined);
    if (key && id === `${key}-${counts[key] - 1}`) {
      id = `${key}-v${counts[key]}`;
    }
    return `<h${level} id="${id}"><a class="header-anchor" href="#${id}">¶</a>${text}</h${level}>\n`;
  };
});

// markdown-it always emitted an alt attribute (empty when no alt text was given).
hexo.extend.filter.register('marked:renderer', function (renderer) {
  const original = renderer.image;
  renderer.image = function (token) {
    const html = original.call(this, token);
    return /^<img\b[^>]*\salt=/.test(html) ? html : html.replace(/^<img\b/, '<img alt=""');
  };
});

// hexo-renderer-marked re-encodes every href with hexo-util's encodeURL, which
// decodes "%2B"/"%3D" in query strings ("+" then means a space) and appends "/"
// to bare hosts. markdown-it kept the URL as written, so do the same: only
// percent-encode characters that are not valid in a URL, leave "%XX" alone.
hexo.extend.filter.register('marked:renderer', function (renderer) {
  const original = renderer.link;
  renderer.link = function (token) {
    const html = original.call(this, token);
    const href = token.href;
    if (!href || /^mailto:/i.test(href)) return html;
    const kept = href
      .replace(/[^\x21-\x7e]|["<>\\^`{|}]/g, (c) => encodeURIComponent(c))
      .replace(/&(?!amp;)/g, '&amp;');
    return html.replace(/^<a href="[^"]*"/, () => `<a href="${kept}"`);
  };
});

// markdown-it rendered ~~text~~ as <s>, not <del>.
hexo.extend.filter.register('marked:renderer', function (renderer) {
  renderer.del = function (token) {
    return `<s>${this.parser.parseInline(token.tokens)}</s>`;
  };
});

// marked-footnote adds a visually-hidden "Footnotes" <h2> (class sr-only). The
// theme has no .sr-only style, so it would show up in the page and in the TOC.
// Priority -1 so this runs before hexo-symbols-count-time (priority 0) counts the text.
hexo.extend.filter.register('after_post_render', function (data) {
  data.content = data.content.replace(/<h2\b[^>]*\bid="footnote-label"[^>]*>Footnotes<\/h2>\s*/, '');
  // markdown-it-footnote used U+21A9 U+FE0E (text presentation) for the back-reference arrow.
  data.content = data.content.replace(/(data-footnote-backref[^>]*>)↩(?!︎)/g, '$1↩︎');
  return data;
}, -1);
