# 介紹

在你開始了解Quasar之前，你最好熟識ES6，並對 "Vue是如何工作的" 有一定程度的理解。對reactive UIs有一定經驗的開發人員來說，花個半天左右就能把Vue的文檔從頭到尾讀過一遍。這將有助於你明白Quasar元件是如何使用和配置的。

如果你對Vue和reactive UI庫完全的陌生，為了能更好的明白Quasar的文檔，我們建議你先看看[這個](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview)。

在讀完Vue的文檔後，應該就能幫助你先消除很多我們常被問到的問題，如："我該怎麼使用Quasar元件，Vue的properties(屬性)、methods(方法)和events(事件)"

## Vue單檔案元件(Single File Vue Components)

你將會用`*.vue`檔案來構建你的Quasar app。

```HTML
<template>
  <!-- you define your Vue template here -->
</template>

<script>
// This is where your Javascript goes
// to define your Vue component, which
// can be a Layout, a Page or your own
// component used throughout the app.

export default {
  //
}
</script>

<style>
/* This is where your CSS goes */
</style>
```

###CSS 預處理器
你可以使用任何你想使用的CSS預處理器來處理`<style>`標籤。[Stylus](http://stylus-lang.com/)是可以直接使用的。其他如SCSS/SASS或LESS，你需要先安裝它們的Webpack loaders(Ex: `npm install less-loader`)。

loader安裝好後（請記得Stylus早已內建好了），你就可以用你想要的預處理器來處理你的css程式碼了。

```HTML
<!-- notice lang="stylus" -->
<style lang="stylus">
.some-div
  font-size 15px
</style>
```

如上面的程式碼所示，你可以把`stylus`換成你選擇的預處理器

## 使用Quasar指令
Quasar有一些註冊在Vue下的客製化的指令。這些指令能直接使用在幾乎所有的DOM元素和元件中。

Quasar指令:

```HTMl
<div v-ripple>Click Me</div>
```

> 注意，在HTML模板中是通過`v-ripple`來使用ripple的。Vue的指令都會帶上前綴`v-`。

為了能使用Quasar提供的指令，你首先需要告訴Quasar你要用哪些指令。打開`/quasar.conf.js`檔案，然後加入下面這段：

```js
framework:{
    directive: ['Ripple']
}
```

再看看別的例子。我們現在需要TouchPan和TouchSwipe指令，所以我們也把它們加進`/quasar.conf.js`檔案：

```js
framework:{
    directive: ['Ripple', 'TouchPan', 'TouchSwipe']
}
```

現在你可以在你的Vue模板裡這樣寫:

```HTML
<div v-touch-pan="handler">...</div>
<div v-touch-swipe="handler">...</div>
<div v-ripple>Click me. I got ripples.</div>
```

## 使用Quasar元件
Quasar元件的名稱都是以 "Q" 開頭的，如 "QBtn" 或者 "QElementResizeObservable"。如果需要使用它們，你要先在`/quasar.conf.js`中引入它們。

為了能明白到底是如何在我們的app中加入這些元件，讓我們以QBtn和QIcon為例:

```HTML
<div>
  <q-btn @click="doSomething">Do something</q-btn>
  <q-icon name="alarm" />
</div>
``` 

> 注意，在HTML模板中是用`<q-btn>`來使用QBtn元件的。這意味著如果我們要用QElementResizeObservable元件，我們在模板中就應該寫成`<q-element-resize-observable>`。

這時，在`/quasar.conf.js`你應該加上：

```HTML
framework: {
    components: ['QBtn', 'QIcon']
}
```

## 使用Quasar插件
你不僅可以在Vue檔案中使用如 Notify, ActionSheet, AppVisibility 等這些插件，在其他地方也同樣可以。

如果需要使用它們，你要先在`/quasar.conf.js`中引入它們：

```js
framework: {
  plugins: ['Notify', 'ActionSheet']
}
```

先以 Notify 為例，來看看我們到底是怎麼使用它的。在Vue檔案中，你應該會寫些：

```HTML
<template>
  <div>
    <q-btn
      @click="$q.notify('My message')"
      color="primary"
      label="Show a notification"
    />

    <q-btn
      @click="showNotification"
      color="primary"
      label="Show another notification"
    />
  </div>
</template>

<script>
export default {
  methods: {
    showNotification () {
      this.$q.notify('Some other message')
    }
  }
}
</script>
```

> 注意，在 template 區塊我們使用的是`$q.<plugin-name>`。在 script 區塊中則是`this.$q.<plugin-name>`。

現在，讓我們看看在其他地方(Vue檔案之外)是如何使用 Notify的：

```js
import { Notify } from 'quasar'

// ...
Notify.create('My message')
```

### 引入所有的元件和指令來進行快速測試
如果你只是要做一個快速測試，一一引入Quasar所有的元件、指令和插件是件讓人疲勞的事情。在這種情況下，你可以在`/quasar.conf.js`中直接這樣告訴Quasar：

```js
framework: 'all'
```

> 非常重要。由於你的包(bundle)充滿了不必要的/沒有用到的程式碼，所以也就不會用到[tree shaking](https://webpack.js.org/guides/tree-shaking/)。不建議在product版中使用。只用在需要快速測試的時候。

### 自閉合標籤(Self Closing Tags)
有些Quasar元件不需要你在裡面額外放入HTML內容。在使用這些元件時，你可以讓它自閉合。例如使用QIcon元件時：

```HTML
<q-icon name="cloud" />
```

自閉合意味著上面這段等同於：

```HTML
<q-icon name="cloud"></q-icon>
```

兩種寫法都是合法可用的。它們就跟一般的DOM元素一樣：

```HTML
<div class="col" />
<!-- equivalent to: -->
<div class="col"></div>
```

一些eslint-plugin-vue的規則不允許使用自閉合語法。

## 處理Vue屬性(Handling Vue Properties)
在閱讀整篇文檔時，你會注意到Quasar元件有一個叫做 "Vue Properties" 的部分。在Vue的文檔中，它通常被稱呼為 [Props](https://vuejs.org/v2/guide/components-props.html)。Ex:

Vue屬性 | 類型 | 描述
---|---|---
`infinite` | Boolean | Infinite slides scrolling
`size` | string | Thickness of loading bar.
`speed` | number | How fast should loading bar update its value(in milliseconds).
`columns` | Object | Object defining columns(see "Columns Definition" below)
`offset` | Array | Array with two numbers. Offset on horizontal and vertical (in pixels).

讓我們用一些假的Quasar元件(我們叫它QBogus)為上面列出的屬性寫些例子以供理解。我們會在下面的章節對Vue屬性一一進行討論。


### Boolean屬性
一個布爾類型的屬性意味著它只能接收一個嚴格布爾值(strictly Boolean value)。這個值不會被自動轉為布爾型，所以你必須確定你正在用的是一個布爾型的值。

如果你試圖控制這些屬性並在程式運行時改變它的值，那麼在作用域範圍內(scope)把它和一個變數綁定起來是個不錯的選擇：

```HTML
<template>
    <q-bogus :infinite="myInfiniteVariable" />
</template>
<script>
export default {
  	data () {
    	return {
      		myInfiniteVariable: false
    	}
  	}
}
</script>
```

另一方面，如果你知道這個布爾值沒有被變動的需要，你可以用像元件特性(attribute)的方式簡寫它。換句話說，如果你不向它綁定任何變數，它永遠都是`true`:

```HTML
<template>
  <q-bogus infinite />

  <!--
    the following is perfectly valid,
    but it's a longer version
  -->
  <q-bogus :infinite="true" />
</template>
```

### String屬性
就像你所想的那樣，這個類型的屬性只能接收字串。

```HTML
<template>
  <!--
    direct assignment, no need for
    a variable in our scope
  -->
  <q-bogus size="24px" />

  <!--
    we can also bind it to a variable
    in our scope so we can dynamically
    change it
  -->
  <q-bogus :size="mySize" />
</template>

<script>
export default {
  data () {
    return {
      // notice String as value
      mySize: '16px'
    }
  }
}
</script>
```

### Number屬性

```HTML
<template>
  <!--
    Case 1. Direct assignment.
    Notice the colon (":") before property name.
  -->
  <q-bogus :speed="50" />

  <!-- Case 2. Assignment through a scope variable -->
  <q-bogus :speed="myNumber" />
</template>

<script>
export default {
  data () {
    return {
      // notice Number as value
      myNumber: 50
    }
  }
}
</script>
```

### Object屬性

```HTMl
<template>
  <!-- Case 1. Direct assignment. -->
  <q-bogus :columns="{key: 'value', anotherKey: 'another value'}" />
  <!-- or a more elegant way for Case 1: -->
  <q-bogus
    :columns="{
      key: 'value',
      anotherKey: 'another value'
    }"
  />

  <!-- Case 2. Assignment through a scope variable -->
  <q-bogus :columns="myColumns" />
</template>

<script>
export default {
  data () {
    return {
      myColumns: {
        key: 'value',
        anotherKey: 'another value'
      }
    }
  }
}
</script>
```

### Array屬性

```HTML
<template>
  <!-- Case 1. Direct assignment. -->
  <q-bogus :offset="[10, 20]" />

  <!-- Case 2. Assignment through a scope variable -->
  <q-bogus :offset="myOffset" />
</template>

<script>
export default {
  data () {
    return {
      myOffset: [10, 20]
    }
  }
}
</script>
```

##處理Vue方法(Handling Vue Methods)
在閱讀整篇文檔時，你會注意到Quasar元件有一個叫做 "Vue Methods" 的部分。Ex:

Vue方法 | 描述
---|---
`next()` | Goes to next slide.
`previous(doneFn)` | Goes to previous slide
`toggleFullscreen()` | Toggles fullscreen mode

如果你需要使用這些方法，你需要先在元件中設置vue reference(Vue參考):

```HTML
<template>
  <!--
    Notice ref="myRef". We will use the name
    assigned to "ref" in the script part below
  -->
  <q-bogus ref="myRef" />
</template>

<script>
export default {
  // we can now access `this.$refs.myRef`
  // an example on the mounted() Vue component hook
  mounted () {
    // calling "next()" method:
    this.$refs.myRef.next()
  }
  // calling before mount point might result in errors
  // as Vue hasn't yet prepared the Vue references
}
</script>
```

## 處理Vue事件(Handling Vue Events)
在閱讀整篇文檔時，你會注意到Quasar元件有一個叫做 "Vue Events" 的部分。不要把這裡的Vue Events與[Global Event Bus](http://v0-17.quasar-framework.org/components/global-event-bus.html)搞混了，它們兩者不存在共同點。Ex:

事件名稱 | 描述
---|---
`@open` | Modal被打開後立即觸發
`@close` | Modal被關閉後立即觸發

當它們被觸發時，為了能catch(捕獲)到這些事件，你需要先在HTML模板裡給這些元件添加上listeners(監聽器)。Ex:

```HTMl
<template>
  <q-bogus @open="doSomething" @close="doSomethingElse" />
</template>

<script>
export default {
  methods: {
    doSomething () {
      // this method has been called (in this case)
      // because @open event was triggered by QBogus component
    },
    doSomethingElse () {
      // this method has been called (in this case)
      // because @close event was triggered by QBogus component
    }
  }
}
</script>
```

有時，我們也需要在Quasar元件上使用一些原生的DOM事件，如`@click`。但不要把原生事件與經由元件emit(發射)出來的Vue事件搞混了，它們是不同的東西。簡單的說：我們有一個QBogus(假的Quasar元件)，它會emit`@open`和`@close`，但是它不會emit`@click`。`@click`已經是一個原生DOM事件了，我們可以通過`.native`來catch它。

```HTML
<!-- Notice "@click.native" -->
<q-bogus @click.native="myMethod" />
```
