<template>
  <module-title :iconName="iconName" :title="title"></module-title>
  <div class="library-container">
    <div class="wrapper">
      <source-card
        v-for="(library, index) in librarys"
        :isAuthor="false"
        :key="index"
        :library="library"
        :images="state.librarysImagesArray[index]"
        :author="state.authorArray[index]"
      ></source-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import SourceCard from "@/components/home/work/SourceCard.vue";
import ModuleTitle from "@/components/home/main/ModuleTitle.vue";

import service from "@/utils/https";
import urls from "@/utils/urls";

export default defineComponent({
  props: {
    librarys: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
  },
  components: { SourceCard, ModuleTitle },
  setup(props) {
    const state = reactive({
      librarysImagesArray: [],
      authorArray: [],
    });
    const { librarys }: any = toRefs(props);
    const lbIds = computed(() => {
      return librarys.value.map((library: any) => library.lbId);
    });
    const getImages = async (): Promise<void> => {
      console.log(39, "!!!!!");
      if (librarys.value.length > 0) {
        let formData = new FormData();
        lbIds.value.forEach((id: any) => {
          formData.append("lbIds", id);
        });
        formData.append("getAll", "false");
        state.librarysImagesArray = await service.post(urls.getImage, formData);
      }
    };
    const getAuthor = async (): Promise<void> => {
      if (librarys.value.length > 0) {
        let formData = new FormData();
        lbIds.value.forEach((id: any) => {
          formData.append("lbIds", id);
        });
        state.authorArray = await service.post(urls.getAuthor, formData);
        console.log(57, state.authorArray);
      }
    };
    watch(librarys, () => {
      getImages();
      getAuthor();
    });
    return { state };
  },
});
</script>

<style scoped lang="less">
.library-container {
  padding: 0 40px;
  width: 1560px;
  margin: 0 auto;
  box-sizing: content-box;
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(281px, 1fr));
    grid-gap: 45px 40px;
  }
}
</style>
