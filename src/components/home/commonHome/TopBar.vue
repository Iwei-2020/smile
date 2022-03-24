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
      <a-menu-item key="sub1">
        <router-link to="/source">
          <p class="topic">素材库</p>
        </router-link>
      </a-menu-item>
      <a-menu-item key="alipay" class="topic4">
        <div class="topic btn-area" v-if="!this.$store.getters.getUser.id">
          <a-button
            type="text"
            @click="this.$emit('changeLoginModalVisible', true)"
            class="btn-login"
            >登录</a-button
          >
        </div>
        <div class="btn-area" v-else>
          <a-popover
            :getPopupContainer="(triggerNode) => triggerNode.parentNode"
          >
            <template #content>
              <div>
                <a-button type="text">
                  <router-link to="/user-home/my-information" class="go-home"
                    >个人主页</router-link
                  >
                </a-button>
                <a-button type="text" @click="logout">退出</a-button>
              </div>
            </template>
            <a-avatar
              :src="this.$store.getters.getUser.avatarUrl"
              :size="36"
            ></a-avatar>
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
import { useStore } from "vuex";
import { message } from "ant-design-vue";

export default defineComponent({
  name: "TopBar",
  components: {
    IconFont,
  },
  emits: ["changeLoginModalVisible"],
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({});
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
.top-bar {
  :deep(.ant-menu-horizontal) {
    border: none;
  }
  .flex-menu {
    display: flex;
    align-items: center;
    height: 200px;
    .topic {
      display: inline-block;
      height: 40px;
      vertical-align: middle;
      font-weight: bold;
      font-size: 20px;
    }
    .btn-area {
      height: 60px;
      .btn-login {
        font-size: 20px;
        font-weight: bold;
      }
      .go-home {
        color: rgba(0, 0, 0, 0.85);
        &:hover {
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }
    :deep(.ant-menu-item) {
      flex: 1;
      text-align: center;
    }
    :deep(.ant-menu-item:hover) {
      color: rgba(0, 0, 0, 0.85);
    }
    :deep(.ant-menu-item:hover::after) {
      border-bottom: none;
    }
    :deep(.ant-menu-item::after) {
      border-bottom: none;
    }
    :deep(.ant-popover-inner) {
      width: 120px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
    :deep(.anticon) {
      font-size: 36px;
    }
  }
}
</style>
