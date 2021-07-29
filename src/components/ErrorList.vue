<template>
  <ul>
    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
  </ul>
</template>

<script>
export default {
  name: "ErrorList",
  props: {
    'errors': Array
  }
}
</script>

<style scoped>

</style>