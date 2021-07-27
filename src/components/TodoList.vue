<template>
  <div class="form-check">
    <ul class="list-group">
      <TodoItem v-for="task in tasks" v-bind:task="task" v-bind:key="task.id"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  props: {
    tasks: Array
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped>

</style>