<template>
  <div class="top-bar">
    <div class="menu-container">
      <a-menu
        class="menu"
        v-model:selectedKeys="state.current"
        mode="horizontal"
        theme="light"
      >
        <a-menu-item key="logo" @click="goHome" class="menu-logo">
          <template #icon>
            <icon-font iconName="icon-smile"></icon-font>
          </template>
          <span class="menu-title">Smile</span>
        </a-menu-item>
        <a-menu-item key="source">
          <router-link to="/source">
            <p class="menu-title">素材库</p>
          </router-link>
        </a-menu-item>
        <a-menu-item key="alipay">
          <router-link to="/">
            <p class="menu-title">创作中心</p>
          </router-link>
        </a-menu-item>
      </a-menu>
    </div>
    <div class="ops-container">
      <a-input class="search-input" placeholder="搜索表情包">
        <template #prefix>
          <SearchOutlined />
        </template>
      </a-input>
      <div v-if="!this.$store.getters.getUser.id" class="login-register">
        <span
          class="ops-title"
          @click="this.$emit('changeLoginModalVisible', true)"
        >
          登录
          <span class="margin5">/</span>
          注册
        </span>
      </div>
      <div class="avatar-container" v-else>
        <div class="notice-container">
          <a-badge count="5" :offset="[-4, 12]">
            <BellOutlined class="notice-icon" />
          </a-badge>
        </div>
        <a-popover :getPopupContainer="(triggerNode) => triggerNode.parentNode">
          <template #content>
            <div>
              <div class="pointer m-bottom10">
                <router-link to="/user/info">
                  <span>个人主页</span>
                </router-link>
              </div>
              <div class="pointer m-bottom10">
                <router-link to="/work">
                  <span>作品中心</span>
                </router-link>
              </div>
              <div
                class="pointer m-bottom10"
                v-if="this.$store.getters.getUser.userRole >= 3"
              >
                <router-link to="/dashboard">
                  <span>Dashboard</span>
                </router-link>
              </div>
              <div class="pointer">
                <span @click="logout">退出</span>
              </div>
            </div>
          </template>
          <a-avatar
            :src="this.$store.getters.getUser.avatarUrl"
            :size="48"
            class="avatar"
          ></a-avatar>
        </a-popover>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import IconFont from "../common/IconFont.vue";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import { BellOutlined, SearchOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "TopBar",
  components: {
    IconFont,
    BellOutlined,
    SearchOutlined,
  },
  emits: ["changeLoginModalVisible"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      current: [],
    });
    const goHome = () => {
      router.push({ path: "/" });
    };
    const logout = () => {
      goHome();
      store.commit("userLogout");
      message.success("退出登录成功");
    };
    return { state, goHome, logout };
  },
});
</script>

<style scoped lang="less">
.font {
  line-height: 80px;
  font-size: 16px;
  font-weight: 800;
  color: rgb(110, 109, 122);
}
.m-bottom10 {
  margin-bottom: 10px;
}
.pointer {
  cursor: pointer;
}

.top-bar {
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px 36px;
  border-bottom: rgb(240, 240, 240) 1px solid;
  :deep(.ant-menu-horizontal) {
    border: none;
  }
  .menu-container {
    width: 50%;
    .menu {
      :deep(.ant-menu-item) {
        height: 80px;
        padding: 0 24px;
      }
      :deep(.anticon) {
        font-size: 24px;
      }
      .menu-title {
        .font();
      }
      :deep(.menu-logo.ant-menu-item:hover::after) {
        border-bottom: none;
      }
      :deep(.menu-logo.ant-menu-item::after) {
        border-bottom: none;
      }
    }
  }
  .ops-container {
    display: flex;
    height: 80px;
    .search-input {
      height: 36px;
      margin: 22px 20px 0 0;
    }
    .login-register {
      .ops-title {
        display: inline-block;
        width: 100px;
        .font();
        .pointer();
        .margin5 {
          margin: 0 5px;
        }
      }
    }
    .avatar-container {
      display: flex;
      height: 80px;
      padding: 16px 0;
      .notice-container {
        margin: 0 20px;
        .notice-icon {
          line-height: 48px;
          font-size: 24px;
          color: rgb(110, 109, 122);
        }
      }
      .avatar {
        cursor: pointer;
      }
    }
    :deep(.ant-popover-inner) {
      width: 120px;
      text-align: center;
      font-size: 14px;
      font-weight: 800;
    }
    :deep(.ant-popover-inner-content) {
      a {
        color: rgb(110, 109, 122);
      }
      color: rgb(110, 109, 122);
    }
  }
}
</style>
