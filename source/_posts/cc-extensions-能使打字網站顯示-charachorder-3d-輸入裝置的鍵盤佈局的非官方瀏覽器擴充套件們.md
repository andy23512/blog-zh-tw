---
title: CC Extensions - 能使打字網站顯示 CharaChorder 3D 輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件們
description: Tangent 介紹他所開發的 CC 非官方瀏覽器擴充套件集。它們可以在 Keybr 或 Monkeytype 上顯示 CharaChorder 3D 輸入裝置的鍵盤佈局。
date: 2025-10-19T12:54:51.906Z
updated: 2026-01-06T00:44:16.441Z
categories: [文章, 作品]
alias:
  - /2025/10/17/cc-extensions-能使打字網站顯示-charachorder-3d-輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件們/
  - /2025/10/18/cc-extensions-能使打字網站顯示-charachorder-3d-輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件們/
  - /2025/10/19/cc-extensions-能使打字網站顯示-charachorder-3d-輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件們/
  - /2025/10/20/cc-extensions-能使打字網站顯示-charachorder-3d-輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件們/
  - /2025/10/21/cc-extensions-能使打字網站顯示-charachorder-3d-輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件們/
otherLanguages:
  - text: English Version
    path: https://andy23512.com/blog/cc-extensions-unofficial-extensions-that-display-the-layout-of-charachorder-3d-input-devices-on-typing-websites/
---
{% blockquote %}
:information_source: 免責聲明：本擴充套件與 CharaChorder、Keybr 和Monkeytype 沒有隸屬、關聯、授權、認可，或任何正式關聯的關係。
{% endblockquote %}

## 連結

### Keybr CC Extension

- [Chrome 應用程式商店](https://chromewebstore.google.com/detail/keybr-cc-extension/fdofhfbipdhkkhhdjlfjnjfnkibpbdpg)
- [Firefox 附加元件站](https://addons.mozilla.org/en-US/firefox/addon/keybr-cc-extension/)
- [GitHub](https://github.com/andy23512/keybr-cc-extension)
- [展示影片](https://youtu.be/IQWf4IuekFQ)

### Monkeytype CC Extension

- [Chrome 應用程式商店](https://chromewebstore.google.com/detail/monkeytype-cc-extension/mhfjhmegecimjbohhdbflkhdfnaadple)
- [Firefox 附加元件站](https://addons.mozilla.org/en-US/firefox/addon/monkeytype-cc-extension/)
- [GitHub](https://github.com/andy23512/monkeytype-cc-extension)
- [展示影片](https://youtu.be/nwbKUjUmwD4)


## 功能

- 在 [Keybr](https://www.keybr.com/) 或 [Monkeytype](https://monkeytype.com/) 上顯示 CharaChorder 3D 輸入裝置的鍵盤佈局
- 支援上傳使用者自定義的裝置佈局
- 支援改變鍵盤佈局的位置、大小和透明度
- 支援作業系統鍵盤佈局選項

## 其他相關主題

### 開發這個擴充套件的原因

目前已經有一些可以顯示 CharaChorder 3D 輸入裝置的練習工具，例如 [dot i/o](https://www.iq-eq.io/#/) 和 [Alnitak](https://andy23512.github.io/alnitak/)。它們有不同的佈局學習策略。然而，Keybr 有著傑出且獨特的學習策略，使得很多 CharaChorder 使用者偏好使用它來練習。然而也有些使用者比起 Keybr，更喜歡使用 Monkeytype。

因此，為了讓它們更符合 CharaChorder 使用者的需要，我決定使 Keybr 和 Monkeytype 能支援顯示 CharaChorder 3D 輸入裝置的佈局。

### 選擇開發瀏覽器擴充套件的原因

要修改一個如 Keybr 和 Monkeytype 的開源網站有很多方法，包含：

1. 直接參與該專案
2. Fork 該專案並自己架設並維護修改後的網頁
3. 用如 [Tampermonkey](https://www.tampermonkey.net/) 的套件來對網頁注入 JavaScript
4. 製作一個瀏覽器擴充套件來修改和擴充網頁的功能

有關第一個方式，我曾看過 Keybr 的程式碼。其中的鍵盤圖示繪製邏輯是給 1D 鍵盤用的，就跟你在它的[佈局頁面](https://www.keybr.com/layouts)看到的一樣。讓它直接支援 CharaChorder 3D 輸入裝置將花很多實作和審核的工。更不用提及為了支援客製化的佈局 JSON 檔案，還要處理 CharaChorder 的動作碼。在 Monkeytype 那邊，甚至連鍵盤圖示顯示功能都沒有。

第二個方式，除了修改其程式碼的工以外，架設和更新網頁是一個一直持續下去的工作，特別是需要儲存使用者的資訊在伺服器上的網頁。使用者有兩個很像的網頁但有不同的資料，這件事也不太好。

第三個方式，要顯示動態的鍵盤佈局的程式碼也不少。另外我們會需要有一個方式，從如何安裝 Tampermonkey 開始到執行程式，一步一步的教使用者。所以這對開發者和使用者來說都不是好選擇。

最後一個方式，製作一個瀏覽器擴充套件，也就是我選擇的方式。在開發者這邊，這樣可以讓我不用去研究大量的 Keybr 和 Monkeytype 的程式碼。我只需要研究在 Keybr 上如何取到目前的字元、如何隱藏既有的鍵盤佈局和如何顯示我寫的元件。其他的東西我都可以在擴充套件內寫。除此之外，我可以自由決定想使用的技術堆疊，也可以獨立作業。在使用者那邊，使用者只要前往應用程式商店頁面，將這個擴充套件加到他們的瀏覽器上，就完成了。這是個雙贏的解法。

### 標誌和圖標設計

不像一個網站，一個擴充套件需要有額外的圖片，例如在瀏覽器的擴充套件區域顯示的圖標，和在擴充套件商店顯示的標誌。

因為 Keybr CC Extension 這個擴充套件是在 Keybr 上被使用，我就從 Keybr 的標誌尋找靈感。Keybr 的標誌是顯示傾斜的鍵盤佈局。於是我做的第一個標誌，就是單純把這個擴充套件顯示的佈局傾斜後截圖產生的。

![image](https://hackmd.io/_uploads/S1J5rvnkbe.png)

但是這個標誌顯示在瀏覽器的工具列時，會變很小，也很難辨識，在使用暗色主題的瀏覽器下問題更嚴重。

為了解決這個問題，我設計了第二個，也就是現在使用的標誌。這個新的標誌就只顯示一個搖桿的佈局圖，並點亮它的北、西、南鍵。這樣設計就形成一個 C 形，與 CharaChorder 彼此呼應，在小尺寸時也能夠辨識。

![icon-128](https://hackmd.io/_uploads/r1QCPP31Zx.png)

而 Monkeytype CC Extension 那邊，我就用 Monkeytype 的主題樣式做了一個類似的。

![icon-128](https://hackmd.io/_uploads/SJyL5eRy-e.png)

### 鍵盤佈局設計

在開發鍵盤佈局元件時，我最初的作法是，把 [Alnitak](https://andy23512.github.io/alnitak/) ——我之前為 CC 3D 輸入裝置開發的練習工具——上的佈局的 SVG 複製過來，做出一個概念驗證版本。下面就是在那個階段時的截圖。在這個版本就已經能偵測 Keybr 上目前的字元並點亮在佈局上的對應按鍵。

![image](https://hackmd.io/_uploads/S11QFOhkZl.png)

由截圖可以發現，鍵盤佈局的樣式與 Keybr 的樣式並不搭。研究過 Keybr 的主題和套用樣式的方式後，我發現它是用 CSS 變數來設定主題顏色和字體的。於是我決定取用這些 CSS 變數並將它們套用到佈局元件上。如此一來就能使佈局元件的樣式能適應不同的 Keybr 主題設定，並使它能夠與 Keybr 上的其他元素搭配。

![screenshot-dark-cc1](https://hackmd.io/_uploads/H1p6TO2yZx.png)

![screenshot-m4g-light](https://hackmd.io/_uploads/Bkj0a_2JZe.png)

而在 Monkeytype 那邊，因為它也用 CSS 變數來設定主題顏色和字體，所以我也在 Monkeytype CC Extension 中用一樣的方式處理。 

![screenshot-dark-cc1](https://hackmd.io/_uploads/By-ZogCybx.png)

![screenshot-light-m4g](https://hackmd.io/_uploads/HyLbix0yWx.png)

### 選擇使用 React 的原因

如果你去觀察我在其他專案使用的技術堆疊，你會發現我主要是用 [Angular](https://angular.dev/) 這套前端框架。Angular 是我最熟悉的前端框架，我也在我全端工程師的工作中使用它。然而，我還是能夠使用其他選項開發，比如 [React](https://react.dev/) 或者 [Vue](https://vuejs.org/)。

在這個擴充套件中，我選擇改用 React，並重寫來自 Alnitak 的鍵盤佈局元件，主要有兩個原因。

第一，Keybr 本身就是用 React 寫的，所以使用一樣的函式庫可以避免使用不同的前端框架或 UI 函式庫時可能會發生的無法預料的問題。（Monkeytype 沒有用前端框架或 UI 函式庫。）

第二個原因是效能問題。Angular 很適合用在開發如 Alnitak 這種複雜的網頁，但它對於這種只顯示一個鍵盤佈局元件的情況會過於笨重。因此，我偏向在 CC Extensions 上使用 React 這種輕量的架構來開發。

### 技術堆疊

- Chrome 擴充套件起手包： [chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)
- 程式語言：[TypeScript](https://www.typescriptlang.org/)
- 模組打包器：[webpack](https://webpack.js.org/)
- 圖標：[Material Icon](https://fonts.google.com/icons)
- 網頁使用者介面函式庫：[React](https://react.dev/)
- 元件庫：[MUI](https://mui.com/)
- CSS 框架：[Tailwind CSS](https://tailwindcss.com/)
- 瀏覽器擴充套件 API 填補器：[webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
- 拖拉移動、拉伸調整大小、貼合函式庫：[react-moveable](https://www.npmjs.com/package/react-moveable)
- Class 名稱公用程式：[classnames](https://www.npmjs.com/package/classnames)
- 狀態管理：[Zustand](https://zustand-demo.pmnd.rs/)
- 瀏覽器擴充套件開發命令列工具：[web-ext](https://www.npmjs.com/package/web-ext)
