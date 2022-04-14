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
    <div class="pie-card-container">
      <pie-card class="pie-card" style="margin-right: 36px"></pie-card>
      <pie-card class="pie-card"></pie-card>
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
        <div>
          <svg-icon iconClass="down" class="down"></svg-icon>
          <a-avatar :size="32" style="margin: 0 10px 0 10px"></a-avatar>
          <a-avatar :size="32" style="margin-right: 24px"></a-avatar>
        </div>
      </div>
      <div class="message-area">
        <message-card type="receive"></message-card>
        <message-card style="margin-top: 20px"></message-card>
        <message-card style="margin-top: 20px"></message-card>
      </div>
      <div class="message-sent">
        <a-input class="message-input" value="好了你明天不用来上班了">
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
import { defineComponent, reactive } from "vue";
import PieCard from "@/components/dashboard/PieCard.vue";
import MessageCard from "@/components/dashboard/MessageCard.vue";
import SvgIcon from "../common/SvgIcon.vue";
import { useRouter } from "vue-router";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { useStore } from "vuex";

export default defineComponent({
  name: "",
  props: {},
  components: { PieCard, MessageCard, SvgIcon },
  setup() {
    const router = useRouter();

    const state = reactive({});
    const goHome = () => {
      router.push("/");
    };

    return { goHome };
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
  .pie-card-container {
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
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 18px;
        font-weight: bolder;
        line-height: 32px;
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
