---
title: Tangent 的 CharaChorder 裝置喚醒問題相關資訊收集
date: 2025-12-29T06:55:56.161Z
updated: 2025-12-29T10:07:33.540Z
categories: [筆記, 資源]
alias:
  - /2025/12/27/tangent-的-charachorder-裝置喚醒問題相關資訊收集/
  - /2025/12/28/tangent-的-charachorder-裝置喚醒問題相關資訊收集/
  - /2025/12/29/tangent-的-charachorder-裝置喚醒問題相關資訊收集/
  - /2025/12/30/tangent-的-charachorder-裝置喚醒問題相關資訊收集/
  - /2025/12/31/tangent-的-charachorder-裝置喚醒問題相關資訊收集/
otherLanguages:
  - text: English Version
    path: https://andy23512.github.io/blog/tangent-s-collection-for-the-information-about-the-waking-problem-of-charachorder-devices/
---
# 簡短總結

雖然一些作業系統與 CCOS 版本的組合可能不會有這個問題，我覺得如果你不想變更你電腦的作業系統版本或你裝置的 CCOS 版本，現在最好的替代方案就是關掉你電腦上的睡眠設定。

我仍在積極的從網路上收集關於這個喚醒問題的相關資訊。如果你有任何有幫助的資訊，特別是 Windows 或 Linux 平台上有效或無效的環境，請用 Discord 聯繫我。（Tangent Chang, @andy23512）

## 除了使電腦不要進入睡眠，其他可以嘗試除錯的方式

* 更新作業系統版本
* 更新 CCOS 版本（也可以試試看 Beta / Gamma 版等）
* 試試別的 USB 接口或集線器
* (Mac) 重置 SMC

## 我在 Mac 上的試驗

- 在我的 Mac Mini 與最新的 macOS 26 Tahoe 作業系統上，當電腦在睡眠中時，在我 CC2 上的一個鍵擊可以成功喚醒電腦。
- 之前，在我的 Mac Pro 與前代的 macOS（<= 25），電腦無法被我的 CC1 或 CC2 的任何鍵擊喚醒。
- 我的 MacBook Pro 與 macOS 26 Tahoe，無法被 CC2 配穩定版 CCOS（CCOS 2.1.0）喚醒，但可以被 CC2 配 CCOS gamma 版本喚醒（CCOS 3.0.0-gamma.4）。
- 現在仍然沒有足夠的樣本證明這個問題可以只透過更新 macOS 或 CCOS 來修正這個問題。

|電腦|macOS|輸入裝置|CCOS|轉接頭/集線器|電腦可以被輸入裝置上的鍵擊喚醒?|
|-|-|-|-|-|-|
|Mac Mini|26|CC2|2.1.0|USB-C 公轉 USB-A 母轉接頭|<div class="check"></div>|
|Mac Pro|25|CC2|2.1.0|無|:x:|
|Mac Pro|25|CC1|2.1.0|無|:x:|
|MacBook Pro|26|CC2|2.1.0|USB-C 集線器|:x:|
|MacBook Pro|26|CC2|3.0.0-gamma.4|USB-C 集線器|<div class="check"></div>|

## 相關資訊

### Windows

* [Enable or Disable Device to Wake Computer in Windows 11](https://www.elevenforum.com/t/enable-or-disable-device-to-wake-computer-in-windows-11.6964/)

### Mac

* [Power on USB ports after sleeping mode](https://discussions.apple.com/thread/251131637?sortBy=rank)
* [Fixing USB disconnects on sleep on macOS](https://tosbourn.com/usb-disconnects-macos/)
* [M1 doesn’t power on USB keyboard on wake](https://www.reddit.com/r/macmini/comments/11dyp3x/m1_doesnt_power_on_usb_keyboard_on_wake/)

