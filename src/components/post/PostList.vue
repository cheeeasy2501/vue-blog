<template>
  <b-container fluid class="container">
    <b-row class="posts">
      <PostElementComponent v-for="post in posts" :key="post.id" :post="post" />
      <b-col xl="12">
        <b-pagination
          align="fill"
          v-model="currentPage"
          :per-page="10"
          :total-rows="totalRows"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import PostElementComponent from "@/components/post/PostElement";
import { mapState, mapGetters } from "vuex";
export default {
  data: () => ({
    currentPage: 1,
  }),
  created() {
    this.currentPage = this.$store.getters.currentPage;
    this.$store.dispatch("get_posts", this.currentPage);
  },
  computed: {
    ...mapGetters({ posts: "postCollection", totalRows: "postCount" }),
  },
  watch: {
    currentPage: {
      handler() {
        this.$store.dispatch("set_currentPage", this.currentPage);
        this.$store.dispatch("get_posts", this.currentPage);
      },
    },
  },
  components: {
    PostElementComponent,
  },
};
</script>
