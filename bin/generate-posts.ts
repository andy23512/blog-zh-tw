import { readFileSync, writeFileSync } from "fs";
import moment from "moment";
import { Note } from "./hackmd.model";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[ '\-,]+/g, "-");
}

(async () => {
  const notes: Note[] = JSON.parse(
    readFileSync("./res/hackmd-note-data.json", { encoding: "utf8" })
  );
  const urlToFileName: Record<string, string> = {};
  for (const note of notes) {
    const url = note.publishLink.replace("https://hackmd.io", "");
    const fileName = slugify(note.title);
    urlToFileName[url] = fileName;
  }
  console.log(urlToFileName);
  for (const note of notes) {
    const url = note.publishLink.replace("https://hackmd.io", "");
    const fileName = urlToFileName[url];
    const lang = note.title.match(/^[\w\-,' ]+$/) ? "en" : "zh-TW";
    const markdownFileContent = `---
title: ${note.title}
date: ${moment(note.createdAt).format("YYYY-MM-DD HH:mm:ss")}
updated: ${moment(note.lastChangedAt).format("YYYY-MM-DD HH:mm:ss")}
lang: ${lang}
---
${note.content.replace(/\[TOC\]\n/g, "")}
`;
    writeFileSync(`source/_posts/${lang}/${fileName}.md`, markdownFileContent);
  }
})();
