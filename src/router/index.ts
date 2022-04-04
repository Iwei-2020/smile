import { message } from "ant-design-vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/home/HomeMain.vue"),
      },
      {
        path: "user",
        component: () => import("@/views/home/HomeUser.vue"),
        children: [
          {
            path: "info",
            component: () => import("@/views/home/user/MyInformation.vue"),
            meta: { requiresAuth: true, current: "info" },
          },
          {
            path: "avatar",
            component: () => import("@/views/home/user/MyAvatar.vue"),
            meta: { requiresAuth: true, current: "avatar" },
          },
          {
            path: "security",
            component: () => import("@/views/home/user/MySecurity.vue"),
            meta: { requiresAuth: true, current: "security" },
          },
        ],
      },
      {
        path: "source",
        component: () => import("@/views/home/HomeSource.vue"),
      },
      {
        path: "work",
        component: () => import("@/views/home/HomeWork.vue"),
        children: [
          {
            path: "",
            component: () => import("@/views/home/work/MyLibrary.vue"),
            meta: { requiresAuth: true },
          },
          {
            path: "library/:id",
            component: () => import("@/views/home/work/LibraryWork.vue"),
            meta: { requiresAuth: true },
            props: true,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => import("@/views/DashBoard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(async (to, from, next) => {
  // 而不是去检查每条路由记录
  // to.matched.some(record => record.meta.requiresAuth)
  const token = localStorage.getItem("token");

  if (token) {
    await store.dispatch("getUser");
  }
  if (to.meta.requiresAuth) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    if (store.state.user.id) {
      next();
      return;
    }
    message.error("还未登录，请先登录!");
    next({
      path: "/",
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
