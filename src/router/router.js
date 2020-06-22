import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../components/auth/Register.vue";
import Login from "../components/auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { 
      guest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { 
      guest: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
