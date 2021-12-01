<template>
  <div :class="classObject">
    Class!
  </div>
  <div :style="styleObject">
    And Style!
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      error: {
        type: 'fatal'
      },
      color: 'blue',
      fontSize: 13
    }
  },
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    },
    styleObject() {
      return {
        color: this.color,
        fontSize: `${this.fontSize}px`
      }
    }
  }
}
</script>

<style>

</style>