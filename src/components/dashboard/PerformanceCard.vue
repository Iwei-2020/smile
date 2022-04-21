<template>
  <div class="performance-card" :style="performanceStyle">
    <span class="key">{{ title }}</span>
    <span class="number">{{ number }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";

export default defineComponent({
  name: "",
  props: {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  setup(props) {
    const state = reactive({
      bgImageArray: [
        require("@/assets/images/performance-bg1.png"),
        require("@/assets/images/performance-bg2.png"),
        require("@/assets/images/performance-bg3.png"),
      ],
    });
    const performanceStyle = computed(() => {
      return {
        backgroundImage: `url(${state.bgImageArray[props.index]})`,
      };
    });
    return { performanceStyle };
  },
});
</script>

<style scoped lang="less">
.performance-card {
  width: 210px;
  height: 75px;
  background-color: #4f46ba;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 0 0 30px;
  .key {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
  .number {
    color: rgb(255, 255, 255);
  }
}
</style>
