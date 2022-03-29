import { message } from "ant-design-vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/DashBoard.vue";
import HomeUser from "@/views/home/HomeUser.vue";
import HomeWork from "@/views/home/HomeWork.vue";
import HomeSource from "@/views/home/HomeSource.vue";
import CommonHome from "@/views/home/HomeMain.vue";
import MyInformation from "@/views/home/user/MyInformation.vue";
import MyAvatar from "@/views/home/user/MyAvatar.vue";
import MySecurity from "@/views/home/user/MySecurity.vue";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    component: () => Home,
    children: [
      {
        path: "",
        component: () => CommonHome,
      },
      {
        path: "/user",
        component: () => HomeUser,
        children: [
          {
            path: "info",
            component: () => MyInformation,
            meta: { requiresAuth: true, current: "info" },
          },
          {
            path: "avatar",
            component: () => MyAvatar,
            meta: { requiresAuth: true, current: "avatar" },
          },
          {
            path: "security",
            component: () => MySecurity,
            meta: { requiresAuth: true, current: "security" },
          },
        ],
      },
      {
        path: "source",
        component: () => HomeSource,
      },
      {
        path: "work",
        component: () => HomeWork,
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
