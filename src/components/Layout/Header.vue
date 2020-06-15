<template>
 <div class="container">
    <nav class="nav">
      <div class="nav-text">JsonPlaceholder Prototype</div>
    </nav>
   </div>
</template>
<script>
    export default {
         data: () => ({
             menuVisible: false
         })
    }
</script>
<style scoped>
    .nav {
        display:flex;
        align-items: center;
        justify-content:space-between;
        padding: 24px 0;
        z-index: 100;
    }
    .nav-text {
        display: flex;
        justify-content: center;
        width: 100%;
    }

</style>