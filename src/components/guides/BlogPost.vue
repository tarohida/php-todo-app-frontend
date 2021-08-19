<template>
  <div class="blog-post">
    <p><b>{{ title }}</b></p>
    <button @click="$emit('enlargeText')">
      Enlarge text
    </button>
    <button @click="$emit('reduceText')">
      Reduce text
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  emits: [
      'enlargeText',
      'reduceText'
  ]
}
</script>