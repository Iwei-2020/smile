<template>
  <div class="home-carousel">
    <a-carousel autoplay>
      <a-image
        v-for="(item, index) in state.carousel"
        :key="index"
        :src="state.carousel1"
      ></a-image>
    </a-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import carousel1 from "@/assets/images/carousel/carousel-2.png";

export default defineComponent({
  name: "TopBar",
  components: {},
  setup() {
    const state = reactive({
      carousel: ["carousel-1", "carousel-2", "carousel-3", "carousel-4"],
      carousel1,
    });
    return { state };
  },
});
</script>

<style scoped lang="less">
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  width: 257px;
  height: 465px;
  overflow: hidden;
}
</style>
