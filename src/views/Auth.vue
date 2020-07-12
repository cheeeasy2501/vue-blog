<template>
  <v-row align="center" justify="center" style="height:60vh">
    <v-col cols="12" sm="8" md="6" lg="4">
      <v-card>
        <v-tabs
          v-model="tab"
          background-color="blue accent-4"
          dark
          centered
          class="elevation-12"
        >
          <v-tab v-for="item in items" :key="item.tab">
            {{ item.tab }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab">
            <v-card flat>
              <component :is="item.component" />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {
    login: () => import("@/components/auth/Login"),
    registration: () => import("@/components/auth/Register"),
  },

  data: () => ({
    tab: null,
    items: [
      { tab: "login", component: "login" },
      { tab: "Registration", component: "registration" },
    ],
  }),
};
</script>
