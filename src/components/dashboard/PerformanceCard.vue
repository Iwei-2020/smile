<template>
  <div class="performance-card">
    <span class="key">{{ title }}</span>
    <span class="number">{{ number }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
  },
  components: {},
});
</script>

<style scoped lang="less">
.performance-card {
  width: 210px;
  height: 75px;
  background-image: url(../../assets/images/performance-bg1.png);
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
