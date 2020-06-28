<template>
  <v-app id="app">
    <headerElement />
    <v-main id="main" class="pt-16">
      <loader v-if="loading" />
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
    <footerElement />
  </v-app>
</template>
<script>
import headerElement from "@/layouts/Header";
import footerElement from "@/layouts/Footer";
import loader from "@/components/Page-Loader";

export default {
  components: {
    headerElement,
    footerElement,
    loader,
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }


</style>
