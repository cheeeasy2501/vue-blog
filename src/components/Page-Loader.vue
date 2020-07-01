<template>
  <div class="content-loader">
    <div class="loader bg-light"></div>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  border: 0;
  z-index: 1000;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner-size {
  width: 6rem;
  height: 6rem;
}
</style>
