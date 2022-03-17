import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Dashboard from "@/views/DashBoard.vue";
import UserHome from "@/views/home/UserHome.vue";
import SourceMaterial from "@/views/home/SourceMaterial.vue";
import CommonHome from "@/views/home/CommonHome.vue";
import MyInformation from "@/views/home/userHome/MyInformation.vue";
import MyAvatar from "@/views/home/userHome/MyAvatar.vue";
import MySecurity from "@/views/home/userHome/MySecurity.vue";

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
          },
          {
            path: "my-avatar",
            component: () => MyAvatar,
          },
          {
            path: "my-security",
            component: () => MySecurity,
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

export default router;
