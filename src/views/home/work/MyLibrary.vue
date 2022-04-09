<template>
  <div class="home-card-container">
    <div class="grid-wrapper">
      <source-card
        v-for="(library, index) in state.libraryArray"
        :key="index"
        @goMyLibrary="goMyLibrary"
        :library="library"
        :images="state.imagesArray[index]"
        :isAuthor="true"
        :isLike="state.likeArray[index]"
        :isStar="state.starArray[index]"
      ></source-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import SourceCard from "@/components/home/work/SourceCard.vue";
import { useRouter } from "vue-router";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { useStore } from "vuex";
import { Library } from "@/interface/interface";
import emitter from "@/utils/mybus";

export default defineComponent({
  props: {},
  components: { SourceCard },
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      libraryArray: [],
      imagesArray: [],
      likeArray: [],
      starArray: [],
    });
    const goMyLibrary = (id: number) => {
      router.push(`/work/library/${id}`).then(() => {
        let index = state.libraryArray.findIndex(
          (library: any) => library.lbId === id
        );
        emitter.emit("getLibrary", state.libraryArray[index]);
      });
    };
    const getLibrary = async (): Promise<void> => {
      state.libraryArray = await service.get(
        `${urls.getLibrary}/${store.state.user.id}`
      );
      if (state.libraryArray.length === 0) {
        emitter.emit("changeShowLibrary", false);
      } else {
        emitter.emit("changeShowLibrary", true);
      }
    };
    const getImages = async (): Promise<void> => {
      const libraryIds = state.libraryArray.map(
        (library: Library) => library.lbId
      );
      let formData = new FormData();
      libraryIds.forEach((id: any) => {
        formData.append("lbIds", id);
      });
      formData.append("getAll", "false");
      formData.append("userId", store.getters.getUser.id);
      let { imagesArray, likeArray, starArray } = (await service.post(
        urls.getImage,
        formData
      )) as any;
      state.imagesArray = imagesArray;
      state.likeArray = likeArray;
      state.starArray = starArray;
    };
    const getImage = async (lbId: any): Promise<void> => {
      let index = state.libraryArray.findIndex(
        (library: Library) => library.lbId === lbId
      );
      state.imagesArray[index] = await service.get(`${urls.getImage}/${lbId}`);
    };
    onMounted(async (): Promise<void> => {
      await getLibrary();
      await getImages();
      emitter.on("updateLibrary", getImage);
      emitter.on("refreshLibrary", getLibrary);
    });
    onUnmounted(() => {
      emitter.off("updateLibrary");
      emitter.off("refreshLibrary");
    });
    return { goMyLibrary, state };
  },
});
</script>

<style scoped lang="less">
@base-width: 1160px;
.home-card-container {
  width: @base-width;
  margin: 0 auto;
  .grid-wrapper {
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
    margin-bottom: 20px;
    grid-gap: 45px 40px;
  }
}
</style>
