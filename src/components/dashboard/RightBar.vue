<template>
  <div class="right-bar">
    <div class="ops-top">
      <div class="ops-container" style="margin-right: 24px">
        <svg-icon iconClass="notify" class="notify"></svg-icon>
      </div>
      <div class="ops-container">
        <svg-icon iconClass="quit" class="notify" @click="goHome"></svg-icon>
      </div>
    </div>
    <div class="new-card-container">
      <new-card style="margin-right: 36px" :index="0"></new-card>
      <new-card :index="1"></new-card>
    </div>
    <div class="income-card">
      <img src="../../assets/images/rocket.png" class="rocket" />
      <div>
        <span class="income">100$</span>
        <span class="sub">Increase in 24 Hours</span> <br />
        <span class="income">166,321$</span>
        <span class="sub">Total Income</span>
      </div>
    </div>
    <div class="chat-card">
      <div class="top">
        <span class="title">Chat</span>
        <div v-show="chating" class="right">
          <a-avatar :size="32"></a-avatar>
          <a-avatar :size="32" style="margin: 0 10px"></a-avatar>
          <svg-icon
            iconClass="close"
            class="close"
            @click="closeChating"
          ></svg-icon>
        </div>
      </div>
      <div class="message-area" v-show="chating">
        <message-card type="receive"></message-card>
        <message-card style="margin-top: 20px"></message-card>
        <message-card style="margin-top: 20px"></message-card>
      </div>
      <div class="chat-with-list" v-show="!chating">
        <chat-item
          v-for="(user, index) in userAdmin"
          :key="index"
          @changeChating="changeChating"
        ></chat-item>
      </div>
      <div class="message-sent" v-show="chating">
        <a-input class="message-input" v-model:value="messageSend">
          <template #prefix>
            <svg-icon iconClass="link" class="link base-icon"></svg-icon>
          </template>
          <template #suffix>
            <svg-icon iconClass="expression" class="expression"></svg-icon>
            <svg-icon iconClass="voice" class="expression voice"></svg-icon>
          </template>
        </a-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, onUnmounted } from "vue";
import NewCard from "@/components/dashboard/NewCard.vue";
import MessageCard from "@/components/dashboard/MessageCard.vue";
import SvgIcon from "../common/SvgIcon.vue";
import { useRouter } from "vue-router";
import ChatItem from "@/components/dashboard/ChatItem.vue";
import emitter from "@/utils/mybus";
export default defineComponent({
  name: "",
  props: {},
  components: { NewCard, SvgIcon, ChatItem, MessageCard },
  setup() {
    const router = useRouter();
    const state = reactive({
      chating: false,
      userAdmin: [],
      messageSend: "",
    });
    const goHome = () => {
      router.push("/");
    };
    const changeChating = () => {
      console.log(87);
      state.chating = true;
    };
    const closeChating = () => {
      state.chating = false;
    };
    const getUserAdmin = (data: any) => {
      state.userAdmin = data;
    };
    onMounted(() => {
      emitter.on("getUserAdmin", getUserAdmin);
    });
    onUnmounted(() => {
      emitter.off("getUserAdmin");
    });
    return { goHome, ...toRefs(state), changeChating, closeChating };
  },
});
</script>

<style scoped lang="less">
.right-bar {
  width: 400px;
  height: 990px;
  padding-top: 24px;
  .ops-top {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    .ops-container {
      height: 36px;
      width: 36px;
      border: 1px solid rgba(239, 238, 238, 1);
      box-shadow: 0px 1.85px 6.3px rgba(41, 72, 152, 0.01);
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .notify {
        height: 24px;
        width: 24px;
      }
    }
  }
  .new-card-container {
    display: flex;
    margin-top: 24px;
  }
  .income-card {
    margin-top: 48px;
    padding: 36px 0 0 36px;
    height: 166px;
    width: 400px;
    background-color: #e9fff7;
    border-radius: 25px;
    border: 1px solid pink;
    position: relative;
    .rocket {
      position: absolute;
      right: 36px;
      bottom: 0;
    }
    .income {
      font-size: 28px;
      color: rgba(16, 25, 45, 1);
      margin-right: 5px;
    }
    .sub {
      color: rgba(142, 155, 174, 1);
      font-weight: bolder;
      font-size: 12px;
    }
  }
  .chat-card {
    margin-top: 24px;
    height: 448px;
    width: 400px;
    background-color: #ffffff;
    border-radius: 15px;
    border: 1px solid rgb(253, 189, 100);
    padding: 12px 0 0 24px;
    .top {
      padding-right: 24px;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 18px;
        font-weight: bolder;
        line-height: 32px;
      }
      .right {
        display: flex;
        align-items: center;
        .close {
          height: 24px;
          width: 24px;
          opacity: 0.6;
          cursor: pointer;
        }
      }
    }
    .message-area {
      margin-top: 20px;
      height: 300px;
      padding-right: 24px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0px;
      }
    }
    .chat-with-list {
      margin-top: 20px;
      height: 350px;
      padding-right: 24px;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0px;
      }
    }
    .message-sent {
      margin-top: 16px;
      height: 45px;
      padding-right: 24px;
      .message-input {
        height: 45px;
        border-radius: 12px;
        padding: 6px 12px;
        color: rgb(79, 70, 186);
      }
      .link {
        height: 18px;
        width: 18px;
        margin-right: 8px;
        opacity: 0.6;
      }
      .expression {
        height: 24px;
        width: 24px;
        margin-right: 8px;
      }
      .voice {
        opacity: 0.6;
      }
    }
  }
}
</style>
