<template>
  <div class="icon">
    <icon-font :type="iconName" />
  </div>
</template>
<script>
import { createFromIconfontCN } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_3234326_in2rpv9fdrm.js",
});
export default defineComponent({
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
.icon {
  display: inline-block;
}
</style>
