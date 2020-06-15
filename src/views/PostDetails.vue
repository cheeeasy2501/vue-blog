<template>
   <div class="container"> 
    <div class="post-container" v-if="isLoaded">
        <div class="post-block_main">
            <div class="post-title">{{ post.title }}</div>
            <div class="post-body">{{ post.body }}</div>
            <router-link :to="{ path: '/' }" >Назад</router-link>
        </div>
        <PostCommentsComponent />
    </div> 
    <div class="pre-loader" v-else>
        <div class="pre-loader__spinner">  
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>  
    </div>
   </div>
</template>
<script>
import PostCommentsComponent from '@/components/PostDetailsComments'

export default {
    created(){
        this.$store.dispatch('get_post', this.$route.params.id); 
    },
    computed: {
        post() {
          return this.$store.getters.post;
        },
        isLoaded() {
          return this.$store.getters.isLoaded;
        }
    },
    components:{
        PostCommentsComponent
    }
}
</script>

<style>
.pre-loader {
    background: white;
    height: 70vh;
}
.pre-loader__spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.circle:nth-child(1),
.circle:nth-child(2),
.circle:nth-child(3) {
  width: 32px;
  height: 32px;
  margin-right: 15px;
  animation: jump .9s ease-in infinite;
}
 .circle:nth-child(1) {
  background-color: #e85858;
}

.circle:nth-child(2) {
  background-color: #e85858a6;
  animation-delay: .15s;
}

.circle:nth-child(3) {
  background-color: #e8585875;
  animation-delay: .25s;
}
@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  
  50% {
    transform: translateY(-40px);
  }
  
  100% {
    transform: translateY(0px);
  }
}
.post-container {
    color: black;
    border: 0;
    background: white;
    border-radius: 4px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    min-height: 70vh;
}
.post-title {
    font-size: 28px;
    text-align: left;
    background: #00adff;
    margin: 0px 0px 0 -16px;
    padding: 16px;
    color: white;
    box-shadow: -2px 0px 3px 1px #00699a;
}
.post-body {
    padding: 16px 12px;
    font-size: 20px;
    text-align: left;
}
</style>