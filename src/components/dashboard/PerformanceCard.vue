<template>
  <div
    class="performance-card"
    :style="{
      'background-image': `url(${bgImageArray[index]})`,
    }"
  >
    <span class="key">{{ title }}</span>
    <span class="number">{{ number }}</span>
  </div>
</template>

<script lang="ts">
import { number } from "echarts/core";
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "",
  props: {
    title: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
    },
  },
  components: {},
  setup() {
    const state = reactive({
      bgImageArray: [] as string[],
    });
    for (let index = 1; index < 4; index++) {
      state.bgImageArray.push(
        require(`@/assets/images/performance-bg${index}.png`)
      );
    }
    return { ...toRefs(state) };
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
