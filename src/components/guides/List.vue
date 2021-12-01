<template>
  <ul id="array-with-index">
    <li
        v-for="(item, index) in items"
        v-bind:key="index"
    >
      {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
    <li
        v-for="(value, name, index) in myObject"
        v-bind:key="index"
    >
      {{ index }}. {{ name }}: {{ value }}
    </li>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2020-03-22'
      },
      numbers: [ 1, 2, 3, 4, 5 ]
    }
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(number => number % 2 === 0)
    }
  }
}
</script>