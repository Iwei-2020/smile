import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
import "@/assets/iconfont/iconfont";

const app = createApp(App);
app.use(router).use(store);
app.use(Antd);
app.mount("#app");
