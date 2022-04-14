<template>
  <div class="message-card">
    <p class="time">2022/04/12 3:01</p>
    <div class="message-container" :style="messageStyle">
      <div :class="messageClass">
        <span>小刘, 今天的活干的怎么样了。完成了跟我报告好吗?</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "",
  props: {
    type: {
      type: String,
      default: "send",
    },
  },
  components: {},
  setup(props) {
    const state = reactive({
      isSend: props.type === "send",
    });
    const messageClass = computed(() => {
      return { "send-message": state.isSend, "receive-message": !state.isSend };
    });
    const messageStyle = computed(() => {
      return {
        display: "flex",
        justifyContent: state.isSend ? "flex-end" : "flex-start",
      };
    });
    return { ...toRefs(state), messageClass, messageStyle };
  },
});
</script>

<style scoped lang="less">
.message-card {
  .time {
    text-align: center;
    color: rgb(175, 188, 205);
  }
  .base-message {
    width: 260px;
    padding: 16px 12px;
  }
  .message-container {
    .send-message {
      .base-message();
      color: #fff;
      border-radius: 15px 0 15px 15px;
      background-color: rgb(130, 178, 154);
    }
    .receive-message {
      .base-message();
      color: rgb(233, 151, 23);
      background-color: rgb(255, 244, 226);
      border-radius: 0 15px 15px 15px;
    }
  }
}
</style>
