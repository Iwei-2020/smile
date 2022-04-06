<template>
  <div class="info-container">
    <div class="info">
      <div class="main">
        <span class="username">{{ this.$store.getters.getUser.username }}</span>
      </div>
      <div class="sub">
        <span class="like-count">{{
          this.$store.getters.getUser.likedCount
        }}</span>
        <span class="like-text">点赞</span>
      </div>
    </div>
    <div class="menu-container">
      <a-menu
        v-model:selectedKeys="state.current"
        mode="horizontal"
        class="menu"
      >
        <a-menu-item key="mail">
          <span>图片库</span>
        </a-menu-item>
        <a-menu-item key="app">
          <span>Gif库</span>
        </a-menu-item>
        <a-menu-item key="alipay">
          <span>矢量库</span>
        </a-menu-item>
        <a-menu-item key="coll">
          <span>收藏</span>
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      current: [],
    });
    return { state };
  },
});
</script>

<style scoped lang="less">
.blod {
  font-size: 22px;
  font-weight: 800;
}
.info-container {
  height: 130px;
  width: 854px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .info {
    padding-left: 20px;
    display: flex;
    .main {
      .username {
        .blod();
      }
    }
    .sub {
      display: flex;
      align-items: center;
      margin-left: 20px;
      padding-left: 20px;
      border-left: 1px solid pink;
      .like-count {
        .blod();
      }
      .like-text {
        font-size: 12px;
        margin-left: 5px;
        font-weight: 800;
        color: #a6a5ad;
      }
    }
  }
  .menu-container {
    :deep(.ant-menu) {
      color: #a6a5ad;
      font-weight: 800;
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
    :deep(.ant-menu-item-selected) {
      color: #ffffff;
      &::after {
        border-bottom: 2px red solid;
      }
    }
  }
  .library-introduction {
    padding-left: 20px;
  }
}
</style>
