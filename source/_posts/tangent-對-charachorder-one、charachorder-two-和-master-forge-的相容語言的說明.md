---
title: Tangent 對 CharaChorder One、CharaChorder Two 和 Master Forge 的相容語言的說明
date: 2024-10-10 00:55:29
updated: 2025-11-21 19:30:48
categories: [文章, 語言]
otherLanguages:
  - text: English Version
    path: https://andy23512.github.io/blog/2024/10/01/tangent-s-explanation-to-the-compatible-languages-of-charachorder-one-charachorder-two-and-master-forge/
---
## 簡短總結

- 一、普通鍵盤會送出鍵擊的掃描碼，然後作業系統會根據鍵盤佈局設定把它們轉換成實際的字元。這就是普通鍵盤如何能支援作業系統支援的所有輸入語言。
- 二、CC1、CC2 和 M4G 也可以支援這些語言，因為它們發送鍵擊的方式跟普通鍵盤一樣。
- 三、當你想要使 CC1、CC2 或 M4G 在一個「QWERTY - US」以外的作業系統佈局下輸出一個字元，你要對該鍵或者和弦輸出，設定在「QWERTY - US」佈局上對應（在相同位置）的字元。
- 四、一些功能只支援 QWERTY 佈局或英文。
  - 預設的和弦庫
    - 只有英文
    - 只能在 QWERTY 佈局下使用
  - 生成式文字選單 (Generative Text Menu, GTM) 和即時添加和弦選單 (Impulse Chord Menu)
    - 在非 QWERTY 佈局下使用，文字介面會是亂碼
  - ==[部分支援]== 裝置管理工具 (Device Manager) 上顯示的裝置佈局和和弦輸出
    - 一些按鍵（如 Shift 層的鍵）會顯示按鍵或和弦在「QWERTY - US」佈局下的輸出，而不是目前所使用的作業系統佈局。
  - 和弦修飾功能
    - 主要是使用英文的修飾規則
    - 只能在 QWERTY 佈局下使用
- 五、如果你的語言在 [QWERTY - US Intl](https://zh.wikipedia.org/wiki/%E9%94%AE%E7%9B%98%E5%B8%83%E5%B1%80#%E7%BE%8E%E5%9B%BD%E5%9B%BD%E9%99%85) (美國國際) 上有被支援的話，使用它會相對比較容易。可以避免你需要做很多「三、」提到的轉換和避免「四、」提到的一些不相容問題。

### 一、在鍵盤上為何能輸入多種不同的語言？

首先，在說明 CC1、CC2 和 M4G 的支援的語言之前，我們需要先知道在鍵盤上為什麼能輸入多種不同的語言。

當你按下鍵盤上的一個鍵時，它不會送出那個鍵上面的字元給電腦，而是送出那個鍵的識別碼，**鍵盤掃描碼**[^scancode]。接著，是電腦上的作業系統根據鍵盤佈局設定（註：底下會簡稱為**作業系統佈局[^os_layout]**），把掃描碼轉換成實際的字元。如此，我們不需要因為我們想輸入的幾種語言就有幾個鍵盤，而是只要切換作業系統佈局就可以輸入不同語言。

用一般鍵盤上的第二欄（有 `1` 鍵的那一欄）與 [QWERTY](https://zh.wikipedia.org/wiki/QWERTY%E9%8D%B5%E7%9B%A4) 佈局為例，底下的 GIF 中會展示鍵盤送出的掃描碼、作業系統佈局上對應的字元和輸出。

{% collapsecard "點擊以顯示 GIF" %}  ![output](https://hackmd.io/_uploads/B1MM6Dr1Jx.gif)
{% endcollapsecard %}

而當使用者將作業系統佈局切換到 [QWERTZ](https://zh.wikipedia.org/wiki/QWERTZ%E9%8D%B5%E7%9B%A4) 佈局時，如底下的 GIF 所示，鍵盤上該欄的掃描碼不會變，但是掃描碼 `1D` 輸出的字元從 `z` 變為 `y`，這是受作業系統佈局變化所影響。

{% collapsecard "點擊以顯示 GIF" %}  ![output](https://hackmd.io/_uploads/rJNbeOHkJx.gif)
{% endcollapsecard %}

換成其他作業系統佈局也會發生類似的事情，如 [JCUKEN](https://zh.wikipedia.org/wiki/JCUKEN%E9%8D%B5%E7%9B%A4) 佈局。

{% collapsecard "點擊以顯示 GIF" %}  ![output](https://hackmd.io/_uploads/B1RL-uHy1x.gif)
{% endcollapsecard %}

需要與輸入法一起使用的作業系統佈局也一樣，如[大千注音](https://zh.wikipedia.org/zh-tw/%E6%B3%A8%E9%9F%B3%E8%BC%B8%E5%85%A5%E6%B3%95#%E5%A4%A7%E5%8D%83%E6%B3%A8%E9%9F%B3%E9%8D%B5%E7%9B%A4%E6%8E%92%E5%88%97)佈局。

{% collapsecard "點擊以顯示 GIF" %}  ![output](https://hackmd.io/_uploads/rkA1UuBkkg.gif)
{% endcollapsecard %}

### 二、在 CC1、CC2 和 M4G 上為何能輸入多種不同的語言？

在 CC1、CC2 和 M4G (以及其他 CC 輸入裝置)，你能夠使用[裝置管理工具](https://charachorder.io/)來設定任何按鍵或者和弦，它們輸出的字元或者動作。但其實只會決定按鍵或和弦被使用時所送出的掃描碼（在「QWERTY - US」作業系統佈局上對應的掃描碼）。

舉例來說，我們使用裝置管理工具，在 CC1、CC2 或 M4G 的一個搖桿上的四個方向，分別設定了字元 `1`、`q`、`a` 和 `z`。跟一般鍵盤的 QWERTY 範例類似，它們對應的掃描碼會是 `1E`、`14`、`04` 和 `1D`。在這之後的流程就會跟一般鍵盤一樣。底下的 GIF 會同步比較一般鍵盤和 CC1、CC2 或 M4G 的流程。

{% collapsecard "點擊以顯示 GIF" %}  ![output](https://hackmd.io/_uploads/BJ4TYuBJyl.gif)
{% endcollapsecard %}

所以如你所期待的，當使用者換成其他作業系統佈局時，掃描碼會用跟一般鍵盤上一樣的方式，被換成輸出的字元。底下的 GIF 顯示其他作業系統佈局上的流程。


{% collapsecard "點擊以顯示 GIF (QWERTZ)" %}  ![output](https://hackmd.io/_uploads/BkW-idS1yg.gif)
{% endcollapsecard %}

{% collapsecard "點擊以顯示 GIF (JCUKEN)" %}  ![output](https://hackmd.io/_uploads/SyJKo_BJ1e.gif)
{% endcollapsecard %}

{% collapsecard "點擊以顯示 GIF (大千注音)" %}  ![output](https://hackmd.io/_uploads/SkfIh_ryJl.gif)
{% endcollapsecard %}

所以與一般鍵盤類似，你可以使用不同的作業系統佈局來在 CC1、CC2 或 M4G 上輸入不同語言。

### 三、如何設定在其他作業系統佈局下使用時的 CC1、CC2 或 M4G？ 

因為網頁瀏覽器的限制，裝置管理工具不能從瀏覽器取得整個作業系統佈局的資訊[^keyboard_api]。所以一些鍵（如在 Shift 層的鍵）在裝置管理工具上的佈局和和弦輸出上所顯示的，是當作業系統佈局為 `QWERTY - US` 時的預期輸出。

舉例來說，假設我們想要一個按鍵在 `QWERTZ - Germany` 佈局上輸出 `z`，那麼我們要在裝置管理工具上，設定那個按鍵為 `y`。因為「在 `QWERTZ - Germany` 上的 `z` 鍵」和「在 `QWERTY - US` 上的 `y` 鍵」在同一個位置。

![image](https://hackmd.io/_uploads/SkrdO7Nk1x.png)

這個方式也同樣適用在 Shift 層的字元。假設我們想要一個按鍵在 `QWERTZ - Germany` 佈局上輸出 `"`，那麼我們要在裝置管理工具上，設定那個按鍵為 `@`。

這就是如何在既有的作業系統佈局上設定 CC1、CC2 或 M4G。而如果你想要進一步客製化作業系統佈局，你需要使用額外的軟體。你可以在[CC 官方文件的佈局頁面](https://docs.charachorder.com/Layout.html#the-real-solution)和[英文維基百科的鍵盤佈局頁面](https://en.wikipedia.org/wiki/Keyboard_layout#Layout_changing_software)找到一些。

#### 非 US 額外按鍵

一些作業系統佈局會比 `QWERTY - US` 多一些鍵。

##### 非 US # 和 ~

![image](https://hackmd.io/_uploads/Sk1IcJiskl.png)

這個鍵在 CC 輸入裝置上對應的操作碼為 `KSC_32 - Keyboard Non-US # and ~`。

![image](https://hackmd.io/_uploads/ry8Wp1ijyx.png)

這個鍵在各語言典型的作業系統佈局上對應的符號列在下方[^non_us_number_sign_and_tilde]。

- US: \|
- Belg: µ\`£
- French Canadian: <}>
- Danish: ’*
- Dutch: <>
- French: *µ
- German: # ’
- Italian: ù§
- LatinAmerica: }\`]
- Norwegian: , *
- Spain: }Ç
- Swedish: , *
- Swiss: $£
- UK: #~

##### 非 US \\ 和 |

![image](https://hackmd.io/_uploads/r15FOyLGJx.png)

這個鍵在 CC 輸入裝置上對應的操作碼為 `KSC_64 - Keyboard Non-US \ and |`。

![image](https://hackmd.io/_uploads/ryNoc1IGke.png)

這個鍵在各語言典型的作業系統佈局上對應的符號列在下方[^non_us_backslash_and_pipe]。

- Belg: <\\>
- French Canadian: <°>
- Danish: <\\>
- Dutch: ]|[
- French: <>
- German: <|>
- Italian: <>
- Latin America: <>
- Norwegian: <>
- Spain: <>
- Swedish: <|>
- Swiss: <>
- UK: \\|
- Brazil: \\|

### 四、哪些 CC1、CC2 或 M4G 的功能只能支援 QWERTY 佈局或英文？

雖然使用者可以使用其他作業系統佈局來在 CC1、CC2 或 M4G 上輸入其他語言，一些 CC1、CC2 或 M4G 的額外功能只支援 QWERTY 佈局或者英文。

#### 預設的和弦庫

預設的和弦庫是建立在 QWERTY 佈局和英文上。所以如果你使用 QWERTY 以外的其他佈局，裡面的和弦的輸出會不正常運作。

解法是在其他語言或佈局上建立你自己的和弦庫。

#### 生成式文字選單 (Generative Text Menu, GTM) 和即時添加和弦選單 (Impulse Chord Menu)

[生成式文字選單](https://docs.charachorder.com/GenerativeTextMenu.html)和[即時添加和弦選單](https://docs.charachorder.com/Chords.html#impulse-chording)的文字介面是由 CC 或 Forge 裝置輸出的鍵擊（即掃描碼）產生。實際輸出的字元會被作業系統佈局影響，所以如果在不是 QWERTY 的作業系統佈局上，文字介面的輸出會不正常運作。

解法是在使用生成式文字選單或即時添加和弦選單之前，切換回 QWERTY 佈局。

#### 裝置管理工具 (Device Manager) 上顯示的裝置佈局和和弦輸出

在裝置管理工具上佈局和和弦輸出，一些鍵（如在 Shift 層上的鍵）會顯示的是「裝置佈局」上的鍵，換句話說，它會顯示在 `QWERTY - US` 佈局下使用該按鍵或和弦時的輸出。而不會顯示其他作業系統佈局下的輸出。所以你需要自己再經過轉換，才能得出在其他作業系統佈局下的輸出。

#### 和弦修飾功能

內建的[和弦修飾功能](https://docs.charachorder.com/Glossary.html#term-Chord-Modifiers)可以修改一個和弦輸出的前綴、後綴、首字大小寫、套用動詞變化等。

這些變化的規則都是用在英文。所以它可能不能用在有不同規則的其他語言。它也不相容 QWERTY 以外的佈局。

### 五、有沒有其他解法？

[QWERTY - US Intl](https://zh.wikipedia.org/wiki/%E9%94%AE%E7%9B%98%E5%B8%83%E5%B1%80#%E7%BE%8E%E5%9B%BD%E5%9B%BD%E9%99%85) (美國國際) 是一個可以支援多種語言的作業系統佈局，因為它仍然是 QWERTY，所以你可能不需要做太多的[「三、」](#三、如何設定在其他作業系統佈局下使用時的-CC1、CC2-或-M4G？)提到的轉換，也可以避免一些[「四、」](#四、哪些-CC1、CC2-或-M4G-的功能只能支援-QWERTY-佈局或英文？)提到的不相容的問題。

如果有支援到你所用的語言的話，建議使用 QWERTY - US Intl。

### 參考資料

- [中文維基百科的鍵盤佈局頁面](https://zh.wikipedia.org/wiki/%E9%94%AE%E7%9B%98%E5%B8%83%E5%B1%80)
- [英文維基百科的鍵盤佈局頁面](https://en.wikipedia.org/wiki/Keyboard_layout)
- [CC 官方文件的佈局頁面](https://docs.charachorder.com/Layout.html)
- [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf)的第十章 "Keyboard/Keypad Page" (PDF 裡的第 83 到第 89 頁)
- [CC 官方提供的 CCOS 支援語言文件](https://docs.google.com/document/d/1bY4uaSF9fzd1VlMMZvBnDtDs0fZ-OLdaL-Bo4djQgAs/edit?tab=t.0)

[^scancode]: [鍵盤掃描碼集](https://zh.wikipedia.org/zh-tw/%E9%8D%B5%E7%9B%A4%E6%8E%83%E6%8F%8F%E7%A2%BC#%E6%89%AB%E6%8F%8F%E7%A0%81%E9%9B%86)有很多種。在這篇文章中會使用 USB HID 鍵盤掃描碼作為範例。可以在 [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf) 的第十章 "Keyboard/Keypad Page" (PDF 裡的第 83 到第 89 頁)中看到它們的定義。
[^os_layout]: 有關作業系統佈局，維基百科中的鍵盤佈局條目中是使用「[功能佈局](https://zh.wikipedia.org/wiki/%E9%94%AE%E7%9B%98%E5%B8%83%E5%B1%80#:~:text=%E7%9A%84%E6%8E%92%E5%88%97%E6%96%B9%E5%BC%8F%E3%80%82-,%E5%8A%9F%E8%83%BD%E4%BD%88%E5%B1%80,-%E6%98%AF%E6%8C%87%E9%8D%B5%E7%9B%A4)」這個名稱。在不同地方會有不同名稱，如鍵盤佈局、輸入法、輸入方式等。在這篇文章中，為了清楚分別輸入裝置上的佈局和作業系統上的鍵盤佈局設定，它們分別被稱作「裝置佈局」和「作業系統佈局」。
[^keyboard_api]: 最接近的是一些瀏覽器支援的 [Keyboard API](https://developer.mozilla.org/en-US/docs/Web/API/Keyboard_API)。但在寫這篇文章時，它只能取得每個鍵的未修飾的輸出（即不使用 `Shift` 或 `AltGraph` 等修飾鍵時的輸出）。

[^non_us_number_sign_and_tilde]: 這個資訊是來自 [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf) 的第 89 頁的第 3 個參考資料。

[^non_us_backslash_and_pipe]: 這個資訊是來自 [HID Usage Tables FOR Universal Serial Bus (USB)](https://usb.org/sites/default/files/hut1_21.pdf) 的第 89 頁的第 9 個參考資料。
