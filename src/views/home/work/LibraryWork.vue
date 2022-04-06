<template>
  <div class="library-work">
    <div class="grid-wrapper">
      <image-card
        v-for="(image, index) in state.images"
        :key="index"
        :image="image"
      ></image-card>
    </div>
    <a-empty v-if="state.images.length === 0" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import ImageCard from "@/components/home/work/ImageCard.vue";
import service from "@/utils/https";
import urls from "@/utils/urls";

export default defineComponent({
  props: ["id"],
  components: { ImageCard },
  setup(props) {
    const state = reactive({
      images: [],
    });
    const getImage = async (): Promise<void> => {
      state.images = await service.get(`${urls.getImage}/${props.id}`);
    };
    onMounted(getImage);
    return { state };
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
