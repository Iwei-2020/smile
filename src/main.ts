import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "@/less/theme.less";
import "@/utils/iconfont";
import service from "./utils/https";

const app = createApp(App);
app.config.globalProperties.$https = service;
app.use(router).use(store);
app.use(Antd);
app.mount("#app");
