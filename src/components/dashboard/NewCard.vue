<template>
  <div class="new-card" :style="newCardStyle">
    <span class="number">19</span>
    <span class="title">new Image</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
export default defineComponent({
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  setup(props) {
    const state = reactive({
      bgImageArray: [
        require("@/assets/images/new-card1.png"),
        require("@/assets/images/new-card2.png"),
      ],
      color: ["#d56c2b", "#10192d"],
    });
    const newCardStyle = computed(() => {
      return {
        backgroundImage: `url(${state.bgImageArray[props.index]})`,
        color: state.color[props.index],
      };
    });
    return { newCardStyle };
  },
});
</script>

<style scoped lang="less">
.new-card {
  border-radius: 15px;
  width: 181px;
  height: 187px;
  background-color: rgb(241, 249, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .number {
    font-size: 68px;
  }
  .title {
    font-size: 12px;
    color: rgba(142, 155, 174, 1);
  }
}
</style>
