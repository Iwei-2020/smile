<template>
  <div class="library-work">
    <div class="grid-wrapper">
      <image-card></image-card>
      <image-card></image-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageCard from "@/components/home/work/ImageCard.vue";

export default defineComponent({
  props: ["id"],
  components: { ImageCard },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.library-work {
  width: 1160px;
  margin: 0 auto;
  padding-top: 50px;
  .grid-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(auto, 254px));
    gap: 36px 40px;
  }
}
</style>
