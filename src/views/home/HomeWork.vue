<template>
  <div class="home-work">
    <div class="top-container">
      <div class="home-top">
        <div class="avatar-container">
          <a-avatar
            :src="wrapper"
            :size="130"
            :class="{ 'avatar-wrapper': true, pointer: !state.isRouteWork }"
            shape="square"
            @click="goWork"
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
        <div class="ops-container">
          <div class="icon-container add" v-if="state.isRouteWork">
            <svg-icon
              iconClass="add"
              class="icon"
              @click="() => changeLibraryModalVisible(true)"
            ></svg-icon>
          </div>
          <div class="icon-container share">
            <svg-icon iconClass="share" class="icon"></svg-icon>
          </div>
          <div class="icon-container reward">
            <svg-icon iconClass="reward" class="icon"></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <library-modal
      :isVisible="state.libraryModalVisible"
      @changeLibraryModalVisible="changeLibraryModalVisible"
      mode="add"
    ></library-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import wrapper from "@/assets/images/avatar-wrapper.png";
import SvgIcon from "@/components/common/SvgIcon.vue";
import LibraryModal from "@/components/home/work/LibraryModal.vue";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRouter,
} from "vue-router";

export default defineComponent({
  name: "home-work",
  props: {},
  components: { SvgIcon, LibraryModal },
  setup() {
    const router = useRouter();
    const state = reactive({
      libraryModalVisible: false,
      isRouteWork: true,
      current: [],
    });

    const changeLibraryModalVisible = (visible: boolean) => {
      state.libraryModalVisible = visible;
    };

    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      state.isRouteWork = to.fullPath === "/work";
    });
    const goWork = () => {
      if (!state.isRouteWork) {
        router.push("/work");
      }
    };
    return {
      state,
      wrapper,
      goWork,
      changeLibraryModalVisible,
    };
  },
});
</script>

<style scoped lang="less">
@base-width: 1160px;
.home-work {
  background-color: rgb(252, 252, 252);
  min-height: 960px;
  .top-container {
    background-color: rgb(9, 7, 35);
    .home-top {
      height: 200px;
      width: @base-width;
      margin: 0 auto;
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
        width: 854px;
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
      }
      .ops-container {
        position: relative;
        top: 24px;
        display: flex;
        .icon-container {
          height: 48px;
          width: 48px;
          text-align: center;
          border-radius: 50%;
        }
        .add {
          background-color: #ff0000;
          margin-right: 16px;
        }
        .share {
          background-color: #64b532;
          margin-right: 16px;
        }
        .reward {
          background-color: #ffa000;
        }
        .icon {
          font-size: 36px;
          height: 48px;
          cursor: pointer;
        }
      }
    }
  }
}
.pointer {
  cursor: pointer;
}
</style>
