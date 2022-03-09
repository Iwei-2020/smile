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
          <icon-font type="icon-smile"></icon-font>
        </template>
        Navigation One
      </a-menu-item>
      <a-menu-item key="app" disabled class="flex-child">
        <template #icon>
          <appstore-outlined />
        </template>
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1" class="flex-child">
        <template #icon>
          <setting-outlined />
        </template>
        <template #title>Navigation Three - Submenu</template>
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
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
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
    AppstoreOutlined,
    SettingOutlined,
    IconFont,
  },
  setup() {
    const state = reactive({});
  },
});
</script>

<style scoped lang="less">
.top-bar {
  width: 100%;
  .flex-layout {
    display: flex;
    :deep(.flex-child) {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
