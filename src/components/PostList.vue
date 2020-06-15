<template>
   <div class="container">
    <div class="posts">
            <PostElementComponent
                     v-for = 'post in posts'
                     :key = 'post.id'
                     :post = 'post'
                     />       
     </div>  
    </div>
</template>
<script>
import PostElementComponent from '@/components/PostListElement'

export default {
       created() {
            this.$store.dispatch('get_posts');
       },
       computed: {
           posts() {
               return this.$store.getters.posts;
           }
       },
        components: {
            PostElementComponent
        }
}
</script>
<style>
 .posts {
     display: grid;
     grid-template-columns: repeat(4,minmax(0,1fr));
     grid-column-gap: 24px;
     grid-row-gap: 16px;
 }
</style>