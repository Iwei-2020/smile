<template>
  <div>
    <a-button type="primary" shape="circle" style="width: 64px; height: 64px">
      更换头像
    </a-button>
    <a-avatar :size="64" :src="state.avatar"></a-avatar>
    <a-button type="primary" shape="circle" style="width: 64px; height: 64px">
      添加挂件
    </a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import avatar from "@/assets/images/avatar/a1.png";

export default defineComponent({
  name: "MyAvatar",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      avatar,
    });
    return { state };
  },
});
</script>

<style scoped lang="less"></style>
