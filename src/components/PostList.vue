<template>
  <b-container fluid class="container">
    <b-row class="posts">
      <PostElementComponent v-for="post in posts" :key="post.id" :post="post" />
      <b-col xl="12">
        <b-pagination align="fill" v-model="currentPage" :per-page="9" :total-rows="totalRows"></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import PostElementComponent from "@/components/PostListElement";

export default {
  data: () => ({
    currentPage: 1
  }),
  created() {
    this.$store.dispatch("get_posts", 1);
  },
  computed: {
    posts() {
      return this.$store.getters.postCollection;
    },
    totalRows() {
      return this.$store.getters.postCount;
    }
  },
  watch: {
    currentPage: {
      handler() {
        this.$store.dispatch("get_posts", this.currentPage);
      }
    }
  },
  components: {
    PostElementComponent
  }
};
</script>