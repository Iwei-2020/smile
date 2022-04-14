<template>
  <div class="main-card">
    <div class="manager">
      <div class="avatar-container">
        <avatar-card></avatar-card>
        <avatar-card></avatar-card>
        <avatar-card></avatar-card>
        <avatar-card></avatar-card>
        <avatar-card></avatar-card>
        <avatar-card></avatar-card>
        <avatar-card></avatar-card>
        <avatar-card></avatar-card>
      </div>
    </div>
    <div class="performance-container">
      <div class="performance-title">Basic Data</div>
      <div class="performance-card-container">
        <performance-card
          title="USER"
          :number="baseData.userCount"
          :index="0"
        ></performance-card>
        <performance-card
          title="Library"
          :number="baseData.libraryCount"
          :index="1"
        ></performance-card>
        <performance-card
          title="IMAGES"
          :number="baseData.imageCount"
          :index="2"
        ></performance-card>
      </div>
    </div>
    <div class="analytics-container">
      <div class="analytics-title">Views Line</div>
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
    <div class="goal-pie-chart">
      <div class="goal-pie">
        <goals-card></goals-card>
        <!-- <div class="pie-card-container">
          <pie-card></pie-card>
          <pie-card></pie-card>
        </div> -->
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
import { defineComponent, reactive, toRefs, inject, onMounted } from "vue";
import PerformanceCard from "@/components/dashboard/PerformanceCard.vue";
import GoalsCard from "@/components/dashboard/GoalsCard.vue";
import AvatarCard from "@/components/dashboard/AvatarCard.vue";
import service from "@/utils/https";
import { useStore } from "vuex";
import urls from "@/utils/urls";
export default defineComponent({
  name: "MainArea",
  props: {},
  components: { PerformanceCard, GoalsCard, AvatarCard },
  setup() {
    const eChartFn = inject("eChartFn") as any;
    const store = useStore();
    const state = reactive({
      chartOption: {},
      pieOption: {},
      baseData: {
        libraryCount: undefined,
        imageCount: undefined,
        userCount: undefined,
      },
    });
    state.chartOption = eChartFn().getLineOption();
    state.pieOption = eChartFn().getPieOption();
    const getBaseData = async (): Promise<void> => {
      state.baseData = await service.get(
        `${urls.getBaseData}/${store.getters.getUser.id}`
      );
    };
    onMounted(getBaseData);
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
    margin-top: 24px;
    .avatar-container {
      width: 696px;
      display: grid;
      grid-template-columns: repeat(auto-fill, 54px);
      grid-gap: 24px 24px;
    }
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
    margin-top: 24px;
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
    margin-top: 24px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 34px 68px rgba(13, 46, 97, 0.05);
    width: 696px;
    .analytics-title {
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
    margin-top: 24px;
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
