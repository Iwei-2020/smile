<template>
  <div class="goal-card">
    <div class="top">
      <svg-icon iconClass="goal" class="goal"></svg-icon>
      <span class="goal-text">manage goals</span>
    </div>
    <div class="goal-status">80.1k / 100k USER</div>
    <div class="goal-percentage">
      <span>goals</span>
      <span>80%</span>
    </div>
    <div class="progress">
      <a-progress :percent="80" :showInfo="false" strokeColor="#503094" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import SvgIcon from "../common/SvgIcon.vue";

export default defineComponent({
  name: "",
  props: {},
  components: { SvgIcon },
});
</script>

<style scoped lang="less">
.goal-card {
  height: 182px;
  width: 279px;
  background-color: #fdf2ff;
  padding: 20px 20px;
  border-radius: 25px;
  .top {
    display: flex;
    justify-content: space-between;
    .goal {
      height: 24px;
      width: 24px;
    }
    .goal-text {
      font-size: 12px;
      color: rgba(80, 48, 148, 1);
    }
  }
  .goal-status {
    margin-top: 20px;
    font-size: 18px;
    color: rgba(16, 25, 45, 0.4);
  }
  .goal-percentage {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-weight: bolder;
  }
}
</style>
