<template>
  <div class="home-user">
    <div>
      <svg-icon iconClass="top"></svg-icon>
    </div>
    <div class="main">
      <a-menu
        :selectedKeys="state.current"
        @select="handleMenuSelect"
        class="sider-bar"
      >
        <a-menu-item key="center" disabled="" style="text-align: center">
          个人中心
        </a-menu-item>
        <a-menu-item key="info">
          <template #icon>
            <UserOutlined />
          </template>
          <router-link to="info"> 我的信息 </router-link>
        </a-menu-item>
        <a-menu-item key="avatar">
          <template #icon>
            <SmileOutlined />
          </template>
          <router-link to="avatar"> 我的头像 </router-link>
        </a-menu-item>
        <a-menu-item key="collection">
          <template #icon>
            <TagsOutlined />
          </template>
          <router-link to="collection"> 我的收藏 </router-link>
        </a-menu-item>
        <a-menu-item key="security">
          <template #icon>
            <SafetyCertificateOutlined />
          </template>
          <router-link to="security"> 安全中心 </router-link>
        </a-menu-item>
      </a-menu>
      <a-card class="card">
        <a-card-meta title="Card title" description="This is the description">
          <template #avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
        </a-card-meta>
        <a-divider />
        <router-view />
        <div class="image-right">
          <a-image :src="point" :width="80"></a-image>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  UserOutlined,
  SmileOutlined,
  TagsOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons-vue";
import point from "@/assets/images/point.png";

export default defineComponent({
  name: "HomeUser",
  props: {},
  components: {
    UserOutlined,
    SmileOutlined,
    TagsOutlined,
    SafetyCertificateOutlined,
  },
  setup() {
    const state = reactive({
      current: [] as string[],
    });
    const router = useRouter();
    const route = useRoute();
    const handleMenuSelect = (item: any) => {
      const { key } = item;
      state.current.pop();
      state.current.push(key);
      router.push(`/user/${key}`);
    };
    onMounted(() => {
      state.current.push(route.meta.current as string);
    });
    return { handleMenuSelect, state, point };
  },
});
</script>

<style scoped lang="less">
.home-user {
  padding: 0 10vw;
  margin-top: 40px;
  box-sizing: border-box;
  .main {
    display: flex;
    justify-content: center;
    .sider-bar {
      background-color: rgb(246, 249, 250);
      font-weight: 800;
    }
    .card {
      width: 33vw;
      position: relative;
      .image-right {
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
  }
}
</style>
