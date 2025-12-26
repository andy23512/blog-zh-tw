---
title: Tangent 的輸入裝置周邊配件和軟體應用程式
date: 2025-01-05T10:37:26.568Z
updated: 2025-03-04T03:06:35.832Z
categories: [文章, 其他]
alias:
  - /2025/01/03/tangent-的輸入裝置周邊配件和軟體應用程式/
  - /2025/01/04/tangent-的輸入裝置周邊配件和軟體應用程式/
  - /2025/01/05/tangent-的輸入裝置周邊配件和軟體應用程式/
  - /2025/01/06/tangent-的輸入裝置周邊配件和軟體應用程式/
  - /2025/01/07/tangent-的輸入裝置周邊配件和軟體應用程式/
otherLanguages:
  - text: English Version
    path: https://andy23512.github.io/blog/tangent-s-accessories-and-software-applications-used-with-input-devices/
---
## 配件

#### 手部護具

在我的 <a href="{% post_path tangent-的-charachorder-one、charachorder-two-和-master-forge-使用歷程 %}#1-%E6%88%91%E5%A6%82%E4%BD%95%E9%81%87%E8%A6%8B-CharaChorder-One-CC1">CC1 和 CC2 使用歷程</a> 中有提到，我的食指和手腕曾經有疼痛問題，主要是長期的不良打字習慣所造成的。為了減緩這個問題，我買了 [Copper Compression](https://www.coppercompression.com/) 的半指手套、護腕和指托。它們很有效地減輕了我的疼痛。到現在，我有時候也會戴著手套使用 CC2，我的雙手感覺舒適兩倍。

#### 鍵盤架

我使用電腦的書桌沒有內建鍵盤架，且鍵盤放在上面會太高。我發現這可能是造成我手部問題的另一個原因，所以我買了一個可以安裝在我的書桌下的鍵盤架。

我買的是[這個鍵盤架](https://www.ergomap.com.tw/product/kt_mcb33/)。但它只能寄到臺灣的本島及外島。你或許可以在其他公司找到可以運送到你所在的國家的類似產品。

### 軟體應用程式 （MacOS 上）

#### Karabiner

[Karabiner](https://karabiner-elements.pqrs.org/) 是我用來在軟體端修改按鍵的應用程式。

我用它來交換 CC2 上的 command 和 ctrl 鍵，以及將一般鍵盤上的右 option 鍵改成 ctrl 鍵。

#### Hammerspoon

[Hammerspoon](https://www.hammerspoon.org/) 是一個 MacOS 自動化工具。我用它來使視窗自動對齊網格，以及新增一些快捷鍵。

##### 輸入法

在我的 Mac 電腦上有四個輸入法，ABC（英文）、注音（Mac 內建）、修改過的小麥注音、和日文輸入法。

為了能快速切換到特定的輸入法，我設定了以下的快捷鍵。(https://github.com/andy23512/setting-files/blob/7360eae2f7980aa295c99575b98ee1874a448c2b/Shell/init.lua#L224-L263)

|快捷鍵|動作|
|-|-|
|`cmd+alt+a`|從其他輸入法切換成 ABC 或 從 ABC 切換成小麥注音|
|`cmd+alt+b`|從其他輸入法切換成注音 或 從注音切換成 ABC|
|`cmd+alt+m` 或 `cmd+m`|從其他輸入法切換成小麥注音 或 從小麥注音切換成 ABC|
|`cmd+alt+j`|從其他輸入法切換成日文羅馬字 或 從日文羅馬字切換成 ABC|

（我經常在要使用 `cmd+alt+m` 時誤觸了 `cmd+m`，所以我[停用了預設的 `command+m` 快捷鍵](https://apple.stackexchange.com/questions/115562/how-do-i-disable-the-minimize-command-m-shortcut)，並讓它與 `cmd+alt+m` 有一樣的行為。）

##### 視窗管理

為了方便並減少用滑鼠拖曳動作去調整視窗的位置或大小，我設定了幾個快捷鍵和自動貼齊網格設定。(https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L17-L197)

這些快捷鍵為：

|快捷鍵|動作|
|-|-|
|`cmd+alt+[2-8]`|設定網格為 [2-8] x 2。|
|`cmd+alt+g`|開始視窗大小和位置的互動式調整介面。在要調整多個視窗時很方便。|
|`cmd+alt+s`|將所有視窗自動貼齊網格。|
|`cmd+alt+[`|將目前視窗移到螢幕左半邊。|
|`cmd+alt+]`|將目前視窗移到螢幕右半邊。|
|`cmd+alt+\`、`cmd+alt+`:arrow_down:|將目前視窗設為螢幕一半大小並置中。|
|`cmd+alt+r`|將目前視窗大小設定為網格中的一行。|
|`cmd+alt+;`|將目前視窗放到右上角那一格。|

##### 鼠標傳送

為了在超寬螢幕下快速移動鼠標，我設定了可以水平傳送鼠標的幾個快捷鍵。(https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L231-L252)

當按下 `alt+shift+[1-5]` 時，鼠標將會移動到對應的線上。

![image](https://hackmd.io/_uploads/ryfRjCb06.png)

##### 切換應用程式

為了快速切換應用程式，我設定了切換應用程式的快捷鍵。（https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L254-L266)

|快捷鍵|應用程式|
|-|-|
|`cmd+alt+v`|Visual Studio Code - Insider|
|`cmd+alt+c`|Google Chrome|
|`cmd+alt+i`|iTerm|

##### 音量控制

為了快速變更音量，我設定了兩個快捷鍵來加大和減小音量 10%。(https://github.com/andy23512/setting-files/blob/0d5379447f26dadbe3ac90cbf2415e783ea766c6/Shell/init.lua#L268-L282)

|快捷鍵|動作|
|-|-|
|`cmd+alt+`:arrow_right:|加大音量 10 %|
|`cmd+alt+`:arrow_left:|減小音量 10 %|

#### Raycast

[Raycast](https://www.raycast.com/) 是一個可擴充的快速啟動器。我用它來快速開啟應用程式、網頁和 VSCode 專案等。
