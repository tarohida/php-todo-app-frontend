<template>
  <div class="vue-todo-app-content-area">
    <TodoList></TodoList>
  </div>
</template>

<script>
import TodoList from "./TodoList";
export default {
  name: "ContentArea",
  components: {
    TodoList
  }
}
</script>

<style scoped>
.vue-todo-app-content-area {
  padding: 2em;
}
</style>