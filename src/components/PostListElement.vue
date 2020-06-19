<template>
  <b-col class="mb-4" xl="4" lg="4" md="6" xs="12">
    <router-link :to="{ path: `post/${post._id}` }" class="element-post">
      <b-card
        :title="post.title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
      >
        <b-card-text>{{ post.body }}</b-card-text>
      </b-card>
    </router-link>
  </b-col>
</template>
<script>
export default {
  props: {
    post: Object
  }
};
</script>
<style>
</style>