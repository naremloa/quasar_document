# Global Event Bus
事件是你的App內部重要的組成部分。

有時你需要一個 event bus (事件總線)或者是 publish/subscribe channel (觀察者(發佈/訂閱)頻道)。 Vue 的每一個元件已經有一個 event bus 。為了方便，你可以通過 `this.$root` 使用 Vue 的根元件來註冊 listener (監聽器)和事件。

> 非常重要！
>
> 不要把這個與 Quasar 元件提供的事件兩者混淆了。那些是元件各自 emit (發射)出來的 Vue 事件，是不會污染到 global event bus 的。

請閱讀 [Vue 文檔( Instance Methods / Events )](https://vuejs.org/v2/api/#Instance-Methods-Events)確認正確的 API 名稱和用法.然後讓我們來看看如何正確的通過Vue的根元件註冊一個事件:

```js
// callback
function cb (msg) {
  console.log(msg)
}

// listen for an event
this.$root.$on('event_name', cb)

// listen once (only) for an event
this.$root.$once('event_name', cb)

// Make sure you stop listening for an event
// when your respective component gets destroyed
this.$root.$off('event_name', cb)


// Emitting an event:
this.$root.$emit('event_name', 'some message')
```

