<template>
    <div class="comments">
        <div class="comments-title">Комментарии</div>
        <div class="comment" 
                            v-for = "comment in comments"
                            :key = "comment.id"
                            >
            <div class="comment-name">{{ comment.name }}</div>
            <div class="comment-body">{{ comment.body }}</div>
            <div class="comment-email">{{ comment.email}}</div>
        </div>    
    </div>    
</template>

<script>
export default {
    created(){
        this.$store.dispatch('get_comments',this.$route.params.id); 
    },
    computed: {
        comments() {
            return this.$store.getters.comments;
        }
    }
}
</script>

<style>
.comment {
    padding: 16px;
    box-shadow: inset 0px 0px 1px 0px #e85858;
    text-align: left;
}
 .comments-title {
    font-size: 28px;
    padding: 16px;
    background: #e85858;
    color: white;
 }
 .comment-email {
    display: flex;
    justify-content: flex-end;
    padding: 12px 0 0 0;
    font-size: 12px;
 }
 .comment-name {
    font-size: 16px;
    margin: -16px -16px 12px -16px;
    font-weight: bold;
    background: #333333;
    color: white;
    padding: 16px;
 }
 .comment-body {
     font-size: 14px;
 }
</style>