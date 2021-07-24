<template>
  <div id="app">
    <ErrorRenderer v-bind:errors="errors"></ErrorRenderer>
    <!--
    <input class="new-task"
           autofocus
           autocomplete="off"
           placeholder="What needs to be done?"
           v-model="new_task"
           @keyup.enter="addTodo"
    />
    -->
    <!--
    <TodoList v-bind:tasks="tasks"></TodoList>
    -->
  </div>
</template>

<script>
import ErrorRenderer from './components/ErrorRenderer'

export default {
  name: 'App',
  components: {
    ErrorRenderer
  },
  data: function () {
    return {
      errors: ['some', 'to']
    }
  }
}
</script>

<style>
</style>
