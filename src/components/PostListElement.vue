<template>
    <router-link :to="{ path: `post/${post.id}` }" class="element-post">
        <div class="element-post__title">{{ post.title }}</div>
        <div class="element-post__body">{{ post.body }}</div>
        <div class="element-post__hover-background"><span>Прочитать пост</span></div>
    </router-link>
</template>
<script>
export default {
       props: {
           post:Object
       }
}
</script>
<style>
    .element-post {
        position: relative;
        padding: 0 16px 16px 16px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow: 0px 0px 4px 1px #797979;
        background-color:white;
        border-radius: 4px;
        transition: .3s ease-in;
    }
    .element-post:hover {
        transform: scale(1.02);
    }
    .element-post__title {
        padding: 16px 8px 12px 8px;
        margin: 0 -16px;
        background: #1a94ff;
        color: white;
        font-size: 18px;
        height: 45px;
        overflow: hidden;
        text-align: left;
    }
    .element-post__body {
        padding: 16px 0;
        text-align: left;
    }
    .element-post__hover-background {
        display: flex;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #e0e0e0bf;
        opacity: 0;
        transition: .2s ease-in;
        justify-content: center;
        align-items: center;
    }
    .element-post:hover .element-post__hover-background {
        opacity: 1;
     }
    .element-post__hover-background span {
        display: flex;
        width: 100%;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        background: #e85858;
        color: white;
        align-self: start;
        height: 45px;
        padding: 16px;
        align-items: center;
    }   
</style>