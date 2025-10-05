---
title: Tangent 在 CharaChorder One 上的注音輸入鍵盤佈局
date: 2024-03-18 22:33:41
updated: 2025-10-05 22:09:18
categories: [文章,佈局]
---
# CharaChorder One (CC1) 上的注音鍵盤佈局

在這個段落，我將說明一些現有的注音鍵盤佈局、他們在 CC1 上使用的一些問題、以及我的注音輸入佈局的設計、實作及更新。

### 現有的注音鍵盤佈局的問題

#### 標準注音鍵盤佈局（大千）

標準鍵盤佈局是我一開始學習中文打字時就使用至今的佈局。

在一般鍵盤上，注音符號是以注音符號表順序排列，所以熟悉注音的使用者很容易找到各符號的位置。另外，使用者可以同時輸入一個字的聲母、介音和韻母（即聲韻並擊）。再者，經常使用的符號（ㄐㄑㄒㄓㄔㄕㄧㄨㄩ）在鍵盤的中間位置（以用食指操作）。

然而，因為 CC1 的佈局與一般鍵盤完全不同，注音符號的位置就不容易尋找和學習。並且一些注音符號是在一般鍵盤上的數字鍵或符號鍵上，在 CC1 上就需要切換至數字層去輸入那些符號。所以一些注音組合無法在 CC1 上使用聲韻並擊。

#### 倚天注音鍵盤佈局

倚天是一個針對熟悉英文打字的使用者設計的鍵盤佈局。它的排列規則是用各注音符號發音相近或形狀相近的英文作為其對應鍵，所以對在任何鍵盤（包含 CC1 ）上熟悉英文打字的使用者會相對容易學習。這是一個可用、較容易且不需要修改輸入法軟體的解法。但是與標準注音一樣，也無法使用聲韻並擊。

### 創造新的注音佈局 - 天弦 41 鍵

#### 設計（V1）

如上所述，在 CC1 上使用現有的注音佈局會有一些問題。為了讓其易學（容易找到對應的鍵）且有效率（可使用聲韻並擊），要為了 CC1 特別設計一個注音佈局，所以我設計出下圖的佈局。

![](https://hackmd.io/_uploads/HJ4V6CjNh.png)

這個鍵盤佈局的設計原則為：

1. 注音符號盡可能用注音符號表順序排列。
2. 設計聲母（圖上紅色鍵）、介音（圖上綠色鍵）、韻母（圖上藍色鍵）的位置，使得所有注音組合均可用聲韻並擊。（左手：聲母、右手中指和食指：介音、右手拇指和無名指：韻母）
3. 保留 Dup 鍵的位置，因為它無法在輸入法軟體中被對應到一個注音符號，並且我不想影響到已經學好的 CC1 英文打字。
4. 常用鍵盡可能保留位置，例如 ctrl 鍵 (在我的 Mac 上被 Karabiner 重新映射為 command 鍵)、backspace 鍵、enter 鍵、（右）空白鍵。
5. 常用的注音符號放在食指或中指的搖桿上。

#### 實作（V1）

要實作注音佈局需要完成兩件事。一個是調整 CC1 上的鍵盤佈局，另一個是修改注音輸入法軟體的映射規則。

##### 調整 CC1 上的鍵盤佈局

注音輸入法軟體只能映射文字鍵（英文字母、數字、符號）到注音符號，所以在我的注音佈局上的注音符號鍵，在 CC1 上他就一定要是文字鍵。也考慮到我寫程式上的需要，我用一些程式碼上常用的符號鍵去替代一些非文字鍵。最終的 CC1 鍵盤佈局如下圖。

![](https://hackmd.io/_uploads/HJWzu13Nn.png)

鍵盤佈局的 CSV 檔在此：https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout.csv

##### 修改注音輸入法

最後一步是改掉注音輸入法的鍵盤佈局。作業系統內建的輸入法很難改，所以我 fork 了一個開源 Mac 注音輸入法後，根據 CC1 鍵盤佈局和我設計的注音佈局去修改它的映射規則（(https://github.com/andy23512/McBopomofo/commit/744426337c8cc54a0700f467d26b3c4289cd55a9?diff=split)。

（在 Windows 和 Unix-like 作業系統上，也許可能用新酷音輸入法，將[這行](https://github.com/chewing/libchewing/blob/e58b36332b06e472c47126ea28652655552346f1/src/common/key2pho.c#L77)改為 `"/[(-wzg#kcmre|io.{\u,atl$])?bqxfdhpsy;nj};",` 。)

自此，我終於可以用一個更好的注音鍵盤佈局來打中文。

#### 更新

##### V2

使用這個佈局一段時間後，我發現了一些問題，所以做了一些調整。

![](https://hackmd.io/_uploads/rywIbxeg6.png)
![](https://hackmd.io/_uploads/Hk1ktlxxT.png)

1. 所有韻母（ㄦ以外[^err]）移到右手的拇指搖桿，以符合注音符號表的分組。（原 Dup 移到左滑鼠鍵搖桿的北鍵。）此改變也讓常用的韻母 `ㄢㄣㄤㄥ` 被放在拇指的第一搖桿。這有助於提升輸入效率。
2. 所有聲調（一聲以外）移到右手的無名指搖桿。
3. ㄩ 移到右手的無名指搖桿。

新的 CC1 佈局檔：https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout-v2.csv
小麥注音更新： https://github.com/andy23512/McBopomofo/commit/14899a112d1032330825fe16f8718d6ecab7021c

##### V3

發現一些在作業系統佈局下在 Shift 層的鍵（如 `{`）會使聲韻並擊壞掉，所以我修改了 CC1 佈局以處理這個問題。

新的 CC1 佈局檔： https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout-v3.csv
小麥注音更新： https://github.com/andy23512/McBopomofo/commit/e33883e3f7d189bf18d339c7a02d0072899848fc

![localhost_4200_layouts (1)](https://hackmd.io/_uploads/Hk80ZYEEa.png)

##### V4

經過一些中文打字練習後，我發現把二聲到輕聲都放在右手中指搖桿會使右手中指的負擔過重。所以我試著分到兩個搖桿上，看看會不會改善。

（CC1 佈局沒有變）

小麥注音更新： https://github.com/andy23512/McBopomofo/commit/35b7eccbe94c184d9edee9d11471076702660ec2

![image](https://hackmd.io/_uploads/r1sZj6tSp.png)

##### V5（最新版）

我發現在 ClickUp 上打 ㄌ（`/`） 會觸發斜線命令，所以改為 `=` 鍵，並把 `/` 移到左滑鼠搖桿。

新的 CC1 佈局檔： https://raw.githubusercontent.com/andy23512/setting-files/master/CharaChorder/cc1-layout-v5.csv
小麥注音更新： https://github.com/andy23512/McBopomofo/commit/fe53eda098250384d600af04d44e2139dc492fef

![localhost_4200_layouts](https://hackmd.io/_uploads/S1seckdIp.png)

##### V5.1 (滑鼠鍵調整)

因為在主要層的滑鼠搖桿已經被設為其他鍵，我決定要在數字層使用滑鼠鍵。因此我加了一個數字鎖定鍵在右手滑鼠搖桿的西鍵。

`<` 和 `>` 可以用 `shift+,` 和 `shift+.` 打出，所以可以被移除。


###### 主要層

![localhost_4200_layouts](https://hackmd.io/_uploads/By-7Cw_j6.png)

###### 數字層

![localhost_4200_layouts (1)](https://hackmd.io/_uploads/HkzXE__ia.png)

- ②: 數字層鎖定 / 解除鍵
- M箭頭: 滑鼠移動
- S箭頭: 滑鼠捲動
- LC, MC, RC: 滑鼠左/中/右鍵

CC 裝置管理系統匯出的備份檔： https://github.com/andy23512/setting-files/blob/master/CharaChorder/backup-ONE-v5.1.json

##### V5.2（將功能鍵放在數字層）

為了讓功能鍵更容易按，我把數字層的左邊的一些按鍵定為功能鍵。

###### 數字層

![localhost_4200_layouts](https://hackmd.io/_uploads/rkWnAPlyA.png)

CC 裝置管理系統匯出的備份檔：https://github.com/andy23512/setting-files/blob/master/CharaChorder/backup-ONE-v5.2.json

### 命名 - 天弦 41 鍵 (英文為 TanChord 41，簡稱 TC41)

因為我<a href="{% post_path tangent-尋找在-master-forge-上的注音輸入方式的歷程 %}#%E7%AC%AC%E4%BA%8C%E6%AC%A1%E8%BF%AD%E4%BB%A3---%E5%A4%A9%E5%BC%A6-36-%E9%8D%B5-V1">為了 Master Forge 創造了另一個注音佈局</a>，為了讓這兩者好辨識，我把這邊的佈局命名為天弦 41 鍵。天是取自我英文名字 Tangent 的簡稱 Tan 的諧音。弦是因為這個佈局主要就是設計來能在 CharaChorder One 這個支援和弦輸入的裝置上使用注音和弦(或稱聲韻並擊)的。41 鍵是因為他用了 41 個鍵(參考倚天 41 鍵的命名)。

## 其他相關主題

在這個段落，會有一些關於中文打字、注音、並擊或其他為了 CC1 而設的設定。 

### 標點符號

我的注音佈局佔用了一些標點符號鍵，如 `[` 和 `]`，去映射成注音符號。這會讓對應的標點符號無法被打出。（`「` 和 `」`）

在小麥注音裡，解法為利用使用者自訂詞庫功能，為那些標點符號加上新的組合鍵。這是我用的詞庫檔。https://raw.githubusercontent.com/andy23512/setting-files/master/McBopomofo/data.txt

之後就可以使用以下的組合鍵來打出標點符號：

|組合鍵|輸出|
|-|-|
|`ctrl+,`|`，`|
|`ctrl+.`|`。`|
|`ctrl+'`|`、`|
|`shift+,`(`<`)|`「`|
|`shift+.`(`>`)|`」`|

### 和弦（並擊）

(移到<a href="{% post_path tangent-的和弦用法 %}">這篇文章</a>)

### 注音密碼

注音密碼是一種可以用數個中文字產生的密碼。它用的是標準注音輸入法的佈局上的映射去把中文的注音組合轉為英數符號。所以我們可以用同樣的按鍵序列但用不同的輸入法(標準注音或英文輸入)去打出中文字或對應的注音密碼。

因為注音密碼相依於標準鍵盤，我不能直接在我的注音佈局上直接打出來。所以我用 [Ukelele](https://software.sil.org/ukelele/) 製作了一個新的佈局來映射 CC1 的輸出到對應的注音密碼。

對應到天弦 41 鍵 V5 的注音密碼佈局如下圖所示：
![image](https://hackmd.io/_uploads/HyVN_pdpp.png)

看起來很像有人把鍵盤上的鍵隨便亂排之後的結果，但實際上這是我的注音佈局 V5 與標準鍵盤佈局組合後的結果。

舉例來說，當在天弦 41 鍵 V5 上打出 `ㄅㄆㄇㄈ...` 時， CC1 實際上是輸出 `7890...`

{% mermaid sequenceDiagram %}
CC1->>天弦 41 鍵 V5: 7890...
天弦 41 鍵 V5->>輸出: ㄅㄆㄇㄈ...
{% endmermaid %}

但在標準注音佈局，鍵盤實際上是輸出 `1qaz...`。(這就是 `ㄅㄆㄇㄈ...` 對應的注音密碼)

{% mermaid sequenceDiagram %}
鍵盤->>標準注音佈局: 1qaz...
標準注音佈局->>輸出: ㄅㄆㄇㄈ...
{% endmermaid %}

所以我們就需要一個注音密碼佈局來把 CC1 的輸出 `7890...` 來映射為對應的輸出 `1qaz...`。所以在這個佈局上， `7890` 鍵就分別是輸出 `1qaz`。

{% mermaid sequenceDiagram %}
CC1->>天弦 41 鍵 V5: 7890...
天弦 41 鍵 V5->>(逆向)標準注音佈局: ㄅㄆㄇㄈ...
(逆向)標準注音佈局->>輸出: 1qaz...(注音密碼)
{% endmermaid %}

所以在注音密碼佈局上，`7890` 鍵的輸出就應該是 `1qaz`，這就是套用天弦 41 鍵 V5 和逆向的標準注音佈局的結果。

![upload_b72eeab34a7f164d74dcf73a19b18b3c](https://hackmd.io/_uploads/ByoFE7l0p.png)

### 自訂快捷鍵

（移到<a href="{% post_path tangent-的輸入裝置周邊配件和軟體應用程式 %}#Hammerspoon">這篇文章</a>）

### 在 Master Forge (M4G) 上的可能的注音解法

（移到<a href="{% post_path tangent-尋找在-master-forge-上的注音輸入方式的歷程 %}">這篇文章</a>）

### 琶音問題

琶音功能是在 CharaChorder 和弦後的一個快速按鍵。它可以用來修改和弦輸出，例如變更時態、加上前後綴或者標點符號。

我發現 CharaChorder 的標點符號琶音功能也可能與注音和弦衝突。

舉例來說，在我的<a href="{% post_path tangent-尋找在-master-forge-上的注音輸入方式的歷程 %}#V2">天弦 36 鍵 V2</a> 注音佈局中，當我打「問（ㄨㄣ、）」字時，我用注音和弦輸入「ㄨ+ㄣ」(對應的鍵為`t+d`)後立刻輸入四聲`、`(對應的鍵為`;`)。這個 `;` 鍵就會觸發標點符號琶音功能，因此 CharaChorder 裝置似乎就會輸出空白鍵、`;` 鍵、左方向鍵、退格鍵、右方向鍵。

![](https://hackmd.io/_uploads/S1zHh4VVC.gif)

(ㄨㄣ 加上空白鍵即會打出了「溫」字。退格鍵就會刪掉這個「溫」字。

目前的變通方式是把琶音功能關掉。

[^err]: ㄦ 是一個特殊的韻母。它跟其他的聲母或介音並沒有任何可能組合，因此我們可以把它與其他韻母分離看待。
