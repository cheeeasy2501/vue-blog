<template>
  <div class="container">
    <div class="post-container">
      <div class="post-block_main">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-body">{{ post.content }}</div>
        <router-link :to="{ path: '/' }">Назад</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("GET_POST", this.$route.params.id);
  },
  computed: {
    ...mapGetters({ post: "POST" }),
  },
  components: {
  },
};
</script>

<style>
.post-container {
  color: black;
  border: 0;
  background: white;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  min-height: 70vh;
}
.post-title {
  font-size: 28px;
  text-align: left;
  background: #00adff;
  margin: 0px 0px 0 -16px;
  padding: 16px;
  color: white;
  box-shadow: -2px 0px 3px 1px #00699a;
}
.post-body {
  padding: 16px 12px;
  font-size: 20px;
  text-align: left;
}
</style>
