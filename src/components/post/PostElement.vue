<template>
  <v-col cols="12" sm="12" md="6" lg="4">
    <v-card max-width="500" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ post.title }}</v-list-item-title
          >
          <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
        height="194"
      ></v-img>

      <v-card-text>
        {{ post.body }}
      </v-card-text>

      <v-card-actions>
        <v-btn
          depressed
          large
          color="primary"
          :to="{ path: `post/${post._id}` }"
        >
          Read
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    post: Object,
  },
};
</script>
<style></style>
