<template>
  <b-col class="mb-4" xl="6" lg="6" md="6" xs="12">
    <router-link :to="{ path: `post/${post._id}` }">
      <b-card
        :title="post.title"
        title-tag="h3"
        header="Статья"
        header-tag="h5"
        border-variant="light"
        header-bg-variant="light"
        header-text-variant="dark"
        body-text-variant="dark"
        align="left"
      >
        <b-card-text>{{ post.body }}</b-card-text>
        <template v-slot:footer>
          <small class="text-muted">Last updated 3 mins ago</small>
        </template>
      </b-card>
    </router-link>
  </b-col>
</template>
<script>
export default {
  props: {
    post: Object,
  },
};
</script>
<style></style>
