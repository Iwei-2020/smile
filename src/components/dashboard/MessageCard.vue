<template>
  <div class="message-card">
    <p class="time">{{ chatTime }}</p>
    <div class="message-container" :style="messageStyle">
      <div :class="messageClass">
        <span>{{ msg.content }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import moment from "moment";
export default defineComponent({
  name: "",
  props: {
    type: {
      type: String,
      default: "send",
    },
    message: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup(props) {
    let { message }: any = toRefs(props);
    const state = reactive({
      isSend: props.type === "send",
      msg: props.message as any,
    });
    const chatTime = computed(() => {
      let format = "YYYY-MM-DD HH:mm:ss";
      let { chatTime, chatInterval } = message.value;
      if (chatInterval < 5 && chatInterval != -1) {
        return null;
      }
      let timeStr = moment(chatTime, format).format(format);
      let split = timeStr.split(" ");
      const now = moment().format("YYYY-MM-DD");
      return split[0] === now ? split[1] : timeStr;
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
    watch(message, (newValue) => {
      state.msg = newValue;
    });
    return { ...toRefs(state), messageClass, messageStyle, chatTime };
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
    max-width: 260px;
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
