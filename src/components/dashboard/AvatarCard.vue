<template>
  <div class="avatar-card">
    <a-avatar shape="square" :size="38" class="avatar"></a-avatar>
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
  width: 50px;
  height: 50px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    border-radius: 13px;
  }
}
</style>
