<template>
  <div class="chart">
    <div ref="root" :style="{ height: height, width: width }" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  toRefs,
  watch,
} from "vue";
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart, PieChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  AxisPointerComponent,
  ToolboxComponent,
  LegendComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
  AxisPointerComponent,
  ToolboxComponent,
  LegendComponent,
  PieChart,
]);

export default defineComponent({
  name: "ChartView",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "350px",
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    chartOption: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "canvas",
    },
  },
  emits: ["click"],
  components: {},
  setup(props, context) {
    const root = ref(null) as any;
    const { chartOption, type, autoResize } = toRefs(props);
    const state = reactive({
      chart: null as any,
    });
    const initChart = () => {
      state.chart = echarts.init(root.value, "", {
        renderer: type.value as "svg" | "canvas",
      });
      state.chart.setOption(chartOption.value);
      const handleClick = (params: any) => {
        context.emit("click", params);
      };
      state.chart.on("click", handleClick);
    };
    const resizeChart = () => {
      state.chart.resize();
    };
    const setOptions = (option: any) => {
      clearChart();
      resizeChart();
      state.chart && state.chart.setOption(option);
    };
    const refresh = () => {
      setOptions(chartOption.value);
    };
    const clearChart = () => {
      state.chart && state.chart.clear();
    };
    watch(
      chartOption,
      (newValue) => {
        setOptions(newValue);
      },
      { deep: true }
    );
    onMounted(() => {
      initChart();
      if (autoResize.value) {
        window.addEventListener("resize", resizeChart);
      }
    });
    onUnmounted(() => {
      if (!state.chart) {
        return;
      }
      if (autoResize.value) {
        window.removeEventListener("resize", resizeChart);
      }
      state.chart.dispose();
      state.chart = null;
    });
    return { root };
  },
});
</script>
