<template>
  <a-row class="home-introduction" type="flex" justify="space-between">
    <a-col :span="10" class="introduction">
      <h1 class="headline">表情包！包你畅快</h1>
      <p class="subline">
        Smile网站集合了各式各样丰富的表情包 <br />
        让你能在日常交流之中快速缓解尴尬&乐在其中
      </p>
    </a-col>
    <a-col :span="8" class="image">
      <icon-font iconName="icon--smile" class="icon"></icon-font>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconFont from "@/components/common/IconFont.vue";

export default defineComponent({
  name: "HomeIntroduction",
  props: {},
  components: { IconFont },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-introduction {
  background-color: #e9ecff;
  padding: 0 10vw;
  height: 60vh;
  .introduction {
    .headline {
      font-size: 48px;
      font-weight: 800;
      line-height: 56px;
    }
    .subline {
      font-size: 16px;
      font-weight: bolder;
    }
    .flex-column();
  }
  .image {
    .icon {
      font-size: 200px;
    }
    .flex-column();
  }
}
</style>
