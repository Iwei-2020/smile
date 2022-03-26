<template>
  <a-row class="source-material">
    <a-col :span="16" style="margin: 0 auto">
      <a-card class="card-main">
        <div class="icon-area">
          <div
            v-for="(item, index) in state.iconList"
            :key="index"
            class="icon-wrapper"
          >
            <icon-font :iconName="item.iconName"></icon-font>
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="works-card-div">
          <works-card></works-card>
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import IconFont from "@/components/common/IconFont.vue";
import WorksCard from "@/components/home/source/WorksCard.vue";

export default defineComponent({
  name: "SourceLibrary",
  props: {},
  components: { IconFont, WorksCard },
  setup() {
    const state = reactive({
      iconList: [
        { title: "热门精选", iconName: "icon-remen" },
        { title: "优秀作者", iconName: "icon-good" },
        { title: "其他暂定", iconName: "icon-biaoqingbao" },
      ],
    });
    return { state };
  },
});
</script>

<style scoped lang="less">
.source-material {
  .card-main {
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    min-height: 500px;
    .icon-area {
      padding: 0 20%;
      display: flex;
      justify-content: space-around;
      .icon-wrapper {
        :deep(.anticon) {
          font-size: 64px;
        }
      }
    }
    .works-card-div {
      display: flex;
    }
  }
}
</style>
