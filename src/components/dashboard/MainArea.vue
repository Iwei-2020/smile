<template>
  <div>
    <a-card class="main-card" title="userName">
      <template #extra>
        <a-avatar :src="state.a2"></a-avatar>
      </template>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-card class="card-common" style="height: 400px" id="chart"></a-card>
        </a-col>
        <a-col :span="12">
          <a-card></a-card>
        </a-col>
      </a-row>
      <a-row :gutter="16" style="margin-top: 20px">
        <a-col :span="6">
          <a-card></a-card>
        </a-col>
        <a-col :span="6">
          <a-card></a-card>
        </a-col>
        <a-col :span="6">
          <a-card></a-card>
        </a-col>
        <a-col :span="6">
          <a-card></a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  name: "MainArea",
  props: {},
  components: {},
  setup() {
    onMounted(() => {
      //需要获取到element,所以是onMounted的Hook
      let myChart = echarts.init(
        document.getElementById("chart") as HTMLElement
      );
      // 绘制图表
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      window.onresize = function () {
        //自适应大小
        myChart.resize();
      };
    });
    const state = reactive({});
    return { state };
  },
});
</script>

<style scoped lang="less">
.main-card {
  background: #000;
  :deep(.ant-card-head) {
    color: #fff;
    border: none;
  }
  .ant-card {
    height: 200px;
    background: #3e4142;
    border: none;
  }
}
</style>
