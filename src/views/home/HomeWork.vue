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
        <library-info v-if="state.showInfo"></library-info>
        <info-container v-else></info-container>
        <div class="ops-container">
          <div class="icon-container add" v-if="state.isRouteWork">
            <svg-icon
              iconClass="add"
              class="icon"
              @click="() => changeLibraryModalVisible(true)"
            ></svg-icon>
          </div>
          <div id="copy-link" class="icon-container share">
            <svg-icon iconClass="share" class="icon"></svg-icon>
          </div>
          <div class="icon-container reward">
            <svg-icon iconClass="reward" class="icon"></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <router-view v-if="state.showLibrary" />
    <a-empty v-else class="empty" />
    <library-modal
      :isVisible="state.libraryModalVisible"
      @changeLibraryModalVisible="changeLibraryModalVisible"
      mode="add"
    ></library-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive } from "vue";
import wrapper from "@/assets/images/avatar-wrapper.png";
import SvgIcon from "@/components/common/SvgIcon.vue";
import LibraryModal from "@/components/home/work/LibraryModal.vue";
import InfoContainer from "@/components/home/work/InfoContainer.vue";
import LibraryInfo from "@/components/home/work/LibraryInfo.vue";
import emitter from "@/utils/mybus";
import Clipboard from "clipboard";
import {
  onBeforeRouteUpdate,
  RouteLocationNormalized,
  useRouter,
} from "vue-router";
import { message } from "ant-design-vue";

export default defineComponent({
  name: "home-work",
  props: {},
  components: { SvgIcon, LibraryModal, InfoContainer, LibraryInfo },
  setup() {
    const clipboard = new Clipboard("#copy-link", {
      text: () => location.href,
    });
    const router = useRouter();
    const state = reactive({
      libraryModalVisible: false,
      isRouteWork: true,
      showLibrary: true,
      showInfo: false,
    });
    const changeLibraryModalVisible = (visible: boolean) => {
      state.libraryModalVisible = visible;
    };
    const goWork = () => {
      if (!state.isRouteWork) {
        router.push("/work");
      }
    };
    const changeShowLibrary = (show: any) => {
      state.showLibrary = show;
    };
    const initClipboard = () => {
      clipboard.on("success", () => {
        message.success("链接已复制到粘贴板");
      });
      clipboard.on("error", () => message.error("复制失败"));
    };
    onMounted(() => {
      emitter.on("changeShowLibrary", changeShowLibrary);
      initClipboard();
    });
    onUnmounted(() => {
      clipboard.destroy();
      emitter.off("changeShowLibrary");
    });
    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      state.isRouteWork = to.fullPath === "/work";
      state.showInfo = to.fullPath.includes("/work/library/");
    });
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
  .empty {
    margin-top: 50px;
  }
}
.pointer {
  cursor: pointer;
}
</style>
