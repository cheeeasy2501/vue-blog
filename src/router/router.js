import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import Auth from "../views/Auth.vue";

Vue.use(VueRouter);

import guard from "./guard";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
    },
  },
  {
    path: "/post/:id",
    name: "Post",
    component: () => import("../views/Post.vue"),
    meta: {
      auth: true,
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
    meta: {
      auth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("jwt");
  const requiredAuth = to.matched.some((record) => record.meta.auth);
  const tokenGuard = await guard.checkToken(token).then((response) => response);
  const authorized = guard.isAuthorized();

  if (requiredAuth && tokenGuard && authorized) {
    next();
  } else if (!requiredAuth) {
    next();
  } else {
    next({ path: "/auth" });
  }
});

export default router;
