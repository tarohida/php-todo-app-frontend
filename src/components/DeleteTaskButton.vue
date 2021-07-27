<template>
  <button class="btn" v-on:click="deleteTask">
    <i class="fa fa-trash"></i>
  </button>
</template>

<script>
import axios from 'axios'

export default {
  name: "DeleteTaskButton",
  props: {
    taskId: Number
  },
  methods: {
    deleteTask: function () {
      axios.delete(`http://127.0.0.1/api/tasks/${this.taskId}`)
    }
  }
}
</script>

<style scoped>

</style>