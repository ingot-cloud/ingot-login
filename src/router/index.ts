import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/oauth2/challenge",
      component: () => import("@/pages/oauth2/challenge/IndexPage.vue"),
    },
  ],
});

export default router;
