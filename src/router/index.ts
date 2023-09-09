import { createRouter, createWebHistory } from "vue-router";
import { hasNullParameter } from "@/utils/requiredParameters";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/oauth2/challenge",
    },
    {
      path: "/oauth2/challenge",
      beforeEnter: (to) => {
        const query = to.query;
        const nullKey = hasNullParameter(query);
        if (nullKey) {
          return {
            path: "/errors",
            query: {
              errorMsg: `参数无效：${nullKey} is blank`,
              redirect_uri: query.redirect_uri,
            },
          };
        }
        return true;
      },
      component: () => import("@/pages/oauth2/challenge/IndexPage.vue"),
    },
    {
      path: "/errors",
      component: () => import("@/pages/errors/IndexPage.vue"),
    },
  ],
});

export default router;
