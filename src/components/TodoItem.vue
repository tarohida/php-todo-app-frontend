<template>
  <li class="list-group-item">
    <TodoCheckbox v-bind:task="task"></TodoCheckbox>
    <DeleteTaskButton v-bind:task-id="task.id"></DeleteTaskButton>
  </li>
</template>

<script>
import TodoCheckbox from './TodoCheckbox'
import DeleteTaskButton from './DeleteTaskButton'

export default {
  name: "TodoItem",
  props: {
    task: Object
  },
  components: {
    TodoCheckbox,
    DeleteTaskButton
  }
}
</script>

<style scoped>

</style>