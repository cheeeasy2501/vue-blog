<template>
  <div class="front-layout">
    <headerComponent />
    <v-main id="main" class="pt-16">
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
    <footerComponent />
  </div>
</template>

<script>
import footerComponent from "@/components/Footer.vue";
import headerComponent from "@/components/Header.vue";

export default {
  name: "front",
  components: {
    footerComponent,
    headerComponent,
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

html {
  height: 100vh;
}
body,
.front-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

header {
  flex: 0 0 auto;
}
main {
  flex: 1 0 auto;
}
footer {
  flex: 0 0 auto;
}
</style>
