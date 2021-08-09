<template>
  <div id="todo-list-app">
    <ol>
      <!--
        各 todo-item にその内容を表す todo オブジェクトを指定することで、
        内容が動的に変化します。
        後述する "key" も各コンポーネントに
        指定する必要があります。
      -->
      <TodoItem
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
      ></TodoItem>
    </ol>
  </div>

</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'TodoListApp',
  components: {
    TodoItem
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  }
}
</script>