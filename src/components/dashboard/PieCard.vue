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
  width: 181px;
  height: 187px;
  background-image: url(../../assets/images/pie-card2.png);
  background-color: rgb(241, 249, 255);
  border: 1px solid rgb(255, 247, 226);
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
