<template>
  <v-container>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :mini-variant="primaryDrawer.mini"
      app
      overflow
    >
      <v-tabs
        v-model="tab"
        background-color="blue accent-3"
        dark
        center-active
        vertical
        class="elevation-12"
        style="height:100vh"
      >
        <v-tab v-for="item in listGroup.items" :key="item.tab" active-class="blue accent-2 elevation-24" >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.tab }}
        </v-tab>
      </v-tabs>
    </v-navigation-drawer>

    <v-app-bar  color="blue accent-2" dark app>
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Admin Panel</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in listGroup.items" :key="item.tab">
          <v-card flat>
            <component :is="item.component" />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-main>
  </v-container>
</template>

<script>
export default {
  components: {
    post: () => import("../components/admin/Posts"),
  },
  data: () => ({
    tab:null,
    listGroup: {
      model: null,
      items: [
        { tab: "Posts", icon: "mdi-book-open", component: "post" },
      ],
    },
    primaryDrawer: {
      model: null,
      mini: false,
    },
  }),
};
</script>
