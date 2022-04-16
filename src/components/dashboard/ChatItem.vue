<template>
  <div class="chat-item">
    <div class="left">
      <a-avatar :size="40" class="avatar"></a-avatar>
      <div class="info">
        <span class="title">passion </span>
        <span class="sub">18379995325</span>
      </div>
    </div>
    <svg-icon iconClass="chat" class="chat" @click="changeChating"></svg-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import SvgIcon from "../common/SvgIcon.vue";

export default defineComponent({
  name: "",
  props: {},
  components: { SvgIcon },
  emits: ["changeChating"],
  setup(props, context) {
    const state = reactive({});
    const changeChating = () => {
      console.log(26);
      context.emit("changeChating");
    };
    return { ...toRefs(state), changeChating };
  },
});
</script>

<style scoped lang="less">
.chat-item {
  width: 100%;
  height: 80px;
  padding: 20px 20px;
  box-shadow: 0px 34px 68px rgba(13, 46, 97, 0.05);
  border-radius: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .avatar {
      border-radius: 10px;
    }
    .info {
      height: 40px;
      margin-left: 16px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .title {
        font-size: 14px;
        line-height: 20px;
      }
      .sub {
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
  .chat {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
</style>
