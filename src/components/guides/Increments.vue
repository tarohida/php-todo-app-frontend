<template>
  {{ count }}
</template>

<script>
export default {
  name: 'Increments',
  data() {
    return { count: 4 }
  },
  methods: {
    increment() {
      // `this` はコンポーネントインスタンスを参照
      this.count++
    }
  }
}
</script>