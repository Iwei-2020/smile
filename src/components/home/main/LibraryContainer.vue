<template>
  <module-title :iconName="iconName" :title="title"></module-title>
  <div class="library-container">
    <div class="wrapper">
      <source-card
        v-for="(library, index) in librarys"
        :isAuthor="false"
        :key="`home` + index"
        :library="library"
        :images="state.imagesArray[index]"
        :author="state.authorArray[index]"
        :isLike="state.likeArray[index]"
        :isStar="state.starArray[index]"
        @goMyLibrary="goMyLibrary"
        @changeLikeOrStar="changeLikeOrStar"
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
import emitter from "@/utils/mybus";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Library } from "@/interface/interface";

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
      imagesArray: [],
      authorArray: [],
      likeArray: [] as any,
      starArray: [] as any,
    });
    const { librarys }: any = toRefs(props);
    const router = useRouter();
    const store = useStore();
    const lbIds = computed(() => {
      return librarys.value.map((library: any) => library.lbId);
    });
    const getImages = async (): Promise<void> => {
      if (librarys.value.length > 0) {
        let formData = new FormData();
        lbIds.value.forEach((id: any) => {
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
    const goMyLibrary = (id: number) => {
      router.push(`/work/library/${id}`).then(() => {
        let index = librarys.value.findIndex(
          (library: any) => library.lbId === id
        );
        emitter.emit("getLibrary", librarys.value[index]);
        watchPlus(id);
      });
    };
    const watchPlus = async (lbId: number): Promise<void> => {
      let formData = new FormData();
      formData.append("lbId", lbId + "");
      service.post(urls.watchLibrary, formData);
    };
    const changeLikeOrStar = (data: any) => {
      let index = librarys.value.findIndex(
        (library: Library) => library.lbId === data.lbId
      );
      if (data.type === "star") {
        state.starArray[index] = !state.starArray[index];
      } else if (data.type === "like") {
        state.likeArray[index] = !state.likeArray[index];
      }
    };
    watch(librarys, () => {
      getImages();
      getAuthor();
    });
    return { state, goMyLibrary, changeLikeOrStar };
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
