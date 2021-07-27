<template>
  <button class="btn" v-on:click="deleteTask">
    <i class="fa fa-trash"></i>
  </button>
</template>

<script>
export default {
  name: "DeleteTaskButton",
  props: {
    taskId: Number
  },
  methods: {
    deleteTask: function () {
      this.$emit('delete-task', this.taskId)
    }
  }
}
</script>

<style scoped>

</style>