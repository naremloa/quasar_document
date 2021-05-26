# Vue原型注入(Vue Prototype Injections)
Quasar用物件`$q`注入進Vue的原型(prototype):

注入 | 類型 | 描述
---|---|---
`$q.version` | String |  Quasar 版本
`$q.theme` | String | 使用的主題( theme ) 。Ex: mat, ios
`$q.platform` | Object | 從 Quasar 引入進來的物件，與 [Platform](http://v0-17.quasar-framework.org/components/platform-detection.html) 是同一個東西。
`$q.i18n` | Object | Internationalisation for Quasar, containing labels etc (one of [i18n files](https://github.com/quasarframework/quasar/tree/dev/i18n)). Designed for Quasar components, but you can use in your app components too.
`$q.cordova` | Object | reference (參考)自 Cordova 的全局物件。只允許在 Cordova app 下執行。
`$q.electron` | Object | reference (參考)自 Electron 全局物件。只允許在 Electron app 下執行。

你可以在Vue的作用域下全局的使用它，就像：

```HTMl
<!-- inside a Vue template -->
<template>
  <div>
    <div v-if="$q.platform.is.ios">
      Gets rendered only on iOS platform.
    </div>
  </div>
</template>

<script>
// not available here outside
// of the export

export default {
  // inside a Vue component script
  ...,

  // showing an example on a method, but
  // can be any part of Vue script
  methods: {
    show () {
      // prints out Quasar version
      console.log(this.$q.version)
    }
  }
}
</script>
```

