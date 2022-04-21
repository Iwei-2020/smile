<template>
  <div class="chat-item">
    <div class="container">
      <div class="left">
        <a-avatar :size="40" class="avatar" :src="user.avatarUrl"></a-avatar>
        <div class="info">
          <span class="title">{{ user.username }}</span>
          <span class="sub">{{ user.phone }}</span>
        </div>
      </div>
      <svg-icon iconClass="chat" class="chat" @click="changeChating"></svg-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import SvgIcon from "../common/SvgIcon.vue";

export default defineComponent({
  name: "",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: { SvgIcon },
  emits: ["changeChating"],
  setup(props, context) {
    const state = reactive({});
    const changeChating = () => {
      context.emit("changeChating", props.user);
    };
    return { ...toRefs(state), changeChating };
  },
});
</script>

<style scoped lang="less">
.chat-item {
  width: 100%;
  height: 80px;
  padding: 0 20px;
  .container {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d8dadc;
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
          color: #8c8da9;
        }
      }
    }
    .chat {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
}
</style>
