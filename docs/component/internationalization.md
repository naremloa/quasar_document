# 國際化(Internationalization)(I18n)
國際化(internationalization)是用來保證在不需要改動原始碼的情況下，產品(網站或是應用)可以適用各種語言和地區。可以把國際化想成是為本地化做準備的。

解決website/app問題的建議套件是: [vue-i18n](https://github.com/kazupon/vue-i18n)

> However, handling I18n in app-space is not enough. Quasar components have their own labels too. One option is to configure labels through label properties on each instance of Quasar components like QTable or QDatetime. This takes time and adds unnecessary complexity to your website/app. Instead, use the Quasar I18n (applies to Quasar components only!) system.

然而在app-space上，i18n的問題並沒有被很好的解決掉。它需要花費時間，並且會向你的website/app添加一些不必要且複雜的東西。Quasar元件有它們自己的labels來解決這個問題。Quasar有一個設置是通過label屬性來設置每一個Quasar元件的實體，如QTable或QDatetime的label。所以，來用Quasar的i18n系統吧(只適用Quasar元件)！

> 現階段完成可使用的語言列表，[Quasar I18n on Github](https://github.com/quasarframework/quasar/tree/v0.17/i18n)。如果你需要的語言不在該列表，請直接提交一個PR來增加。這最多就花個5-10分鐘。我們非常歡迎任何語言。

## 設置默認語言
編輯 `/quasar.conf.js`:

```javascript
framework: {
    i18n: 'de'
}
```

## 動態變換語言
以QSelect為例動態切換Quasar元件語言:

```
<template>
  <q-select
    stack-label="I18n"
    :options="[
      { label: 'English (US)',         value: 'en-us' },
      { label: 'English (UK)',         value: 'en-uk' },
      { label: 'Romanian',             value: 'ro' },
      { label: 'Chinese (Simplified)', value: 'zh-hans' },
      { label: 'Italian',              value: 'it' }
      { label: 'Spanish',              value: 'es' }
      { label: 'French',               value: 'fr' }
      { label: 'German',               value: 'de' },
      { label: 'Russian',              value: 'ru' },
      .......
    ]"
    v-model="lang"
  />
</template>

<script>
export default {
  data () {
    return {
      lang: this.$q.i18n.lang
    }
  },
  watch: {
    lang (lang) {
      // dynamic import, so loading on demand only
      import(`quasar-framework/i18n/${lang}`).then(lang => {
        this.$q.i18n.set(lang.default)
      })
    }
  }
}
</script>
```

## 在App Space中使用Quasar I18n
儘管Quasar I18n是只為了Quasar元件設計的，你仍然可以將它用在你自己的website/app元件。

```HTML
"Close" label in current Quasar I18n language is:
{{ $q.i18n.label.close }}
```

## 偵測地區(Detecting Locale)
你可以用Quasar提供的方法來偵測使用者所在的地區。

```js
// outside of a Vue file
import Quasar from 'quasar'
(String) Quasar.i18n.getLocale()

// inside of a Vue file
(String) this.$q.i18n.getLocale()
```

## 解決Quasar UMD
如果需要增加一個Quasasr語言包(pack)，你需要用js標籤來引入相應Quasar版本的語言包，並告訴Quasar使用它。Ex:

```HTML
<!-- include this after Quasar JS tag -->
<script src="https://cdn.jsdelivr.net/npm/quasar-framework@latest/dist/umd/i18n.pt-br.umd.min.js"></script>
<script>
  Quasar.i18n.set(Quasar.i18n.ptBr)
</script>
```

你可以通過這條命令`$ vue quasarframework/quasar-starter-kit-umd <folder>`生成一個sample，並為Quasar I18n指定一個確切的語言。這樣你就能知道到底要在自己的HTML檔案裡的js tag引入什麼。