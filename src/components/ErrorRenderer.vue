<template>
  <div v-if="errors.length">
    <ErrorMessage></ErrorMessage>
    <ErrorList v-bind:errors="errors"></ErrorList>
  </div>
</template>

<script>
import ErrorMessage from './ErrorMessage'
import ErrorList from './ErrorList'

export default {
  name: "ErrorRenderer",
  props: {
    'errors': Array
  },
  components: {
    ErrorMessage,
    ErrorList
  },
}
</script>

<style scoped>

</style>