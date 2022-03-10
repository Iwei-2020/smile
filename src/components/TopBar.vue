<template>
  <div class="top-bar">
    <a-menu
      class="flex-layout"
      v-model:selectedKeys="current"
      mode="horizontal"
      theme="light"
    >
      <a-menu-item key="mail" class="flex-child">
        <template #icon>
          <icon-font type="icon-smile" class="logo"></icon-font>
        </template>
        <p class="topic">Smile</p>
      </a-menu-item>
      <a-menu-item key="app" disabled class="flex-child">
        <p class="topic">Navigation Two</p>
      </a-menu-item>
      <a-sub-menu key="sub1" class="flex-child">
        <template #title>
          <p class="topic">Navigation Three - Submenu</p>
        </template>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">Option 3</a-menu-item>
          <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay" class="flex-child">
        <div class="topic">
          <a-button type="text">注册</a-button> |
          <a-button type="text">登录</a-button>
        </div>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
import IconFont from "./IconFont.vue";

export default defineComponent({
  name: "TopBar",
  components: {
    IconFont,
  },
  setup() {
    const state = reactive({});
  },
});
</script>

<style scoped lang="less">
.top-bar {
  :deep(.ant-menu-horizontal) {
    border: none;
  }
  width: 100%;
  .flex-layout {
    display: flex;
    align-items: center;
    height: 100px;
    :deep(.ant-menu-item),
    :deep(.ant-menu-submenu) {
      flex: 1;
      text-align: center;
    }
    :deep(.ant-menu-item:hover::after),
    :deep(.ant-menu-submenu:hover::after) {
      border-bottom: none;
    }
    :deep(.ant-menu-item:hover),
    :deep(.ant-menu-submenu:hover),
    :deep(.ant-menu-submenu-title:hover) {
      color: pink;
    }
    :deep(.ant-menu-item::after),
    :deep(.ant-menu-submenu::after) {
      border-bottom: none;
    }
    :deep(.ant-btn-text) {
      font-size: 20px;
      font-weight: bold;
    }
    .topic {
      display: inline-block;
      height: 40px;
      vertical-align: middle;
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
