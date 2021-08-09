<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Clock></Clock>
  <BindAttribute></BindAttribute>
  <EventHandling></EventHandling>
  <TwoWayBinding></TwoWayBinding>
  <ConditionalRendering></ConditionalRendering>
  <ListRendering></ListRendering>
  <TodoListApp></TodoListApp>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Clock from './components/Clock.vue'
import BindAttribute from './components/BindAttribute.vue'
import EventHandling from './components/EventHandling.vue'
import TwoWayBinding from './components/TwoWayBinding.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ListRendering from './components/ListRendering.vue'
import TodoListApp from './components/TodoListApp'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Clock,
    BindAttribute,
    EventHandling,
    TwoWayBinding,
    ConditionalRendering,
    ListRendering,
    TodoListApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
