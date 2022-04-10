<template>
  <div class="main-card">
    <div class="manager">
      <avatar-card></avatar-card>
      <avatar-card></avatar-card>
      <a-button class="btn-add">
        <template #icon><PlusOutlined class="icon-add" /></template>
      </a-button>
    </div>
    <div class="analytics-container">
      <div class="analytics-title">各个月份访问人数</div>
      <div class="analytics-chart-one">
        <a-popover
          :getPopupContainer="(triggerNode) => triggerNode.parentNode"
          placement="bottom"
          trigger="click"
        >
          <template #content>
            <div class="down">
              <p>2018</p>
              <p>2019</p>
            </div>
          </template>
          <div class="month-select">
            <span>2018</span>
            <svg-icon iconClass="down" class="down"></svg-icon>
          </div>
        </a-popover>
        <chart-view
          :chart-option="chartOption"
          :auto-resize="true"
          width="696px"
          height="279px"
        />
      </div>
    </div>
    <div class="performance-container">
      <div class="performance-title">网站基本数据</div>
      <div class="performance-card-container">
        <performance-card title="VIEWS" number="667,766"></performance-card>
        <performance-card title="USER" number="667,766"></performance-card>
        <performance-card title="IMAGES" number="667,766"></performance-card>
      </div>
    </div>
    <div class="goal-pie-chart">
      <div class="goal-pie">
        <goals-card></goals-card>
        <div class="pie-card-container">
          <pie-card></pie-card>
          <pie-card></pie-card>
        </div>
      </div>
      <div class="chart">
        <chart-view
          :chart-option="pieOption"
          :auto-resize="true"
          width="400px"
          height="383px"
        />
      </div>
    </div>
    <div class="pie-card-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, inject } from "vue";
import PerformanceCard from "@/components/dashboard/PerformanceCard.vue";
import AvatarCard from "@/components/dashboard/AvatarCard.vue";
import GoalsCard from "@/components/dashboard/GoalsCard.vue";
import PieCard from "@/components/dashboard/PieCard.vue";
import { PlusOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "MainArea",
  props: {},
  components: { PerformanceCard, AvatarCard, PlusOutlined, GoalsCard, PieCard },
  setup() {
    const eChartFn = inject("eChartFn") as any;
    const state = reactive({
      chartOption: {},
      pieOption: {},
    });
    state.chartOption = eChartFn().getLineOption();
    state.pieOption = eChartFn().getPieOption();
    return { ...toRefs(state) };
  },
});
</script>

<style scoped lang="less">
.title {
  font-size: 16px;
  font-weight: bolder;
}
.main-card {
  height: 920px;
  width: 696px;
  .manager {
    display: flex;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 54px);
    grid-gap: 24px 24px;
    .btn-add {
      width: 54px;
      height: 54px;
      background: #4f46ba;
      .icon-add {
        color: #fff;
      }
    }
  }
  .performance-container {
    width: 696px;
    height: 115px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .performance-title {
      .title();
    }
    .performance-card-container {
      display: flex;
      justify-content: space-between;
    }
  }
  .analytics-container {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 34px 68px rgba(13, 46, 97, 0.05);
    border-radius: 15px;
    margin-top: 36px;
    width: 696px;
    .analytics-title {
      padding: 20px 0 0 20px;
      .title();
    }
    .analytics-chart-one {
      position: relative;
      width: 696px;
      height: 279px;
      :deep(.ant-popover-inner) {
        width: 40px;
        padding: 0;
      }
      :deep(.ant-popover-inner-content) {
        padding: 0;
      }
      .down {
        p {
          margin-bottom: 0;
          text-align: center;
        }
      }
      .month-select {
        z-index: 1000;
        position: absolute;
        top: 18px;
        font-size: 12px;
        right: 64px;
      }
    }
  }
  .goal-pie-chart {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .goal-pie {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .pie-card-container {
        display: flex;
        justify-content: space-between;
      }
    }
    .chart {
      border-radius: 15px;
      background-color: #fff;
      box-shadow: 0px 34px 68px rgba(13, 46, 97, 0.05);
    }
  }
}
</style>
