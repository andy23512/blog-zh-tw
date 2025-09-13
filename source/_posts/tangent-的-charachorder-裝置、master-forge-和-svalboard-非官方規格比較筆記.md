---
title: Tangent 的 CharaChorder 裝置、Master Forge 和 Svalboard 非官方規格比較筆記
date: 2024-10-27 14:34:17
updated: 2025-09-11 16:26:50
categories: [筆記,比較]
---
## 比較表 

註：

1. 在 [CC2 的產品頁面](https://www.charachorder.com/products/cc2)上，你可以看到更多 CC2 和 CC1 的差異。
2. 我覺得 CC 裝置的其他沒有提到的規格會與 CC1 的相似，在表上會標上 * 號。
3. 如果你有任何問題，你可以在他們的 Discord 伺服器上進一步確認規格。
5. `???` 是我不確定或者找不到資訊的規格，所以如果你知道任何有用的資源的話，請用 Discord 聯絡我 (Tangent Chang, @andy23512)。
6. [Device Comparator](https://andy23512.github.io/device-comparator/) 是這個比較筆記的網頁應用程式版。（目前僅有英文版。）

||[Master Forge (M4G)](https://forgekeyboard.com/products/master-forge)|[CharaChorder Two (CC2)](https://www.charachorder.com/products/cc2)|CharaChorder One (CC1)|[CharaChorder Lite (CCL)](https://www.charachorder.com/products/charachorder-lite)|[CharaChorder X (CCX)](https://www.charachorder.com/products/charachorder-x)|[Svalboard (Sval)](https://svalboard.com/)|市場領先的鍵盤|
|-|-|-|-|-|-|-|-|
|==**計算規格**==|==**------M4G------**==|==**------CC2------**==|==**------CC1------**==|==**------CCL------**==|==**------CCX------**==|==**------Sval------**==|==**--------------**==|
|**模式**|可程式化的按鍵和組合|可程式化的按鍵和組合|可程式化的按鍵和組合|可程式化的按鍵和組合|可程式化的按鍵和組合|可程式化的按鍵和組合|僅有可程式化按鍵|
|**可能輸入組合數**|> 13,000,000,000|> 13,000,000,000|> 13,000,000,000|> 17,000,000,000|> 17,000,000,000[^ccx_possible_input]|???|< 200|
|**記憶體容量**|1,000,000 個動作|60,000 個動作|16,000 個動作|65,000 個動作[^ccl_memory]|65,000 個動作[^ccx_memory]|???|使用電腦的運算資源|
|**記憶體類型**|嵌入式|嵌入式|嵌入式|嵌入式|嵌入式|嵌入式|使用電腦的運算資源|
|**驅動程式**|無驅動 OS|無驅動 OS|無驅動 OS|無驅動 OS|無驅動 OS|???|需要電腦上有專用驅動|
|**設定**|自由開源可離線網頁應用|自由開源可離線網頁應用|自由開源可離線網頁應用|自由開源可離線網頁應用|自由開源可離線網頁應用|自由開源可離線網頁應用|需要專有軟體|
|**微處理器**|240 MHz 雙核|240 MHz 雙核|48 MHz|???|???|133 MHz 雙核|150 MHz 單核|
|**輸入方式**|無縫切換和弦或單鍵輸入|無縫切換和弦或單鍵輸入|無縫切換和弦或單鍵輸入|無縫切換和弦或單鍵輸入|無縫切換和弦或單鍵輸入|單鍵輸入和多鍵並擊[^sval_input_style]|僅能單鍵輸入|
|**API**|Open Serial API 規格|Open Serial API 規格|Open Serial API 規格|Open Serial API 規格|Open Serial API 規格|???|無|
|==**電路規格**==|==**------M4G------**==|==**------CC2------**==|==**------CC1------**==|==**------CCL------**==|==**------CCX------**==|==**------Sval------**==|==**--------------**==|
|**Routing Style**|AntiMatrix with Dedicated Channels|AntiMatrix with Dedicated Channels*|AntiMatrix with Dedicated Channels|AntiMatrix with Dedicated Channels*|不適用[^ccx_dependence]|???|Traditional Key Matrix|
|**防鬼鍵**|NKRO+|NKRO+*|NKRO+|NKRO+*|不適用[^ccx_dependence]|NKRO|NKRO|
|**HID Keyboard Schema**|Extended 12 Key Schema|Extended 12 Key Schema*|Extended 12 Key Schema|Extended 12 Key Schema*|Extended 12 Key Schema*|???|6 Key Schema|
|**USB 插槽數**|3|X|X|X|X|???|0-1|
|==**機體規格**==|==**------M4G------**==|==**------CC2------**==|==**------CC1------**==|==**------CCL------**==|==**------CCX------**==|==**------Sval------**==|==**--------------**==|
|**大小 (長\*寬\*高)**|228\*115\*38 (mm)|295\*111\*29 (mm)[^cc2_size]|296\*110\*38 (mm)|295\*105\*33 (mm)[^cclite_size]|59\*23.25\*16.15 (mm)[^ccx_size]|190\*130\*90 (mm)[^sval_size]|450\*158\*38 (mm)|
|**重量 （整個裝置、包含左右兩半）**|346-500 g|303 g[^cc2_weight]|308 g|468 g[^cclite_weight]|???|550 g[^sval_weight]|989 g|
|**按鍵元件**|3-D 微動/壓扣開關|3-D 觸動開關*|3-D 觸動開關|1-D 機械[^ccl_switch]|不適用[^ccx_dependence]|3-D 磁光開關|1-D 機械 / 光學 / 霍爾開關|
|**峰值力 (3D 開關為 四方向 / 下壓)**| 55-57 gf / N/A [^m4g_actuation_force] |42 gf / 240 gf|70 gf / 240 gf|35 gf[^ccl_switch]|不適用[^ccx_dependence]|20 gf / 20 gf|40-80 gf|
|**硬體介面**|皮卡汀尼導軌|1/4 20 螺母|無|無|無|M5 和 1/4 20 螺母|無|
|**按鍵耐用性 (每個方向多少次)**|20,000,000[^m4g_switch_durability]|1,000,000[^cc2_switch_durability]|200,000[^cc1_switch_durability]|???|不適用[^ccx_dependence]|???|???|
|**3D 搖桿數目**|16[^m4g_number_of_3d_switches]|18|18|不適用|不適用|10（按鍵組）|不適用|
|**每個 3D 搖桿上的按鍵數目**|4[^m4g_keys_per_switch]|5|5|不適用|不適用|5|不適用|
|**開關元件**|[Omron Electronics D2LS-21(20M)](https://eu.mouser.com/ProductDetail/Omron-Electronics/D2LS-2120M?qs=OcgtsXO%2B3gskSBgTf6V7tw%3D%3D)|[Alps Alpine SKRHADE010](https://tech.alpsalpine.com/e/products/detail/SKRHADE010/)|[Alps Alpine SKRHABE010](https://tech.alpsalpine.com/e/products/detail/SKRHABE010/)|Gateron Clear/White|不適用|???|???|
|==**材料規格**==|==**------M4G------**==|==**------CC2------**==|==**------CC1------**==|==**------CCL------**==|==**------CCX------**==|==**------Sval------**==|==**--------------**==|
|**外殼**|5052 鋁合金[^m4g_shell_material]|射出成型 ABS 塑膠[^cc2_half_material]|射出成型 ABS 塑膠[^cc1_half_material]|ABS 塑膠[^ccl_shell_material]|射出成型 ABS 塑膠[^ccx_shell_material]|ABS 塑膠|???|
|**底板**|3D 列印塑膠[^m4g_base_material]|3D 列印塑膠[^cc2_half_material]|射出成型 ABS 塑膠[^cc1_half_material]|ABS 塑膠[^ccl_base_material]|不適用|不適用|???|
|**鍵帽**|橡膠 X 型環 + 3D 列印塑膠|橡膠 X 型環 + 3D 列印塑膠|噴砂鋁和 ABS 塑膠|???|N/A|???|???|
|==**其他**==|==**------M4G------**==|==**------CC2------**==|==**------CC1------**==|==**------CCL------**==|==**------CCX------**==|==**------Sval------**==|==**--------------**==|==**------M4G------**==|==**------CC2------**==|==**------CC1------**==|==**------CCL------**==|==**------CCX------**==|==**------Sval------**==|==**--------------**==|==**------M4G------**==|==**------CC2------**==|==**------CC1------**==|==**------CCL------**==|==**------CCX------**==|==**------Sval------**==|==**--------------**==|
|**定點裝置**[^pointing_device]|軌跡球 / 無[^m4g_pointing_device]|游標移動鍵|游標移動鍵|無|無|軌跡球 / 觸控板 / 指點桿 / 無|???|
|**安靜程度排名**|第三|第一|第二|???|???|???|???|

### 參考資料

#### CharaChorder 和 Forge

- ["Master Forge: Specs Reveal" 影片](https://youtu.be/x2swE9URxeA?feature=shared)
- [CC2 產品頁面](https://www.charachorder.com/products/cc2)
- [CCL 產品頁面](https://www.charachorder.com/products/charachorder-lite)
- [CCX Kickstarter 頁面](https://www.kickstarter.com/projects/charachorder/charachorder-x-type-at-the-speed-of-thought/) 
- [CharaChorder 官方文件](https://docs.charachorder.com)
- [CharaChorder Discord 伺服器](https://discord.gg/charachorder)

#### Svalboard

- [Svalboard 產品頁面](https://svalboard.com/products/lightly)
- [Svalboard 用戶指南](https://docs.google.com/document/d/1Um4EAIK-GLQGw-9xHUFe-aCtHJDENYUSzhcqQi9ppwU/edit?tab=t.0)
- [QMK Combos 文件](https://docs.qmk.fm/features/combo)
- [Svalboard Discord 伺服器](https://discord.gg/DnGcHM4Rg8) 

[^m4g_switch_durability]: 根據[開關元件的詳細規格頁面]( https://eu.mouser.com/ProductDetail/Omron-Electronics/D2LS-2120M?qs=OcgtsXO%2B3gskSBgTf6V7tw%3D%3D)，為二千萬次。

[^cc2_switch_durability]: 根據 [CC2 產品頁面](https://www.charachorder.com/products/cc2#:~:text=CC2%20switches%20are%20built%20tougher%2C%20and%20are%20engineered%20to%20last%205X%20longer%20than%20switches%20from%20the%201st%20generation)， CC2 的開關結構更堅固，比第一代的耐用 5 倍。

[^cc1_switch_durability]: 根據[這個 Discord 訊息](https://discord.com/channels/861730583092658206/938239528454475787/1068002221855363082)，為二十萬次。

[^ccx_memory]: 根據 [CCX 的 Kickstarter 頁面](https://www.kickstarter.com/projects/charachorder/charachorder-x-type-at-the-speed-of-thought/description#:~:text=CharaChorder%20X%20can%20store%20%2B65%2C000%20custom%20chords!)，為六萬五千個和弦。

[^ccx_dependence]: 它會依賴所連接的鍵盤的規格，所以似乎不會是 CCX 本身的規格。

[^ccx_size]: 使用 [CharaChoder 官方文件](https://docs.charachorder.com/CharaChorder%20X.html#id1:~:text=CharaChorder%20X%20Dimensions)中的外殼大小。

[^ccx_possible_input]: 根據[其產品頁面](https://www.charachorder.com/products/charachorder-lite#:~:text=Limitless%20Customization-,Over%2017%20Billion)，CharaChorder Lite 有 17 億種可能輸入，所以我覺得 CCX 跟一般 60 % 鍵盤一起用時，可能會有類似的數量。

[^m4g_actuation_force]: 55 gF 是來自[規格展示影片中的比較表](https://youtu.be/x2swE9URxeA?feature=shared&t=613)。57 gF 是來自[同影片的實際測試數值](https://youtu.be/x2swE9URxeA?feature=shared&t=562)。因此我在表格中列成範圍 (55-57 gF)。另外，有關下壓的峰值力，因為 M4G 沒有下壓所對應的按鍵，我將這裡它定為 N/A。

[^ccl_memory]: 根據[這個舊的 Wiki](https://charachorder.notion.site/FAQs-List-Lite-4a08faf376204974adaa57e8d098ad6d)，六萬五千個和弦，每個和弦中有至多 247 個動作，可存在記憶體中。

[^ccl_switch]: 這是來自[官方 CCL 文件的開關元件章節](https://docs.charachorder.com/CharaChorder_Lite.html#switches)的資訊。

[^cc2_size]: 根據[CharaChorder 官方文件中的 CC2 大小和重量資訊](https://docs.charachorder.com/FAQs.html#dimensions-and-weight)，11 ⅝” x 4 ⅜” x 1 ⅛”。

[^cc2_weight]: 根據[CharaChorder 官方文件中的 CC2 大小和重量資訊](https://docs.charachorder.com/FAQs.html#dimensions-and-weight)，沒有 USB-C 時為 10.7 oz。

[^cclite_weight]: 根據[CharaChorder 官方文件中的 CC Lite 大小和重量資訊](https://docs.charachorder.com/FAQs.html#id1:~:text=or%200.52%20lbs-,CharaChorder%20Lite%20FAQs,Dimensions%20and%20Weight,-%EF%83%81)，1 lb 0.5 oz。

[^cclite_size]: 根據[CharaChorder 官方文件中的 CC Lite 大小和重量資訊](https://docs.charachorder.com/FAQs.html#id1:~:text=or%200.52%20lbs-,CharaChorder%20Lite%20FAQs,Dimensions%20and%20Weight,-%EF%83%81)，11 ⅝” (length) x 4 ⅛” (width) x 1 5/16” (height)。

[^cc2_half_material]: 根據 [CC2 官方文件]( https://docs.charachorder.com/CharaChorder%20Two.html#the-halves)。

[^cc1_half_material]: 根據 [CC1 官方文件](https://docs.charachorder.com/CharaChorder%20One.html#the-halves)。

[^ccl_base_material]: 根據 [CCL 官方文件](https://docs.charachorder.com/CharaChorder_Lite.html#base)。

[^ccl_shell_material]: 根據 [CCL 官方文件](https://docs.charachorder.com/CharaChorder_Lite.html#key-plate)。

[^ccx_shell_material]: 根據 [CCX 官方文件](https://docs.charachorder.com/CharaChorder%20X.html#the-body)。

[^m4g_base_material]: 根據[這個影片](https://youtu.be/7wb-JlZ2qP0?feature=shared&t=299)，底板（被稱作內骨骼）是用 3D 列印製造。

[^m4g_shell_material]: 根據[這個影片](https://youtu.be/7wb-JlZ2qP0?feature=shared&t=693)，外殼（被稱為外骨骼）的材料是 5052 鋁合金。

[^sval_weight]: 根據 [Svalboard Discord 伺服器上的這個訊息](https://discord.com/channels/1053081626898337902/1124364902811844739/1150412902457692221)，一邊重 275 g。 

[^sval_size]: 根據 [Svalboard Discord 伺服器上的這個訊息](https://discord.com/channels/1053081626898337902/1124364902811844739/1224420873663156224)。

[^sval_input_style]: 用 QMK 的 Combo （多鍵並擊）功能是可能達到和弦輸入功能的，但似乎沒有很多使用者使用。

[^pointing_device]: 這邊是列出各裝置上預設的定點裝置。你可以另外在 CC 裝置、Master Forge 和 Svalboard 上設定游標移動鍵。

[^m4g_pointing_device]: 有些 Master Forge 套組並不包含軌跡球 Bolt-on。

[^m4g_keys_per_switch]: 不像 CC1 和 CC2，M4G 沒有獨立的 3D 按鍵。當你在 M4G 上將一個搖桿往下壓時，你會觸發那個搖桿上的所有四個鍵。

[^m4g_number_of_3d_switches]: M4G 的拇指搖桿比 CC1 和 CC2 少兩個。在 Forge 產品系中，未來有計畫提供多種滑鼠控制的 Bolt-on 來取代 CC1 和 CC2 上的滑鼠搖桿。在 M4G 上，第三拇指搖桿上的鍵會被移到原本的滑鼠搖桿上。
