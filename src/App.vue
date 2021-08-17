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
  <WatchExample></WatchExample>
  <ClassAndStyle></ClassAndStyle>
  <List></List>
  <TodoList></TodoList>
  <EventWithMethod></EventWithMethod>
  <br />
  <DataBind></DataBind>
  <br />
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <BlogPostEventDemo></BlogPostEventDemo>
  <CustomInput
      :model-value="searchText"
      @update:model-value="searchText = $event"
  ></CustomInput>
  <br />
  {{ searchText }}
  <CustomInput
      v-model="searchText"
  ></CustomInput>
  <br />
  {{ searchText }}
  <AlertBox>
    THIS IS ALERT MESSAGE
  </AlertBox>
  <CurrentTab></CurrentTab>
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
import WatchExample from './components/WatchExample.vue'
import ClassAndStyle from './components/ClassAndStyle.vue'
import List from './components/List.vue'
import TodoList from './components/TodoList.vue'
import EventWithMethod from './components/EventWithMethod.vue'
import DataBind from './components/DataBind.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import BlogPostEventDemo from './components/BlogPostEventDemo.vue'
import CustomInput from './components/CustomInput.vue'
import AlertBox from './components/AlertBox.vue'
import CurrentTab from "./components/CurrentTab.vue";

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
    WatchExample,
    ClassAndStyle,
    List,
    TodoList,
    EventWithMethod,
    DataBind,
    ButtonCounter,
    BlogPostEventDemo,
    CustomInput,
    AlertBox,
    CurrentTab
  },
  data: function () {
    return {
      searchText: ''
    }
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
