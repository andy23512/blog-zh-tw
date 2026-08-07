/**
 * Everything that legitimately differs between the English and the Traditional
 * Chinese edition of the blog. Every other file under bin/, model/, util/ and
 * scripts/ is byte-identical across the two repositories — keep it that way and
 * add new per-language values here instead.
 */
export const siteConfig = {
  /** The other edition, linked from each post and from the hreflang tags. */
  otherLanguage: {
    lang: "en",
    text: "English Version",
    baseUrl: "https://andy23512.github.io/blog/",
  },
  /** HackMD image URLs are rewritten to this path when a note is imported. */
  imageBasePath: "/blog-zh-tw/images/",
  /** Category values used by this edition's sheet of the note table. */
  noteCategories: ["筆記", "文章"],
  /** Label for a spoiler block that carries no title of its own. */
  spoilerFallbackTitle: "詳細",
  /**
   * Site-wide Open Graph image. The JPG is rendered by `yarn og` and committed;
   * `url` is what the meta tags point at. See bin/generate-og-image.ts.
   */
  ogImage: {
    url: "https://andy23512.github.io/blog-zh-tw/images/og-image.jpg",
    kicker: "TANGENT CHANG · 🐰📐",
    title: "Tangent 的部落格",
    titleSize: 78,
    subtitle: ["有關 CharaChorder 和 Forge 的", "非官方筆記和文章"],
    footer: "andy23512.github.io/blog-zh-tw",
  },
};
