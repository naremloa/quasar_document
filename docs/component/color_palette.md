---
editLink: true
---
# 調色板
Quasar框架提供了立即可用的足夠多的可選顏色。你可以把它作為Stylus的變數用在你的CSS程式裡，或是直接作為CSS classes用在你的HTMl模板裡。在你閱讀完 [Quasar Theming](https://v0-17.quasar-framework.org/guide/quasar-theming.html) 後，這個頁面用起來將會非常的便利。你可能也會想要查看 [Color Utils](https://v0-17.quasar-framework.org/components/color-utils.html)

## Brand Colors
你的App可以有三個主要的顏色，叫`primary`, `secondary`和`tertiary`。

Quasar元件用的大多數顏色都是這三個你可以改變的顏色。當在設計你自己的App時，第一步應該要做的就是選擇這三個主要顏色。你馬上就會被學到如何改變這些Quasar元件預設的顏色。

## 顏色列表
這是立即可用的顏色的列表。在你的 app 的 `*.vue` 檔案裡，把它們作為 CSS classes (在 HTMl 模板)或是 Stylus 變數進行使用。

`primary` , `secondary` , `tertiary`

`positive` , `negative` , `info` , `warning` , `white` , `light` , `dark` , `faded`

下面的這些顏色可以進行變化:

`red`,`pink`,`purple`,`deep-purple`,`indigo`,`blue`,`light-blue`,`cyan`,`teal`,`green`,`light-green`,`lime`,`yellow`,`amber`,`orange`,`deep-orange`,`brown`,`grey`,`blue-grey`

顏色變化的例子:`red`,`red-1`,`red-2`,...,`red-14`。[具體可以看圖片裡展示的](http://v0-17.quasar-framework.org/quasar-play/android/index.html#/showcase/style-and-identity/color-palette)。

## 作CSS Classes使用
使用`text-`或`bg-`前綴作為class的名稱來改變字體或是背景的顏色

```HTML
<!-- changing text color -->
<p class="text-primary">....</p>

<!-- changing background color -->
<p class="bg-positive">...</p>
```

## 做Stylus變數使用
在你的app的`*.vue`檔案，你可以把`$primary`,`$red-1`等作為顏色使用。

```stylus
<!-- Notice lang="stylus" -->
<style lang="stylus">
// "variables" is a Webpack alias injected by Quasar CLI
@import '~variables'

div
  color $red-1
  background-color $grey-5
</style>
```

## 增加你自己的顏色
如果你想在元件上使用你自己設置的顏色。我們有一個叫做`brand`的顏色，你所要做的就是在你的app中加入下列的CSS:

```css
.text-brand {
  color: #a2aa33;
}
.bg-brand {
  background: #a2aa33;
}
```

現在你可以在Quasar元件上用這個顏色了:

```HTML
<q-input color="brand" .../>
```

## 動態改變Brand Colors
> 警告！
> 
> 這個功能只有在[瀏覽器支持CSS變數的環境下](https://caniuse.com/#feat=css-variables)才能使用。
> 
> 這項特性要求版本: Quasar v0.15.7+

你可以在程式運行的時，動態的客製化brand colors:`primary`,`secondary`,`tertiary`,`positive`,`negative`,`info`,`warning`,`light`,`dark`,`faded`。這意味著，你可以用一個預設的顏色主題來先建立起你的應用，並在展示時選擇另一個顏色主題。

主要顏色的設置用CSS自訂的屬性來完成，並儲存在根元素(`:root`)中。每一個屬性有一個名字`--q-color-${name}`(如：`--q-color-primary`,`--q-color-secondary`)，並且有一個合法的CSS顏色值。

CSS自訂的屬性和一般的CSS一樣使用了相同的inheritance(繼承)規則，所以你可以隨便改變你想要的顏色，其子元素繼承其父元素的更改。

建議的工作流是在`html`(`document.documentElement`)或`body`(`document.body`)元素設置你自訂的CSS顏色屬性。這可以讓你在需要恢復為預設顏色時，只要刪除自訂的就行了。

更多關於CSS自訂屬性(變數)的內容，[請閱讀](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)。

### Helper - setBrand
Quasar提供helper方法，在`colors`utils裡來設置自訂顏色: `setBrand(colorName, colorValue[, element])`
 
參數 | 類型 | Required | 描述
---|---|---|---
`colorName` | String | *Yes* | `primary`,`secondary`,`tertiary`,`positive`,`negative`,`info`,`warning`,`light`,`dark`,`faded`其中一個
`colorValue` | String | *Yes* | 合法的CSS顏色值
`element` | Element | - | (預設: `document.body`)要設置自訂屬性的元素
 
使用helper設置brand colors的例子:

```js
import { colors } from 'quasar'

colors.setBrand('light', '#DDD')
colors.setBrand('primary', '#33F')
colors.setBrand('primary', '#F33', document.getElementById('rebranded-section-id'))
``` 

> helper方法也可以對一些顏色(`positive`,`negative`,`light`)設置依賴的自訂屬性(dependent custom properties)。所以比起使用`setProperty()`,更推薦用helper來處理。

### Helper - getBrand
Quasar提供helper方法，在`colors`utils裡獲取自訂顏色: `getBrand(colorName[, element])`

參數 | 類型 | Required | 描述
---|---|---|---
`colorName` | String | *Yes* |  `primary`,`secondary`,`tertiary`,`positive`,`negative`,`info`,`warning`,`light`,`dark`,`faded`其中一個
`element` | Element | - | (預設: `document.body`)要讀取自訂屬性的元素

使用helper獲取brand colors的例子:

```js
import { colors } from 'quasar'

colors.getBrand('primary') // '#33F'
colors.getBrand('primary', document.getElementById('rebranded-section-id'))
```

它的功能與`getPropertyValue()`一樣，但比之更方便。如果要用原生javascript的方法:

```js
// equivalent of colors.getBrand('primary') in raw Javascript:

getComputedStyle(document.documentElement)
  .getPropertyValue('--q-color-primary') // #0273d4
```

