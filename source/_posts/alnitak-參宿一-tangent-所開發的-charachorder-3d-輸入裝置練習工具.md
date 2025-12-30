---
title: Alnitak 參宿一 - Tangent 所開發的 CharaChorder 3D 輸入裝置練習工具
description: Tangent 在這篇文章介紹了 Alnitak 參宿一，他所開發的 CharaChorder One 練習工具。
date: 2024-05-01T13:47:10.863Z
updated: 2025-12-21T00:30:46.900Z
categories: [文章, 作品]
alias:
  - /2024/04/29/alnitak-參宿一-tangent-所開發的-charachorder-3d-輸入裝置練習工具/
  - /2024/04/30/alnitak-參宿一-tangent-所開發的-charachorder-3d-輸入裝置練習工具/
  - /2024/05/01/alnitak-參宿一-tangent-所開發的-charachorder-3d-輸入裝置練習工具/
  - /2024/05/02/alnitak-參宿一-tangent-所開發的-charachorder-3d-輸入裝置練習工具/
  - /2024/05/03/alnitak-參宿一-tangent-所開發的-charachorder-3d-輸入裝置練習工具/
otherLanguages:
  - text: English Version
    path: https://andy23512.github.io/blog/alnitak-a-practice-tool-of-charachorder-3d-input-devices-developed-by-tangent/
---
{% blockquote %}
:information_source: 免責聲明：本練習工具與 CharaChorder 公司沒有隸屬、關聯、授權、認可，或任何正式關聯的關係。
{% endblockquote %}

![截圖 2025-02-19 23.15.27](https://hackmd.io/_uploads/HJR3BOX51l.png)

## 連結

- [Alnitak](https://andy23512.github.io/alnitak/)
- [Github](https://github.com/andy23512/alnitak)

## 功能

- 鍵盤佈局課程
  - 在一個小課程中可練習 3~4 個鍵
  - 有英文、數字和符號的課程
- 顯示裝置佈局
  - 只會標示目前課程中的鍵
  - 打出目前的字所需要按的鍵會強調顯示
  - 能從裝置管理網頁的備份檔案中讀取自訂的裝置佈局
- 小工具
  - 連擊計數器，會紀錄連續正確輸入的次數
  - 速度計，會顯示目前的打字速度
- 和弦練習
  - 能從裝置管理網頁的備份檔案中讀取和弦列表
  - 能從和弦列表中選擇想練習的和弦們
  - 只會標示目前練習的和弦們的鍵
  - 目前的和弦的按鍵組合會強調顯示
- 佈局檢視器
  - 可以檢視在不同層和修飾鍵（Shift 和 Alt Graph 鍵）下最終輸出的佈局（在所選的作業系統佈局下的實際輸出）
  - 在佈局中搜尋按鍵
  - 列印出最終輸出的佈局(或輸出為 PDF 檔)
- 佈局記憶歌
  - 一首由 AI 生成的歌曲。能協助你記憶在預設佈局上的字母按鍵

## 其他相關主題

### 命名和主題顏色

第一個我希望這個工具要有的功能，就是能讓使用者一次只需練習 3 個字左右。（對，就是黃金三條法則） 所以關於這個專案的名字，我就從「三」開始發想，然後找到三的大寫「參」。這個字在其他情況和讀音時也有「研究、學習」的意思。

因此，這個專案最初的英文名字為 "typing-san"。 "san" 音近於中文和日文中的三，所以這個名字可以解釋成「打三個或更多個項目」。

但是這個名字對於不知道中文和日文的人太過抽象，而且也很難從這個抽象的名字中來設計工具的主題樣式。

接著，我找到一個名為參宿的星宿，所以我決定把這個專案命名為參宿中的第一顆星，即「參宿一 (Alnitak)」。「參」的一個解釋為「學習」，「宿」的一個解釋為「處所」，「一」即英文中的 One，所以「參宿一」可以被我超譯為「CharaChorder **One** 的學習處所」。並且因為參宿一的主星為藍超巨星，我可以用這個作為這個專案的主題色，所以這就是這個工具的主題色的由來。

### 設計概念

#### 連擊計數器

連擊計數器會紀錄到目前為止連續的正確輸入次數。追求更高的連擊數是一個與輸入速度或準確率不同的挑戰。

當連擊數增加時，計數器的顏色會依照[色溫](https://zh.wikipedia.org/zh-tw/%E8%89%B2%E6%B8%A9)或[恆星光譜](https://zh.wikipedia.org/wiki/%E6%81%92%E6%98%9F%E5%85%89%E8%B0%B1)的方式變化。而本專案的名稱「參宿ㄧ」是恆星的名稱，因此這個顏色變化方式非常符合。

#### 速度計

速度計是將目前的速度視覺化的一個好方式。其設計是從收集與一個經典的賽車動畫，「閃電霹靂車」，有關的一些儀表板或速度計設計開始。再為了避免過於複雜的設計分散使用者的注意力，對設計進行簡化後，才成為現在的樣子。另外，甜甜圈分塊的形狀與 CC1 的佈局上的按鍵形狀相當配。

分塊和數字的顏色也根據上面提過的色溫或恆星光譜的方式變化。

### 佈局記憶歌

在四天前（2025 年 12 月 2 日），我看了一部影片。那是由 AI 生成的動漫哏台語歌。現在 AI 產生音樂的能力讓我相當驚訝。後來，我有個想法。是不是能用 AI 來產生一個可以協助使用者記憶預設佈局的歌曲？這一定可以上學習更加有趣。因為小時候我們也用歌曲學習了不少東西，比如字母歌、Do-Re-Mi 之歌等。

首先，我從歌詞開始著手。我製作了一張只有字母鍵的佈局圖片後，並將這張圖和提示詞「產生一個能協助我記憶這個 3D 輸入裝置的佈局的歌曲」傳給幾個大型語言模型。我最後選擇了 Kimi K2 Thinking 的結果，因為只有它有用單字把數個鍵串連在一起，比如用 "A Tall Ninja Jumps, Yes Sir!" 串起預設佈局右上的 "A-T-L-N-J-Y-S"。

接著，我將這個歌詞傳給 Suno 來產生歌曲。Suno 同時產生了幾個歌曲，我從中選了最有活力的。

最後，我將歌曲和歌詞加到 Alnitak 的佈局歌曲頁面。另外，那個頁面上也會顯示佈局圖，並會在歌曲提到對應的按鍵時顯示並點亮它們。

### 技術堆疊

- 編譯系統：[Nx](https://nx.dev/)
- 前端框架：[Angular](https://angular.dev/)
  - [Signal](https://angular.dev/guide/signals) - input, output and computed
  - [Template Syntax - Control Flow](https://angular.dev/guide/templates/control-flow) 
  - [Standalone Components](https://angular.dev/guide/components/importing#standalone-components)
  - [withComponentInputBinding](https://angular.dev/guide/routing/routing-with-urlmatcher#configure-your-routes-for-your-application)
- 元件庫：[Angular Material](https://material.angular.io/)
- 狀態管理系統：[@ngrx/signal](https://ngrx.io/guide/signals/)
  - SignalStore + Entity Management
  - [@angular-architects/ngrx-toolkit](https://github.com/angular-architects/ngrx-toolkit) 中的 `withDevtools`
- 快捷鍵函式庫：[@ngneat/hotkeys](https://github.com/ngneat/hotkeys)
- CSS 框架：[Tailwind CSS](https://tailwindcss.com/)
- 圖表函式庫：[Highcharts Angular](https://github.com/highcharts/highcharts-angular)
- IndexedDB 包裝庫: [Dexie.js](https://dexie.org/)
- 列印功能的 Directive: [ngx-print](https://github.com/selemxmn/ngx-print)
- User Agent 解析器: [UAParser.js](https://uaparser.dev/)
- 作業系統 Logo 圖標: [font-logos](https://github.com/lukas-w/font-logos)
- Tooltip 函式庫: [@webed/angular-tooltip](https://www.npmjs.com/package/@webed/angular-tooltip)
- 國際化（i18n）函式庫：[ngx-translate](https://ngx-translate.org/)

#### 佈局記憶歌

- 大型語言模型（用來產生歌詞）：[Kimi K2 Thinking](https://www.kimi.com/)
- AI 音樂創作：[Suno](https://suno.com/)
- 歌詞時間戳產生：[Stabilizing Timestamps for Whisper](https://github.com/jianfch/stable-ts)

### 其他參考資料

- [藍巨星配色](https://www.color-hex.com/color-palette/28907)
- [克氏溫度轉顏色的演算法](https://tannerhelland.com/2012/09/18/convert-temperature-rgb-algorithm-code.html)
- [FS Sevegment 字體](https://fontstruct.com/fontstructions/show/2390233/fs-sevegment)
- [速度計設計參考](https://www.youtube.com/watch?v=kyjPWP7NGuk)
- [作業系統佈局參考](https://kbdlayout.info/)
