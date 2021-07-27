<template>
  <li class="list-group-item">
    <TodoCheckbox v-bind:task="task"></TodoCheckbox>
    <DeleteTaskButton
        v-bind:task-id="task.id"
        v-on:delete-task="pipeEvent($event)"
    ></DeleteTaskButton>
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
  },
  methods: {
    pipeEvent(event) {
      this.$emit('delete-task', event)
    }
  }
}
</script>

<style scoped>

</style>