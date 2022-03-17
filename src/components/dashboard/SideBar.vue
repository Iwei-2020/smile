<template>
  <div>
    <a-menu id="sideBar" class="side-bar">
      <a-menu-item key="logo" style="margin: 40px 0">
        <icon-font></icon-font>dashboard
      </a-menu-item>
      <a-menu-item key="topic1">
        <template #icon>
          <MailOutlined />
        </template>
        首页
      </a-menu-item>
      <a-menu-item key="topic2">
        <template #icon>
          <MailOutlined />
        </template>
        订单管理
      </a-menu-item>
      <a-menu-item key="topic3">
        <template #icon>
          <MailOutlined />
        </template>
        账号管理
      </a-menu-item>
      <a-menu-item key="topic4">
        <template #icon>
          <MailOutlined />
        </template>
        用户管理
      </a-menu-item>
      <a-menu-item key="topic5">
        <template #icon>
          <MailOutlined />
        </template>
        每日精选</a-menu-item
      >
      <a-menu-item key="topic6">
        <template #icon>
          <MailOutlined />
        </template>
        活动管理</a-menu-item
      >
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch } from "vue";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import IconFont from "../common/IconFont.vue";
export default defineComponent({
  name: "",
  props: {},
  components: { IconFont },
  setup() {
    const selectedKeys = ref<string[]>(["1"]);
    const openKeys = ref<string[]>(["sub1"]);
    const titleClick = (e: Event) => {
      console.log("titleClick", e);
    };
    watch(
      () => openKeys,
      (val) => {
        console.log("openKeys", val);
      }
    );
    return {
      selectedKeys,
      openKeys,
      titleClick,
    };
  },
});
</script>

<style scoped lang="less">
.side-bar {
  width: 256px;
  text-align: center;
  :deep(.ant-menu) {
    height: 50%;
    display: flex;
    flex-direction: column;
  }
  :deep(.ant-menu-item),
  :deep(.ant-menu-submenu) {
    flex: 1;
    text-align: center;
  }
}
</style>
