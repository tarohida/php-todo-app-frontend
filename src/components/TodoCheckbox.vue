<template>
  <label>
    <input type="checkbox" class="form-check-input" v-model="task.completed">{{ task.title }}
  </label>
</template>

<script>
export default {
  name: "TodoCheckbox",
  props: {
    task: Object
  }
}
</script>

<style scoped>

</style>