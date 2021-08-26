<template>
  <Navigation></Navigation>
  <TodoList></TodoList>
</template>

<script>
import Navigation from './components/Navigation.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: "App",
  components: {
    Navigation,
    TodoList
  }
}
</script>

<style scoped>
</style>