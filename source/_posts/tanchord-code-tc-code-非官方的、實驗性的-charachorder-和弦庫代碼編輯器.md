---
title: TanChord Code (TC Code) - 非官方的、實驗性的 CharaChorder 和弦庫代碼編輯器
date: 2025-11-23T08:00:54.183Z
updated: 2025-11-24T14:07:48.372Z
categories: [文章, 作品]
alias:
  - /2025/11/21/tanchord-code-tc-code-非官方的、實驗性的-charachorder-和弦庫代碼編輯器/
  - /2025/11/22/tanchord-code-tc-code-非官方的、實驗性的-charachorder-和弦庫代碼編輯器/
  - /2025/11/23/tanchord-code-tc-code-非官方的、實驗性的-charachorder-和弦庫代碼編輯器/
  - /2025/11/24/tanchord-code-tc-code-非官方的、實驗性的-charachorder-和弦庫代碼編輯器/
  - /2025/11/25/tanchord-code-tc-code-非官方的、實驗性的-charachorder-和弦庫代碼編輯器/
otherLanguages:
  - text: English Version
    path: https://andy23512.github.io/blog/tanchord-code-tc-code-an-unofficial-experimental-code-editor-for-the-chord-library-of-charachorder-device/
---
{% blockquote %}
:information_source: 免責聲明：本編輯器與 CharaChorder 公司沒有隸屬、關聯、授權、認可，或任何正式關聯的關係。
{% endblockquote %}

![localhost_4300_](https://hackmd.io/_uploads/SkO7J4xbZl.png)

## 連結

- [TanChord Code](https://andy23512.github.io/tccode/)
- [GitHub](https://github.com/andy23512/tccode)
- <a href="{% post_path tanchord-code-library-tccl-語言參考文件 %}">TanChord Code Library (TCCL) 語言參考文件</a>

## TCCL 語言

這個編輯器讓你能用一個類似於 CharaChorder 官方文件提到的[和弦表示法](https://docs.charachorder.com/Chords.html#chord-notation)來描述和弦庫。我將這個語言稱為 TanChord Code Library 語言，簡稱 TCCL。

## 功能

- 可以從不同的來源載入和弦庫
  - CharaChorder 輸入裝置
  - 來自官方裝置管理工具的 JSON 備份檔案
  - TCCL or TCCL 格式的 TXT 檔案
- 能在代碼編輯器中編輯和弦庫
  - 自動檢查文法錯誤和重複和弦
  - 支援通用的編輯器快捷鍵設定 (典型編輯器 / emacs / vim)
- 儲存和弦庫至 CharaChorder 輸入裝置或檔案

## 其他相關主題

### 開發這個編輯器的緣由

在<a href="{% post_path tangent-的和弦用法 %}">我的和弦用法這篇文章</a>有提到，CC 和弦和注音和弦在它們有相同輸入時會發生衝突。每次用即時添加和弦（Impulse Chord）或裝置管理工具新增和弦時都要檢查會花不少力氣，有時候我也會忘記檢查。檢查和弦是否有重複也相當麻煩。

身為一個軟體工程師，我有個想法。我們可以在一個代碼編輯器中編輯我們的和弦庫。它就像我們在寫程式時一樣，會做好所有需要的檢查。這就是這個編輯器的由來。

### 命名

這個編輯器的名字，我一開始考慮過「Chord Studio Code」（取自流行的程式碼編輯器 Visual Studio Code）或「Chord Editor」。但這些名字太過籠統了，所以我決定再加入我的英文名字 Tangent 進去。這就是它叫「TanChord Code」的原因。

### 標誌設計

![andy23512.github.io_tccode_](https://hackmd.io/_uploads/r1DYsVgbbx.png)

如果你觀察它的描邊，這個圖標是由兩個圓形和一個直線組成。直線是裡面的圓的切線（Tangent），也是外面的圓的弦（Chord）。這與名稱中的「TanChord」互相呼應。

另外，如果看它的填色區塊，這個圖標是由一個藍綠色的 C、黑色的 O 和紅色的 D 組成。如果忽略不發音的 e，這可以意指 code，或者是可以指一個可能的和弦組合「c+o+d = code」。

## 技術堆疊

- 編譯系統：[Nx](https://nx.dev/)
- 前端框架：[Angular](https://angular.dev/)
- 元件庫：[Angular Material](https://material.angular.io/)
- 狀態管理系統：[@ngrx/signal](https://ngrx.io/guide/signals/)
- 代碼編輯器函式庫：[Monaco Editor](https://microsoft.github.io/monaco-editor/)
  - Vim 快捷鍵支援：[monaco-vim](https://www.npmjs.com/package/monaco-vim)
  - Emacs 快捷鍵支援：[monaco-emacs](https://www.npmjs.com/package/monaco-emacs)
- CSS 框架：[Tailwind CSS](https://tailwindcss.com/)
- 代碼解析器產生器：[ANTLR](https://www.antlr.org/)
  - TypeScript 執行階段函式庫：[antlr4ng](https://www.npmjs.com/package/antlr4ng) 
  - 命令列介面工具：[antlr-ng](https://www.npmjs.com/package/antlr-ng)
  - 代碼自動完成引擎：[antlr4-c3](https://www.npmjs.com/package/antlr4-c3)
- 偵測縮排：[detect-indent](https://www.npmjs.com/package/detect-indent)
- 樹狀資料比對：[tree-object-diff](https://www.npmjs.com/package/tree-object-diff)
