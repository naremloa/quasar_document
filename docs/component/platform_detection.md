# 平台偵測
內置了一個 Helpers 來偵測平台(和它的 capabilities ).其具體使用如下:

```js
// For usage inside a Vue component JS:
this.$q.platform.is.mobile

// or usage inside a Vue component template:
$q.platform.is.cordova

// Only for usage outside a Vue component you need to import it:
import { Platform } from 'quasar'
```

屬性 | 類型 | 意義
---|---|---|
Platform.is.mobile | boolean | 偵測程式碼是否在mobile上執行
Platform.is.cordova | boolean | 偵測程式碼是否在Cordova上執行
Platform.is.desktop | boolean | 程式碼是否在desktop上執行
Platform.is.chromeExt | boolean | 程式碼是否在Chrome外掛環境上執行
Platform.has.touch | boolean | 程式碼是否在可觸控螢幕上執行
Platform.within.iframe | boolean | App是否在IFRAME下執行

>注意
>
> 在mobile上執行意味著你可以讓這段程式碼在mobile device(手機或平板)上執行，但不能在瀏覽器上，也不能在Cordova wrapper上執行。

其他 `Platform.is` 的具體屬性還包括有:
`android` , `blackberry` , `cros` , `ios` , `ipad` , `iphone` , `ipod` , `kindle` , `linux` , `mac` , `playbook` , `silk` , `chrome` , `opera` , `safari` , `win`(Windows) , `winphone`(Windows Phone)和很多很多 ...

以在Linux機器上執行Chrome為例:

```js
// Describing Platform.is
{
  chrome: true,
  desktop: true,
  linux: true,
  name: "chrome",
  platform: "linux",
  version: "47.0.2526.80",
  versionNumber: 47,
  webkit: true
}
```

## 使用
我們現在有一個需求是：需要根據程式碼運行在不同的設備上，提供不同的元件或 DOM 元素。有些東西我們只想展示在 desktop ，而在 mobile 則是展示另外一些。我們可以這樣寫：

```HTMl
<div v-if="$q.platform.is.desktop">
  I'm only rendered on desktop!
</div>

<div v-if="$q.platform.is.mobile">
  I'm only rendered on mobile!
</div>
```

> 注意
>
> 你可能會想要通過只使用css的方式來達成你的需求，那你可以查看[這頁](http://v0-17.quasar-framework.org/components/visibility.html#Platform-Related)。

