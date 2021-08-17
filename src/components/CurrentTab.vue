<template>
  <div id="dynamic-component-demo" class="demo">
    <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import Home from './CurrentTab/Home.vue';
import Posts from './CurrentTab/Posts.vue';
import Archive from './CurrentTab/Archive.vue';

export default {
  name: "CurrentTab",
  components: {
      Home,
      Posts,
      Archive
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Posts', 'Archive']
    }
  },
  computed: {
    currentTabComponent() {
      return this.currentTab
    }
  }
}
</script>

<style scoped>

</style>