---
title: Chara 常陳四 - Tangent 所開發的 CharaChorder 3D 輸入裝置和弦練習工具
description: Tangent 在這篇文章介紹了 Chara 常陳四，他所開發的 CharaChorder 3D 輸入裝置和弦練習工具。
date: 2026-06-22T01:56:39.633Z
updated: 2026-07-04T09:06:24.205Z
categories: [文章, 作品]
alias:
  - /2026/06/20/chara-常陳四-tangent-所開發的-charachorder-3d-輸入裝置和弦練習工具/
  - /2026/06/21/chara-常陳四-tangent-所開發的-charachorder-3d-輸入裝置和弦練習工具/
  - /2026/06/22/chara-常陳四-tangent-所開發的-charachorder-3d-輸入裝置和弦練習工具/
  - /2026/06/23/chara-常陳四-tangent-所開發的-charachorder-3d-輸入裝置和弦練習工具/
  - /2026/06/24/chara-常陳四-tangent-所開發的-charachorder-3d-輸入裝置和弦練習工具/
otherLanguages:
  - text: English Version
    lang: en
    path: https://andy23512.github.io/blog/chara-a-chord-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent/
hackMDUrl: https://hackmd.io/@andy23512/H1xwLf8MMe
---
{% blockquote %}
:information_source: 免責聲明：本練習工具與 CharaChorder 公司沒有隸屬、關聯、授權、認可，或任何正式關聯的關係。
{% endblockquote %}

![截圖 2026-06-22 08.53.36](/blog-zh-tw/images/Bkq6v-Lfzl.png)

## 連結

- [Chara](https://andy23512.github.io/chara/)
- [GitHub](https://github.com/andy23512/chara)
- <a href="{% post_path tangent-對學習使用-charachorder-輸入裝置英文和弦輸入的建議 %}#CHARA-循環是什麼？">CHARA 循環</a>

## 功能

- 和弦頁面
  - 會呈現你的和弦庫中的所有和弦，以及在各個階段的練習統計。
  - 能從輸入裝置中讀取和弦庫和裝置佈局。
  - 可以對和弦加上書籤，它們就會優先進入練習循環。
  - 可以封鎖和弦，它們就不會出現在各階段之中。
  - 可以選擇數個和弦後，進入自訂練習模式。
  - 你可以依據各種條件搜尋、篩選和排序和弦。
- 適應、實現、積累頁面
  - 這些是與 CHARA 循環一致的練習階段。
  - 會自動從你的和弦庫中挑出和弦放進練習循環。
  - 練習組大小和通過的條件可以在設定頁面中調整。

## 其他相關主題

### 命名和主題顏色

在構思這個和弦練習工具的名稱時，我想要讓它與我上一個練習工具 [Alnitak 參宿一](https://andy23512.github.io/alnitak/)一致，所以就開始蒐集有關和弦或 CharaChorder 的星星名字。最終找到 Chara 這個完美的名字。它是星星的名字（獵犬座β），並且它也是 CharaChorder 名字中的一部分。CHARA 循環也是源自於這裡，所有全部都串連在一起。

如同 Alnitak，因為 Chara 是一個 G 型主序星，所以使用黃色來作為這個應用程式的主題色。

### 圖像輔助

不像 Alnitak， Chara 的圖像輔助上並不會有文字標籤。這是刻意讓使用者更專注在手部動作，而不是按鍵。

### 技術堆疊

- 編譯系統：[Nx](https://nx.dev/)
- 前端框架：[Angular](https://angular.dev/)
- 元件庫：[Angular Material](https://material.angular.io/)
- 狀態管理系統：[@ngrx/signal](https://ngrx.io/guide/signals/)
  - SignalStore + Entity Management
  - [@angular-architects/ngrx-toolkit](https://github.com/angular-architects/ngrx-toolkit) 中的 `withDevtools`
- 快捷鍵函式庫：[@ngneat/hotkeys](https://github.com/ngneat/hotkeys)
- CSS 框架：[Tailwind CSS](https://tailwindcss.com/)
- User Agent 解析器: [UAParser.js](https://uaparser.dev/)
- 作業系統 Logo 圖標: [font-logos](https://github.com/lukas-w/font-logos)
- 國際化（i18n）函式庫：[ngx-translate](https://ngx-translate.org/)
- 進度條：[ngx-loading-bar](https://aitboudad.github.io/ngx-loading-bar/)
- 表格模組：[AG Grid](https://www.ag-grid.com/)
- 速度計顏色映射表：[colormap](https://www.npmjs.com/package/colormap)
