---
title: Tangent 在 CharaChorder One、CharaChorder Two 和 Master Forge 上的最新佈局
date: 2024-11-03 12:25:53
updated: 2024-11-26 19:00:43
categories: [文章,佈局]
---
## 前言

我寫了兩篇文章。它們是關於我如何為注音輸入法，去設計 <a href="{% post_path tangent-在-charachorder-one-上的注音輸入鍵盤佈局 %}">CharaChorder One</a> 和 <a href="{% post_path tangent-尋找在-master-forge-上的注音輸入方式的歷程 %}">Master Forge</a> 的佈局。它們比較像是佈局設計的歷程紀錄，包含我遇到什麼問題和我如何解決它們。

然而，在這兩篇文章中可能很難去追溯每個變更按鍵的背後的原因。所以這篇文章中，我會分解我最新的佈局(<a href="{% post_path tangent-尋找在-master-forge-上的注音輸入方式的歷程 %}#V2">TC36.V2</a>)，並解釋為何我變更那些按鍵。

### 主層

#### 將符號鍵放在主列上

![localhost_4200_layouts (3)](https://hackmd.io/_uploads/SJh3sUV-ke.png)

對應的注音佈局：
![localhost_4200_layouts](https://hackmd.io/_uploads/ByF157m7kx.png)

注音輸入法僅能將字元鍵（字母、數字和符號）映射為注音符號，所以我將一些非字元鍵改為符號鍵。這些符號鍵並不會帶有 Shift 按鍵效果，所以它們不會影響到和弦的運作（包含 CC 和弦和注音和弦）。

這些符號鍵在寫程式時也很有用。

#### 擺放被改掉的非字元鍵

![localhost_4200_layouts (2)](https://hackmd.io/_uploads/S1HFjUNbyg.png)

接著我要為那些原本位置被改為符號的非字元鍵找位置。與 M4G 的預設佈局類似，我將它們放在無名指中搖桿上。

`LW` 和 `RW` 是 左和右 GUI 鍵。（Windows 上的 Windows 鍵、Mac 上的 Command 鍵） 它們在我的 Mac 上實際上是 `Ctrl` 鍵。因為我使用了 Karabiner 來交換 CC1 上的 `Ctrl` 和 `Command` 鍵。

#### 數字層鎖定鍵

![localhost_4200_layouts (4)](https://hackmd.io/_uploads/HkIfT8E-Jg.png)

因為主層上的滑鼠搖桿被一些非字元鍵佔據，所以我改成在數字層上使用滑鼠動作。我設定了一個數字層鎖定鍵來將裝置鎖定為數字層。（然後可以用原本的 Num-shift 鍵來解鎖。）

### 數字層

#### 將功能鍵放在左半邊

![localhost_4200_layouts (1)](https://hackmd.io/_uploads/B1xuOQ8bkx.png)

為了讓功能鍵更好使用，我把功能鍵放在數字層的左半邊。

#### 設定滑鼠動作鍵

![localhost_4200_layouts (2)](https://hackmd.io/_uploads/rJw_uXI-yg.png)

- M(箭頭): 滑鼠移動
- S(箭頭): 滑鼠捲動
- LC, MC, RC: 滑鼠左/中/右鍵點擊

如上面有提過，我在數字層使用滑鼠功能。我在數字層的中列上放置了滑鼠操作，所以我的手可以下移到中列上去操作它們（即我的拇指、中指和無名指都在對應的中搖桿上）。我稱之為「滑鼠模式」。

在左和右拇指中搖桿上都有所有三個滑鼠點擊鍵，因此我可以單手就能執行所有滑鼠操作。
