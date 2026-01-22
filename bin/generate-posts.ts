import * as cheerio from "cheerio";
import moment from "moment";
import { readFileSync, writeFileSync } from "node:fs";
import { Note } from "../model/hackmd.model.js";
import { NoteTableEntry } from "../model/note-table-entry.model.js";
import { slugify } from "../util/slugify.js";

function replaceNoteUrl(
  noteContent: string,
  urlToFileName: Record<string, string>
) {
  let result = noteContent;
  Object.entries(urlToFileName).forEach(([url, fileName]) => {
    result = result.replaceAll(
      new RegExp(String.raw`\[([^\]]+)\]\(${url}(#[^)]+)?\)`, "g"),
      `<a href="{% post_path ${fileName} %}$2">$1</a>`
    );
  });
  return result;
}

const rawNotes: Note[] = JSON.parse(
  readFileSync("./res/hackmd-note-data.json", { encoding: "utf8" })
);
const noteTableData: NoteTableEntry[] = JSON.parse(
  readFileSync("./res/note-table-data.json", { encoding: "utf8" })
);
const notes = rawNotes.filter(
  (n) =>
    !/^[\w\-,' ()]+$/.exec(n.title) &&
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
  const response = await fetch(note.publishLink);
  const html = await response.text();
  const $ = cheerio.load(html);
  const description = $('meta[name="description"]').attr("content") || "";
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
description: ${description}
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
    path: https://andy23512.com/blog/${
      urlToFileName[noteTableEntry.enNoteUrl.replace("https://hackmd.io", "")]
    }/
---
${replaceNoteUrl(
  note.content
    .replaceAll(/\[TOC\]\s*\n/g, "")
    .replaceAll("\n##### ", "\n###### ")
    .replaceAll("\n#### ", "\n##### ")
    .replaceAll("\n### ", "\n#### ")
    .replaceAll("\n## ", "\n### ")
    .replaceAll("\n# ", "\n## ")
    .replaceAll(
      /:::spoiler (.*)\n([\S\s]*?):::/g,
      '{% collapsecard "$1" %}$2{% endcollapsecard %}'
    )
    .replaceAll(
      /:::spoiler\n([\S\s]*?):::/g,
      '{% collapsecard "詳細" %}$1{% endcollapsecard %}'
    )
    .replaceAll(":::info", "{% blockquote %}")
    .replaceAll(":::warning", "{% blockquote %}")
    .replaceAll(":::", "{% endblockquote %}")
    .replaceAll(/\[^\w+\]/g, " $0")
    .replaceAll(":heavy_check_mark:", '<div class="check"></div>'),
  urlToFileName
)}
`;
  writeFileSync(`source/_posts/${fileName}.md`, markdownFileContent);
}
