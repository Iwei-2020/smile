<template>
  <module-title :iconName="iconName" :title="title"></module-title>
  <div class="library-container">
    <div class="wrapper">
      <source-card
        v-for="(library, index) in libraryImageVos"
        :isAuthor="false"
        :key="`home` + index"
        :library="library"
        :images="imagesArray[index]"
        :author="authorArray[index]"
        :isLike="likeArray[index]"
        :isStar="starArray[index]"
        @goMyLibrary="goMyLibrary"
        @changeLikeOrStar="changeLikeOrStar"
      ></source-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, reactive, toRefs, watch } from "vue";
import SourceCard from "@/components/home/work/SourceCard.vue";
import ModuleTitle from "@/components/home/main/ModuleTitle.vue";
import service from "@/utils/https";
import urls from "@/utils/urls";
import emitter from "@/utils/mybus";
import { useRouter } from "vue-router";
import { Library } from "@/interface/interface";

export default defineComponent({
  props: {
    libraryImageVos: {
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
      imagesArray: [] as any,
      authorArray: [] as any,
      likeArray: [] as any,
      starArray: [] as any,
    });
    const { libraryImageVos }: any = toRefs(props);
    const router = useRouter();
    const goMyLibrary = (id: number) => {
      router.push(`/work/library/${id}`).then(() => {
        let index = libraryImageVos.value.findIndex(
          (library: any) => library.lbId === id
        );
        emitter.emit("getLibrary", libraryImageVos.value[index]);
        watchPlus(id);
      });
    };
    const watchPlus = async (lbId: number): Promise<void> => {
      let formData = new FormData();
      formData.append("lbId", lbId + "");
      service.post(urls.watchLibrary, formData);
    };
    const changeLikeOrStar = (data: any) => {
      let index = libraryImageVos.value.findIndex(
        (library: Library) => library.lbId === data.lbId
      );
      if (data.type === "star") {
        state.starArray[index] = !state.starArray[index];
      } else if (data.type === "like") {
        state.likeArray[index] = !state.likeArray[index];
      }
    };
    watch(libraryImageVos, () => {
      nextTick(() => {
        libraryImageVos.value.forEach((libraryImageVo: any) => {
          state.imagesArray.push(libraryImageVo.images);
          state.authorArray.push(libraryImageVo.author);
          state.likeArray.push(libraryImageVo.isLike);
          state.starArray.push(libraryImageVo.isStar);
        });
      });
    });
    return { goMyLibrary, changeLikeOrStar, ...toRefs(state) };
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
