<template>
  <div id="event-with-method">
    <!-- `greet` は、あらかじめ定義したメソッドの名前 -->
    <button @click="greet">Greet</button>
  </div>
  <div id="inline-handler">
    <button @click="say('hi')">Say hi</button>
    <button @click="say('what')">Say what</button>
  </div>
  <!-- `key` が `Enter` のときだけ、`vm.submit()` が呼ばれます  -->
  <input v-model="data" @keyup.enter="data='エンターが入力されました'" />

</template>

<script>
export default {
  data() {
    return {
      name: 'Vue.js',
      data: ''
    }
  },
  methods: {
    greet(event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('Hello ' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
    },
    say(message) {
      alert(message)
    }
  },

}
</script>