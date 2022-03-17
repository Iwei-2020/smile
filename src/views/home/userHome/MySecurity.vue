<template>
  <div class="my-security">
    <a-row v-for="(item, index) in state.securityList" :key="index">
      <a-col :span="8">
        <check-outlined style="color: green" /> {{ item.topic1 }}
      </a-col>
      <a-col :span="8">{{ item.value }}</a-col>
      <a-col :span="8">
        <a-button type="text" style="color: pink">{{ item.topic2 }}</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { CheckOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "MySecurity",
  props: {},
  components: { CheckOutlined },
  setup() {
    const state = reactive({
      securityList: [
        { topic1: "绑定手机", value: "183****5325", topic2: "更换手机" },
        { topic1: "绑定邮箱", value: "93970****@qq.com", topic2: "更换邮箱" },
        { topic1: "实名认证", value: "已认证", topic2: "重新认证" },
      ],
    });
    return { state };
  },
});
</script>

<style scoped lang="less"></style>
