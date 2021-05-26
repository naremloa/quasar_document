# Icons
Quasar Icon 元件可以讓你在其他元件或你的頁面的任何地方，很簡單的插入 icon 。

Quasar 現在支持： [Material Icons](https://material.io/icons/), [Font Awesome](http://fontawesome.io/icons/) , [Ionicons](http://ionicons.com/) , [MDI](https://materialdesignicons.com/) 和 [ICoMoon](https://icomoon.io/)

除了 IcoMoon 之外(它有 license )，你可以選擇它們其中一個或混用都行。 Quasar 只需要知道哪一個 icon 要被用到。

接著，我們將會看到如何安裝一個 icon 。

如果你喜歡的 font icon 不在列表裡，請 [submit a request](https://github.com/quasarframework/quasar/issues/new)

## 安裝

如果你只是要建立一個 website ，直接使用CDN是一個不錯的選擇。然而，如果是要建立一個mobile或Electron app，你應該就不會想要依賴網路鏈接。所以最好的方式是使用下面這種方式。

> 非常重要
> 
> 因為IcoMoon的各種原因，這個icon並不能直接使用。你需要用[它們的網站](https://icomoon.io/app/#/select)來創建你自己的icon font檔案，然後將它複製到你的app文件夾裡，並通過app插件的方式引入它們($ quasar new plugin icomoon)。

### 添加一個 Icon Set
第一步是讓一個 icon set 可以在你的 website/app 中使用。如下面的，編輯`/quasar.conf.js`:

```js
extras: [
  'material-icons'
]
```

> Icon sets 是通過 [Quasar-extras](https://github.com/quasarframework/quasar-extras) 套件來讓 quasar 使用的。你不需要再在你的 app 引入這個套件，直接在 `/quasar.conf.js` 設置可用就行。

增加更多的 icon set :

```js
extras: [
  'material-icons',
  'mdi',
  'ionicons',
  'fontawesome'
]
```

### 使用 Icon Set
除非你設置成別的， Quasar 預設在它的元件中使用 Material Icons 。當然，你可以告訴 Quasar 你要使用其他的 icon set 。但請確保你已經將它添加進來了。

那麼，讓我們假設要使用 Ionicons 。我們再次編輯 `/quasar.conf.js`:

```js
framework: {
  iconSet: 'ionicons'
}
```

### 完整的例子
這裡是一個使用 Ionicons 和 Fontawesome 的例子:

```js
extras: [
  'ionicons',
  'fontawesome'
],
framework: {
  iconSet: 'fontawesome'
}
```

這樣就能在你的app裡同時使用 Ionicons 和 Fontawesome ，並且所有的 Quasar 元件會展示 Fontawesome icons 。

### 從 CDN 引入
如果你想直接從 CDN 引入，你只需要在`index.template.html`裡插入`<link>`標籤。

在這個情況下，你就不需要再在 `.quasar.conf.js > extras` 添加 icon sets 了。只要編輯 `index.template.html` 即可。

下面的例子會引入 Font Awesome v4.7.0 icons 。你可以在 Google 上直接找相關的 CDN 確保你引入的是最新的版本。

```HTML
<!-- in `/src/index.template.html` -->

<head>
  ...

  <!-- CDN example for Material Icons -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  >

  <!-- CDN example for Fontawesome -->
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  >

  <!-- CDN example for Ioniocns -->
  <link
    rel="stylesheet"
    href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
  >
</head>
```

### #使用Fontawesome-Pro
如果你有Fontawesome 5 Pro許可證，並且想要用它來替代Fontawesome免費版本，下面會提供相關步驟。

1.在Fontawesome的使用者帳戶頁面，打開 [Linked Accounts section](https://fontawesome.com/account/linked-accounts) 來拿到npm TOKENID。
2.在檔案 .npmrc (該檔案路徑與package.json相同)新建或增加TOKENID:

```
@fortawesome:registry=https://npm.fontawesome.com/TOKENID
```

3.安裝Fontawesome webfonts:

```
# npm install --save or yarn add
$ npm install --save @fortawesome/fontawesome-pro-webfonts
```

4.新建 App 插件:

```
$quasar new plugin fontawesome-pro
```

5.編輯 `/quasar.conf.js` :

```
plugins: [
  ...
  'fontawesome-pro' // Add app plugin
],
extras: [
  // 'fontawesome' // Disable free version!
],
framework: {
  // if you want Quasar to use Fontawesome for its icons
  iconSet: 'fontawesome-pro' // requires Quasar v0.15.6+
}
```

6.編輯 `/src/plugins/fontawesome-pro.js` :

```
import '@fortawesome/fontawesome-pro-webfonts/css/fontawesome.css'
import '@fortawesome/fontawesome-pro-webfonts/css/fa-solid.css'
import '@fortawesome/fontawesome-pro-webfonts/css/fa-regular.css'
// do you want these too?
// import '@fortawesome/fontawesome-pro-webfonts/css/fa-light.css'
// import '@fortawesome/fontawesome-pro-webfonts/css/fa-brands.css'

export default () => {
  // Leave blank or make something cool.
}
```

## 基本使用
讓我們來看看如何使用QIcon元件。

```HTML
<!-- Material icons have no prefix -->
<q-icon name="thumb_up" />

<!-- Ionicons have "ion-" prefix -->
<q-icon name="ion-heart" />

<!-- Fontawesome icons have "fa[s|r|l|b] fa-" prefix -->
<q-icon name="fas fa-id-card" />

<!-- MDI icons have "mdi-" prefix -->
<q-icon name="mdi-account-card-details" />

<!-- IcoMoon icons have "icon-" prefix -->
<q-icon name="icon-chrome" />

<!--
  or if you prefer the non self-closing tag version
  which allows to add a QPopover or QTooltip:
-->
<q-icon name="thumb_up">
  <q-tooltip>Some tooltip</q-tooltip>
</q-icon>
```

存在一種情況：想要根據使用的Quasar主題展示不同的icons。你可以使用`mat`和`ios`兩個屬性。下面這個例子是當你在跨平台環境下，你想在每個平台下展示不同的主題。

```HTMl
<q-icon mat="settings" ios="ion-ios-gear-outline" />
```

也可以這樣來達成目的。

```HTML
<q-item-side
  :icon="$q.theme === 'mat' ? 'settings' : 'ion-ios-gear-outline'"
/>
```

### #Vue屬性

Vue屬性 | 類型 | 描述
---|---|---
`name` | String | 被用的icon的名字(通用)
`ios` | String | 在Quasar iOS主題下被用的icon的名字
`mat` | String | 在Quasar Material主題下...
`color` | String | Quasar調色板上的一個顏色
`size` | String | 如: '12px', '3.2rem', '14pt'.

> 注意
> 
> 如果你添加了`name`屬性，它會覆寫`ios`和`mat`屬性


### #Size&Colors
所有的icons都是font icons。這意味著，你可以通過控制`font-size`這個CSS屬性來改變icon的大小。同時，它們也會繼承現在使用的CSS`color`。

```HTML
<q-icon name="mail" style="font-size: 25px" />

<div style="color: #a2e2e3">
  ...
  <!-- inheriting color #a2e2e3: -->
  <q-icon name="alarm" />
</div>
```

Quasar調色板上的顏色可以用兩種方式設置:

```HTML
<q-icon name="mail" class="text-red" />
<!-- or by using `color` prop: -->
<q-icon name="alarm" color="red" />
<q-icon name="alarm" color="green-2" />
```

還有一個 size 屬性:

```HTML
<q-icon name="wifi" size="2rem" />
<q-icon name="delete" size="24px" />
```

### #更多的例子
通過HTMl原生的特性`style`:

```HTML
<q-icon name="thumb_up" style="font-size: 5rem;" />
```

通過HTMl原生的特性`class`:

```HTML
<q-icon name="thumb_up" class="big-icon" />
```

注意。

如果新建了一個有需要用的CSS class，你同時也需要在你的元件的style部分定義它。

```HTML
<style lang="stylus">
.big-icon
  font-size: 5rem
</style>
```

添加一個`click`事件。記得，我們想要的是獲取原生DOM事件，並且這裡是一個Vue元件。所以要用`.native`修飾:

```HTML
<q-icon
  name="map"
  @click.native="handle"
/>
```