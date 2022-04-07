<template>
  <div class="home">
    <top-bar
      class="top-bar"
      @changeLoginModalVisible="changeLoginModalVisible"
    ></top-bar>
    <router-view />
    <login-modal
      :isVisible="state.LoginModalVisible"
      @changeLoginModalVisible="changeLoginModalVisible"
      @changeModalMode="changeModalMode"
      :mode="state.mode"
    ></login-modal>
    <library-container
      :librarys="state.hotList"
      iconName="icon-hot"
      title="本周热门"
    ></library-container>
    <library-container
      :librarys="state.starList"
      iconName="icon-xihuan"
      title="点赞最多"
    ></library-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import TopBar from "@/components/home/TopBar.vue";
import LoginModal from "@/components/home/LoginModal.vue";
import LibraryContainer from "@/components/home/main/LibraryContainer.vue";
import service from "@/utils/https";
import urls from "@/utils/urls";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    LoginModal,
    LibraryContainer,
  },
  setup() {
    const state = reactive({
      LoginModalVisible: false,
      mode: "login",
      specificArray: ["hotList", "starList"],
      hotList: [],
      starList: [],
    });
    const changeLoginModalVisible = (visible: boolean) => {
      state.LoginModalVisible = visible;
      if (visible) {
        changeModalMode("login");
      }
    };
    const changeModalMode = (mode: string) => {
      state.mode = mode;
    };
    const getSpecificLibrary = async (): Promise<void> => {
      let data: any;
      let formData = new FormData();
      state.specificArray.forEach((specific: string) => {
        formData.append("specificNameList", specific);
      });
      data = await service.post(urls.getSpecificLibrary, formData);
      state.hotList = data.hotList;
      state.starList = data.starList;
    };
    onMounted(getSpecificLibrary);

    return { state, changeLoginModalVisible, changeModalMode };
  },
});
</script>

<style scoped lang="less">
.home {
  background-color: rgb(252, 252, 252);
}
</style>
