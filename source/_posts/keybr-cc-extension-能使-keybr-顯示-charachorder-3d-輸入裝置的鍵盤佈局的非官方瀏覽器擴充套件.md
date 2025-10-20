---
title: Keybr CC Extension - 能使 Keybr 顯示 CharaChorder 3D 輸入裝置的鍵盤佈局的非官方瀏覽器擴充套件
date: 2025-10-19 20:54:51
updated: 2025-10-19 22:01:31

---
{% blockquote %}
:information_source: 免責聲明：本擴充套件與 CharaChorder 公司和 Keybr 沒有隸屬、關聯、授權、認可，或任何正式關聯的關係。
{% endblockquote %}

![screenshot-dark-cc1](https://hackmd.io/_uploads/rJgRuNMCeg.png)

## 連結

- [Chrome 應用程式商店](https://chromewebstore.google.com/detail/keybr-cc-extension/fdofhfbipdhkkhhdjlfjnjfnkibpbdpg)
- [GitHub](https://github.com/andy23512/keybr-cc-extension)
- [展示影片](https://youtu.be/IQWf4IuekFQ?si=q_DkxyKOvMsdcqV3)

## （在最新的開發版本的）功能

- 在 [Keybr](https://www.keybr.com/) 上顯示 CharaChorder 3D 輸入裝置的鍵盤佈局
- 支援上傳使用者自定義的裝置佈局
- 鍵盤佈局可拖拉移動

## 其他相關主題

### 選擇開發瀏覽器擴充套件的理由

要修改一個如 Keybr 的開源網站有很多方法，包含：

1. 直接參與該專案
2. Fork 該專案並自己架設並維護修改後的網頁
3. 用如 [Tampermonkey](https://www.tampermonkey.net/) 的套件來對網頁注入 JavaScript
4. 製作一個瀏覽器擴充套件來修改和擴充網頁的功能

有關第一個方式，我曾看過 Keybr 的程式碼。其中的鍵盤圖示繪製邏輯是給 1D 鍵盤用的，就跟你在它的[佈局頁面](https://www.keybr.com/layouts)看到的一樣。讓它直接支援 CharaChorder 3D 輸入裝置將花很多實作和審核的工。更不用提及為了支援客製化的佈局 JSON 檔案，還要處理 CharaChorder 的動作碼。

第二個方式，除了修改其程式碼的工以外，架設和更新網頁是一個一直持續下去的工作，特別是需要儲存使用者的資訊在伺服器上的網頁。使用者有兩個很像的網頁但有不同的資料，這件事也不太好。

第三個方式，要顯示動態的鍵盤佈局的程式碼也不少。另外我們會需要有一個方式，從如何安裝 Tampermonkey 開始到執行程式，一步一步的教使用者。所以這對開發者和使用者來說都不是好選擇。

最後一個方式，製作一個瀏覽器擴充套件，也就是我選擇的方式。在開發者這邊，這樣可以讓我不用去研究大量的 Keybr 的程式碼。我只需要研究在 Keybr 上如何取到目前的字元、如何隱藏既有的鍵盤佈局和如何顯示我寫的元件。其他的東西我都可以在擴充套件內寫。除此之外，我可以自由決定想使用的技術堆疊，也可以獨立作業。在使用者那邊，使用者只要前往應用程式商店頁面，將這個擴充套件加到他們的瀏覽器上，就完成了。這是個雙贏的解法。

### 技術堆疊

- Chrome 擴充套件起手包： [chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)
- 程式語言：[TypeScript](https://www.typescriptlang.org/)
- 模組打包器：[webpack](https://webpack.js.org/)
- 圖標：[Material Icon](https://fonts.google.com/icons)
- 網頁使用者介面函式庫：[React](https://react.dev/)
- CSS 框架：[Tailwind CSS](https://tailwindcss.com/)
- 瀏覽器 API 填補器：[webextension-polyfill](https://github.com/mozilla/webextension-polyfill)
- 拖拉移動函式庫：[react-draggable](https://github.com/react-grid-layout/react-draggable)
- Class 名稱公用程式：[classnames](https://www.npmjs.com/package/classnames)
