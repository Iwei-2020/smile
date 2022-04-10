<template>
  <div class="pie-card">
    <span class="number">19</span>
    <span class="title">new Image</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {},
  components: {},
});
</script>

<style scoped lang="less">
.pie-card {
  border-radius: 15px;
  width: 136px;
  height: 150px;
  background-image: url(../../assets/images/pie-card2.png);
  box-shadow: 0px 34px 68px rgba(13, 46, 97, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .number {
    font-size: 68px;
    color: rgba(213, 108, 43, 1);
  }
  .title {
    font-size: 12px;
    color: rgba(142, 155, 174, 1);
  }
}
</style>
