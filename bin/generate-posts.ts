import { readFileSync, writeFileSync } from "fs";
import moment from "moment";
import { Note } from "../model/hackmd.model";
import { NoteTableEntry } from "../model/note-table-entry.model";
import { slugify } from "../utils/slugify";

function replaceNoteUrl(
  noteContent: string,
  urlToFileName: Record<string, string>
) {
  let result = noteContent;
  Object.entries(urlToFileName).forEach(([url, fileName]) => {
    result = result.replace(
      new RegExp(`\\[([^\\]]+)\\]\\(${url}(#[^)]+)?\\)`, "g"),
      `<a href="{% post_path ${fileName} %}$2">$1</a>`
    );
  });
  return result;
}

(async () => {
  const rawNotes: Note[] = JSON.parse(
    readFileSync("./res/hackmd-note-data.json", { encoding: "utf8" })
  );
  const noteTableData: NoteTableEntry[] = JSON.parse(
    readFileSync("./res/note-table-data.json", { encoding: "utf8" })
  );
  const notes = rawNotes.filter(
    (n) =>
      !n.title.match(/^[\w\-,' ()]+$/) &&
      n.title !== "Tangent 的 CharaChorder 和 Forge 筆記本" &&
      n.title !== "Tangent 的 CharaChorder 和 Forge 筆記清單"
  );
  const urlToFileName: Record<string, string> = {};
  for (const note of rawNotes) {
    const url = note.publishLink.replace("https://hackmd.io", "");
    const fileName = slugify(note.title);
    urlToFileName[url] = fileName;
  }
  for (const note of notes) {
    const url = note.publishLink.replace("https://hackmd.io", "");
    const noteTableEntry = noteTableData.find((entry) =>
      entry.zhTwNoteUrl.endsWith(url)
    );
    if (!noteTableEntry) {
      console.warn(`No note table entry found for note: ${note.title}`);
      continue;
    }
    const enNote = rawNotes.find(
      (n) => n.publishLink === noteTableEntry.enNoteUrl
    );
    if (!enNote) {
      console.warn(`No en note found for note: ${note.title}`);
      continue;
    }
    const fileName = urlToFileName[url];
    const markdownFileContent = `---
title: ${note.title}
date: ${moment(note.createdAt).toISOString()}
updated: ${moment(note.lastChangedAt).toISOString()}
categories: [${noteTableEntry.category}, ${noteTableEntry.subCategory}]
alias:
${[-2, -1, 0, 1, 2]
  .map(
    (offset) =>
      moment(note.createdAt).add(offset, "days").format("  - /YYYY/MM/DD/") +
      fileName +
      "/"
  )
  .join("\n")}
otherLanguages:
  - text: English Version
    path: https://andy23512.github.io/blog/${
      urlToFileName[noteTableEntry.enNoteUrl.replace("https://hackmd.io", "")]
    }/
---
${replaceNoteUrl(
  note.content
    .replace(/\[TOC\]\s*\n/g, "")
    .replace(/\n##### /g, "\n###### ")
    .replace(/\n#### /g, "\n##### ")
    .replace(/\n### /g, "\n#### ")
    .replace(/\n## /g, "\n### ")
    .replace(/\n# /g, "\n## ")
    .replace(
      /:::spoiler (.*)\n([\S\s]*?):::/g,
      '{% collapsecard "$1" %}$2{% endcollapsecard %}'
    )
    .replace(
      /:::spoiler\n([\S\s]*?):::/g,
      '{% collapsecard "詳細" %}$1{% endcollapsecard %}'
    )
    .replace(/:::info/g, "{% blockquote %}")
    .replace(/:::warning/g, "{% blockquote %}")
    .replace(/:::/g, "{% endblockquote %}")
    .replace(/\[^\w+\]/g, " $0")
    /*
    .replace(
      /```mermaid\n(---[\S\s]*?---\n)?([\S]+)([^`]+)```/g,
      mermaidReplacer
    )
    */
    .replace(/:heavy_check_mark:/g, '<div class="check"></div>'),
  urlToFileName
)}
`;
    writeFileSync(`source/_posts/${fileName}.md`, markdownFileContent);
  }
})();

function mermaidReplacer(_: string, p1: string, p2: string, p3: string) {
  p3 = p3.replace(/tickInterval 1day\n/g, "");
  return `{% mermaid ${p2} %}${p3}{% endmermaid %}`;
}
