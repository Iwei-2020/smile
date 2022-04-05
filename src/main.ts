import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "@/less/theme.less";
import "@/utils/iconfont";
import SvgIcon from "@/components/common/SvgIcon.vue";
import "@/assets/svg";

const app = createApp(App);
app.use(router).use(store);
app.use(Antd);
app.component("svg-icon", SvgIcon);
app.mount("#app");
