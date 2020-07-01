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
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
