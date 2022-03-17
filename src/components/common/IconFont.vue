<template>
  <div class="icons-list">
    <icon-font :type="iconName" class="logo" />
  </div>
</template>
<script>
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3234326_wq29g6m5in.js",
});
export default defineComponent({
  name: "SourceMaterial",
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
  components: { IconFont },
});
</script>
<style scoped lang="less">
.icons-list {
  display: inline-block;
}
</style>
