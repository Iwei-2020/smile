<template>
  <div class="user-home">
    <a-row :gutter="40">
      <a-col :span="8" class="home-side-bar">
        <a-menu :selectedKeys="state.current" @select="handleMenuSelect">
          <a-menu-item key="user-center" disabled=""> 个人中心 </a-menu-item>
          <a-menu-item key="my-information">
            <router-link to="/user-home/my-information">我的信息</router-link>
          </a-menu-item>
          <a-menu-item key="my-avatar">
            <router-link to="/user-home/my-avatar">我的头像 </router-link>
          </a-menu-item>
          <a-menu-item key="my-works"> 我的作品 </a-menu-item>
          <a-menu-item key="my-collection"> 我的收藏 </a-menu-item>
          <a-menu-item key="my-security">
            <router-link to="/user-home/my-security"> 安全中心 </router-link>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="8">
        <a-card title="我的信息">
          <router-view />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UserHome",
  props: {},
  setup() {
    const state = reactive({
      user: {
        gender: "M",
      },
      current: ["my-information"],
    });
    const router = useRouter();
    const handleMenuSelect = (item: any) => {
      state.current.pop();
      state.current.push();
      router.push(`/user-home/${item.key}`);
    };
    onMounted(() => {
      router.push("/user-home/my-information");
    });
    return { state, handleMenuSelect };
  },
});
</script>

<style scoped lang="less">
.user-home {
  .home-side-bar {
    display: flex;
    flex-direction: row-reverse;
  }
  .btn-area {
    display: block;
    margin: 0 auto;
  }
}
</style>
