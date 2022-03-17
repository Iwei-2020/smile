<template>
  <div class="top-bar">
    <a-menu
      class="flex-menu"
      v-model:selectedKeys="current"
      mode="horizontal"
      theme="light"
    >
      <a-menu-item key="mail" @click="goHome">
        <template #icon>
          <icon-font iconName="icon-smile"></icon-font>
        </template>
        <p class="topic">Smile</p>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #title>
          <p class="topic">
            <router-link to="/source">素材库</router-link>
          </p>
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
      <a-menu-item key="alipay" class="topic4">
        <div class="topic btn-area" v-if="true">
          <a-button
            type="text"
            @click="this.$emit('changeLoginModalVisible', true)"
            >登录</a-button
          >
        </div>
        <div class="btn-area" v-else>
          <a-popover
            :getPopupContainer="(triggerNode) => triggerNode.parentNode"
          >
            <template #content>
              <div>
                <router-link to="/user-home">个人主页</router-link>
                <a-button type="text">退出登录</a-button>
              </div>
            </template>
            <a-avatar :src="state.avatar" :size="54"></a-avatar>
          </a-popover>
        </div>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";

import IconFont from "../../common/IconFont.vue";
import avatar from "@/assets/images/avatar/a1.png";

export default defineComponent({
  name: "TopBar",
  components: {
    IconFont,
  },
  emits: ["changeLoginModalVisible"],
  setup() {
    const state = reactive({
      avatar,
    });
    const router = useRouter();
    const goHome = () => {
      console.log("xx");
      router.push({ path: "/" });
    };
    return { state, goHome };
  },
});
</script>

<style scoped lang="less">
.top-bar {
  :deep(.ant-menu-horizontal) {
    border: none;
  }
  .flex-menu {
    display: flex;
    align-items: center;
    height: 200px;
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
    .btn-area {
      height: 60px;
    }
    :deep(.ant-popover-inner) {
      background-color: pink;
    }
    :deep(.anticon) {
      font-size: 36px;
    }
  }
}
</style>
