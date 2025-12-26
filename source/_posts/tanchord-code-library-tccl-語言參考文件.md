---
title: TanChord Code Library (TCCL) 語言參考文件
date: 2025-11-24T12:21:45.804Z
updated: 2025-11-25T10:03:10.371Z
categories: [文章, 作品]
alias: /tanchord-code-library-tccl-語言參考文件/
otherLanguages:
  - text: English Version
    path: https://andy23512.github.io/blog/2025/11/23/tanchord-code-library-tccl-language-reference/
---
# 前言

TanChord Code Library (TCCL) 語言是一個在 [TanChord Code (TC Code)](https://andy23512.github.io/tccode/) 用來描述和弦庫的語言。這份參考文件將會解釋它的語法。

建議先讀過 [CharaChorder 官方文件中的和弦頁面](https://docs.charachorder.com/Chords.html)並理解其中的和弦、和弦輸入、和弦輸出、及和弦表示法後，再來讀這份參考文件。

## 按鍵表示法

組成和弦輸入和輸出的最基本元素就是按鍵。在這個章節中，我將解釋要如何在 TCCL 中描述按鍵。

對於英文字母（含大小寫）、數字、和一些有支援到的符號，你可以直接用該字元來表示在 QWERTY 作業系統佈局對應的按鍵（或者說是 CCOS 上對應的操作碼）。舉例來說，`b` 就是 b 鍵、`2` 就是 2 鍵、`/` 就是 / 鍵。

在和弦輸出中，空白字元就是右空白鍵，但你不能在和弦輸入使用這個字元。

而其他按鍵或操作，你可以把對應的 [CCOS 操作碼的編號](https://andy23512.github.io/ccos-meta-viewer/#/?device=two_s3&version=2.1.1&meta=actions.json)，用角括號包起來，來表示它們。舉例來說，`<558>` 就是啟動一個動態和弦庫的操作，而 `<559>` 就是返回基底和弦庫的操作。

下面表列出這些按鍵，供參考用。

|按鍵類型|語法|範例|備註|
|-|-|-|-|
|字母鍵|`[a-zA-Z]`|`a`, `A`, `b`||
|數字鍵|`[0-9]`|`1`, `2`, `3`||
|符號鍵|`[`, `]`, `.`, `/`, `-`|`[`, `-`||
|（右）空白鍵|` `|` `|只能用在和弦輸出。|
|操作碼|`<操作碼編號>`|`<558>`, `<559>`||

## 和弦表示法

接下來，我們要學習如何描述和弦。

首先，我們來看一個簡單的例子。這是一個輸入為 b 和 c 按鍵、輸出為 `because` 的和弦。

```typescript
b + c = because
```

與 [CharaChorder 官方文件定義的和弦表示法](https://docs.charachorder.com/Chords.html#chord-notation)一樣，我們用 `+` 來分隔輸入的按鍵們、用 `=` 來分隔輸出和輸入。在 `+` 和 `=` 兩旁的空白字元是**必要的**，這樣可讀性比較好，也比較好被解析。和弦輸出就是沒有分隔符號的一串按鍵。

所以一個和弦的通用語法可以描述為：

```typescript
K + K + ... = KK...
```

你可以把其中的任何 K 換成任何上面定義的按鍵表示法。

## 和弦庫

一個 TCCL 檔案描述的是一整個和弦庫。每個非空的行都是一個和弦表示法，各代表一個和弦。在檔案的最後**必須要有**一個空行。

讓我們拿 TC Code 編輯器的 Sample 1 來當範例。


```typescript=
b + c = because
y + o + u = you
b + a + k = back
d + o + w + n = down
i + m + p = important

```

這就是一個有五個和弦的和弦庫。

## 複合和弦和動態和弦庫

{% blockquote %}
  :information_source: 動態和弦庫的啟動和弦是一個特殊的複合親代和弦。它會在背後持續「按住」它的輸入，如此一來，你就可以在啟動之後使用它的子和弦。TCCL 用一樣的方式來表示它們。
{% endblockquote %}

在 CharaChorder 官方文件是用豎線 `|` 來分隔在複合和弦中的連續和弦輸入。舉例來說，`w + b + s + t | c + h + a + r = www.charachorder.com` 表示你要先並擊 W+b+s+t，接著再並擊 c+h+a+r，才會得到輸出 www.charachorder.com。

那個格式對只描述一個複合和弦來說很適合。但對於一個和弦庫，在很多複合和弦有相同的先代和弦時，或是在動態和弦庫下有很多和弦時，就會有很多重複的地方。舉例來說，

```typescript=
// 注意！這不是 TCCL 語法！
s + m = some
s + m | t + g = something
s + m | b + o = somebody
s + m | o + n = someone
s + v = several

```

所以在 TCCL 中，參考了 Python 和 YAML 等語言，使用縮排來定義和弦之間的親子關係。舉例來說，描述上面的和弦庫的 TCCL 檔就會是：


```typescript=
s + m = some
  t + g = something
  b + o = somebody
  o + n = someone
s + v = several

```

而這邊是另一個範例，TC Code 的 Sample 3。它有一個動態和弦庫，`lib1`、一個返回基底和弦庫的和弦、和在 `lib1` 下的一個和弦 `a + r = arm`。

```typescript=
i + l = <559>base
l + r = <558>lib1
  a + r = arm

```

有關縮排大小，建議是使用兩個空白字元，這也是 TC Code 的預設設定。

## 結語

這些就是，使用 TCCL 語言來編寫和弦庫所需要了解的資訊。TCCL 語言旨在提供一種方便且直接的方式來描述和弦庫。感謝你的閱讀！
