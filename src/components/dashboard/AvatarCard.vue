<template>
  <div class="avatar-card">
    <a-avatar shape="square" :size="54"></a-avatar>
    <p class="name">passion</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "",
  props: {},
  components: {},
});
</script>

<style scoped lang="less">
.avatar-card {
  width: 54px;
  height: 74px;
  text-align: center;
  .name {
    color: rgba(112, 122, 137, 1);
    font-size: 10px;
    word-break: break-all;
  }
}
</style>
