<template>
  <div class="icons-list">
    <icon-font type="icon-smile" class="logo" />
  </div>
</template>
<script>
import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3234326_8rjke70t2qq.js",
});
export default {
  components: {
    IconFont,
  },
};
</script>
<style scoped lang="less">
.icons-list {
  display: inline-block;
  :deep(.anticon) {
    font-size: 24px;
  }
  .logo {
    font-size: 40px;
  }
}
</style>
