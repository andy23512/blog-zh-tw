import { readFileSync, writeFileSync } from "node:fs";
import { Note } from "../model/hackmd.model.js";
import { slugify } from "../util/slugify.js";

const urls: string[] = [];
const rawNotes: Note[] = JSON.parse(
  readFileSync("./res/hackmd-note-data.json", { encoding: "utf8" })
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
  const fileName = urlToFileName[url];
  urls.push(`https://andy23512.com/blog-zh-tw/${fileName}/`);
}
const bingJson = {
  siteUrl: "https://andy23512.com/blog-zh-tw/",
  urlList: urls,
};
writeFileSync("./res/bing-seo.json", JSON.stringify(bingJson, null, 2));
writeFileSync("./res/google-seo.txt", urls.join("\n"));
