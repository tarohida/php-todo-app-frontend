<template>
  <div class="vue-todo-app-content-area">
    <TodoList
      v-bind:backend-url="backendUrl"
    ></TodoList>
  </div>
</template>

<script>
import TodoList from "./TodoList";
export default {
  name: "ContentArea",
  components: {
    TodoList
  },
  props: [
      'backendUrl'
  ]
}
</script>

<style scoped>
.vue-todo-app-content-area {
  padding: 2em;
}
</style>