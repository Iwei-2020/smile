<template>
  <div class="library-info">
    <div class="library-name">{{ state.library.lbName }}</div>
    <div class="library-sub-info">
      <span>数量: {{ state.library.lbCount }}</span>
      <span>创建者: {{ state.library.lbCreator }}</span>
      <span>简介: {{ state.library.lbDescription }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import emitter from "@/utils/mybus";

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      library: {
        lbId: undefined,
        lbName: "",
        lbCreator: "",
        lbType: undefined,
        lbDescription: "",
        lbLike: undefined,
        lbWatch: undefined,
        lbCount: undefined,
        lbCreated: "",
      },
    });
    const getLibrary = (library: any) => {
      state.library = library;
    };
    emitter.on("getLibrary", getLibrary);
    return { state };
  },
});
</script>

<style scoped lang="less">
.library-info {
  padding-left: 20px;
  height: 130px;
  width: 854px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .library-name {
    font-size: 22px;
    line-height: 22px;
  }
  .library-sub-info {
    font-size: 13px;
    color: rgb(166, 165, 173);
    height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span {
      line-height: 22px;
    }
  }
}
</style>
