<template>
  <div class="home-work">
    <div class="avatar-container">
      <a-avatar
        :src="wrapper"
        :size="130"
        class="avatar-wrapper"
        shape="square"
      ></a-avatar>
      <a-avatar
        :src="this.$store.getters.getUser.avatarUrl"
        :size="90"
        class="avatar"
      ></a-avatar>
    </div>
    <div class="info-container">
      <div class="info">
        <span class="title">UserName</span>
        <span class="vertical-divider">|</span>
        <span>0点赞</span>
      </div>
      <div class="menu-container">
        <a-menu v-model:selectedKeys="current" mode="horizontal" class="menu">
          <a-menu-item key="mail">
            <template #icon>
              <mail-outlined />
            </template>
            <span>One</span>
          </a-menu-item>
          <a-menu-item key="app">
            <template #icon>
              <appstore-outlined />
            </template>
            Navigation Two
          </a-menu-item>
          <a-menu-item key="alipay"> Navigation Four - Link </a-menu-item>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import wrapper from "@/assets/images/avatar-wrapper.png";

export default defineComponent({
  name: "home-work",
  props: {},
  components: {},
  setup() {
    return { wrapper };
  },
});
</script>

<style scoped lang="less">
.home-work {
  height: 200px;
  background-color: rgb(9, 7, 35);
  padding: 0 20vw;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
  .avatar-container {
    height: 200px;
    width: 130px;
    position: relative;
    .avatar-wrapper {
      position: absolute;
      z-index: 9999;
      bottom: 0px;
      left: 0px;
    }
    .avatar {
      position: absolute;
      bottom: 25px;
      left: 20px;
    }
  }
  .info-container {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .info {
      padding-left: 20px;
      font-size: 16px;
      font-weight: 800;
      .vertical-divider {
        margin: 0 10px;
      }
    }
    .menu-container {
      :deep(.ant-menu) {
        color: #a6a5ad;
        background-color: rgb(9, 7, 35);
        border-bottom: none;
      }
      :deep(.ant-menu-item) {
        &:hover {
          color: #ffffff;
        }
        &::after {
          border-bottom: none;
        }
      }
      :deep(.ant-menu-title-content) {
        margin-left: 0;
      }
      :deep(.ant-menu-item-selected) {
        color: #ffffff;
        &::after {
          border-bottom: 2px red solid;
        }
      }
    }
  }
}
</style>
