import { message } from "ant-design-vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/DashBoard.vue";
import UserHome from "@/views/home/UserHome.vue";
import SourceMaterial from "@/views/home/SourceMaterial.vue";
import CommonHome from "@/views/home/CommonHome.vue";
import MyInformation from "@/views/home/userHome/MyInformation.vue";
import MyAvatar from "@/views/home/userHome/MyAvatar.vue";
import MySecurity from "@/views/home/userHome/MySecurity.vue";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => Home,
    children: [
      {
        path: "/",
        component: () => CommonHome,
      },
      {
        path: "user-home",
        component: () => UserHome,
        children: [
          {
            path: "my-information",
            component: () => MyInformation,
            meta: { requiresAuth: true },
          },
          {
            path: "my-avatar",
            component: () => MyAvatar,
            meta: { requiresAuth: true },
          },
          {
            path: "my-security",
            component: () => MySecurity,
            meta: { requiresAuth: true },
          },
        ],
      },
      {
        path: "/source",
        component: () => SourceMaterial,
      },
    ],
  },
  {
    path: "/dashboard",
    component: () => Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  // 而不是去检查每条路由记录
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    const token = localStorage.getItem("token");
    if (token) {
      next();
      if (!store.state.user.id) {
        store.dispatch("getUser");
      }
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
