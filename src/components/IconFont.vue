<template>
  <div class="icons-list">
    <icon-font type="icon-smile" />
    <icon-font type="icon-facebook" />
    <icon-font type="icon-twitter" />
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
<style scoped>
.icons-list :deep(.anticon) {
  font-size: 24px;
}
</style>
