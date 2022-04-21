import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import "@/less/theme.less";
import "@/utils/iconfont";
import SvgIcon from "@/components/common/SvgIcon.vue";
import "@/assets/svg";
import eChartFn from "@/components/chart/index";
import ChartPanel from "@/components/chart/index.vue";
import "default-passive-events";

const app = createApp(App);
app.use(router).use(store);
app.use(Antd);
app.component("svg-icon", SvgIcon);
app.component(ChartPanel.name, ChartPanel);
app.provide("eChartFn", () => eChartFn);
app.mount("#app");
