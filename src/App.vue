<template>
  <div id="app">
    <header id="header">
         <headerElement />
    </header>
    <main id="main">
      <transition name="fade" mode="out-in"  appear>  
        <router-view/>
      </transition>
    </main>
    <footer id="footer">
        <footerElement />
    </footer>
  </div>
</template>
<script>
import headerElement from '@/components/Layout/Header'
import footerElement from '@/components/Layout/Footer'
export default {
  components:{
     headerElement,
     footerElement 
    }
}
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition:.35s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  transform: translateX(-100%);
}
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
  background-color:#333333;
}
#main {
	flex: 1 0 auto;
  padding: 56px 0;
}
#footer {
	flex: 0 0 auto;
}
.container {
    max-width: 1440px;
    margin: 0 auto;
}
#header {
    background: #e85858;
    font-size: 24px;
    position: sticky;
    top: 0;
    color: white;
    z-index: 100;
}
a, a:hover, a:not(.md-button):hover {
  text-decoration: none;
}

 @media (max-width: 1440px) {
  .container{
    padding: 0 72px;
  }
}
@media (max-width: 1024px) {
  .container{
    padding: 0 32px;
  }
}

@media (max-width: 768px) {
  .container{
    padding: 0 16px;
  } 
 } 
</style>
