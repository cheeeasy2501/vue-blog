<template>
  <v-container>
    <v-pagination
      v-model="currentPage"
      :length="pageLength"
      color="blue accent-4"
      @input="toTop()"
    ></v-pagination>
    <v-row>
      <PostElementComponent v-for="post in posts" :key="post.id" :post="post" />
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="pageLength"
      color="blue accent-4"
      @input="toTop()"
    ></v-pagination>
  </v-container>
</template>
<script>
import PostElementComponent from "@/components/post/PostElement";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    currentPage: 1,
  }),
  created() {
    this.currentPage = this.$store.getters.CURRENT_PAGE;
    this.$store.dispatch("GET_POSTS", this.currentPage);
  },
  computed: {
    ...mapGetters({
      posts: "POSTS",
      totalRows: "postsCount",
      pageLength: "PAGE_LIMIT",
    }),
  },
  watch: {
    currentPage: {
      handler() {
        if (this.currentPage !== this.$store.getters.currentPage) {
          this.$store.dispatch("SET_PAGE", this.currentPage);
          this.$store.dispatch("GET_POSTS", this.currentPage);
        }
      },
    },
  },
  components: {
    PostElementComponent,
  },
  methods: {
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
