<template>
  <Navigation></Navigation>
  <ContentArea></ContentArea>
</template>

<script>
import Navigation from './components/Navigation.vue';
import ContentArea from "./components/ContentArea";

export default {
  name: "App",
  components: {
    ContentArea,
    Navigation,
  }
}
</script>

<style scoped>
</style>