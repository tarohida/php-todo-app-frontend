<template>
  <div id="blog-posts-events-demo" class="demo">
    <div :style="{ fontSize: postFontSize + 'em' }">
      <blog-post
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          @enlarge-text="postFontSize += 0.1"
          @reduce-text="postFontSize -= 0.1"
      ></blog-post>
    </div>
  </div>
</template>

<script>
import BlogPost from './BlogPost.vue'
export default {
  components: {
    BlogPost
  },
  data () {
    return {
      posts: [
        { id: 1, title: 'My journey with Vue'},
        { id: 2, title: 'Blogging with Vue'},
        { id: 3, title: 'Why Vue is so fun'}
      ],
      postFontSize: 1
    }
  }
}
</script>