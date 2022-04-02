<template>
  <div class="home-card-container">
    <div class="grid-wrapper">
      <source-card
        v-for="(library, index) in state.libraryArray"
        :key="index"
        @goMyLibrary="goMyLibrary"
        :library="library"
      ></source-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import SourceCard from "@/components/home/work/SourceCard.vue";
import { useRouter } from "vue-router";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { useStore } from "vuex";

export default defineComponent({
  props: {},
  components: { SourceCard },
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      libraryArray: [],
    });
    const goMyLibrary = (id: number) => {
      router.push(`/work/library/${id}`);
    };
    const getLibrary = async (): Promise<void> => {
      state.libraryArray = await service.get(
        `${urls.getLibrary}/${store.state.user.id}`
      );
    };
    onMounted(getLibrary);
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
