import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/reactivity",
      name: "reactivity",
      component: () => import("../views/Reactivity.vue"),
    },
    {
      path: "/computed",
      name: "computed",
      component: () => import("../views/Computed.vue"),
    },
    {
      path: "/composables",
      name: "composables",
      component: () => import("../views/Composables.vue"),
    },
    {
      path: "/watchers",
      name: "watchers",
      component: () => import("../views/Watchers.vue"),
    },
    {
      path: "/forms",
      name: "forms",
      component: () => import("../views/Forms.vue"),
    },
    {
      path: "/vuelidate",
      name: "vuelidate",
      component: () => import("../views/Vuelidate.vue"),
    },
  ],
});

export default router;
