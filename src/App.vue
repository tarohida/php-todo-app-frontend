<template>
  <component v-bind:is="nav"></component>
  <TodoList></TodoList>
</template>

<script>
import Navigation from './components/Navigation.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: "App",
  data: function () {
    return {
      nav: 'Navigation'
    }
  },
  components: {
    Navigation,
    TodoList,
  }
}
</script>

<style scoped>
</style>