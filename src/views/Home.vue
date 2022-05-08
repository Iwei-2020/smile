<template>
  <div class="home">
    <top-bar
      class="top-bar"
      @changeLoginModalVisible="changeLoginModalVisible"
    ></top-bar>
    <router-view />
    <login-modal
      :isVisible="LoginModalVisible"
      @changeLoginModalVisible="changeLoginModalVisible"
      @changeModalMode="changeModalMode"
      :mode="mode"
    ></login-modal>
    <library-container
      :libraryImageVos="hotList"
      iconName="icon-hot"
      title="本周热门"
      :key="1"
    ></library-container>
    <!-- <library-container
      :libraryImageVos="starList"
      iconName="icon-xihuan"
      title="点赞最多"
      :key="2"
    ></library-container> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import TopBar from "@/components/home/TopBar.vue";
import LoginModal from "@/components/home/LoginModal.vue";
import LibraryContainer from "@/components/home/main/LibraryContainer.vue";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    LoginModal,
    LibraryContainer,
  },
  setup() {
    let store = useStore();
    const state = reactive({
      LoginModalVisible: false,
      mode: "login",
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
      data = await service.get(
        `${urls.getSpecificLibrary}/${store.getters.getUser.id}`
      );
      state.hotList = data.hotList;
      state.starList = data.starList;
    };
    onMounted(getSpecificLibrary);
    return { ...toRefs(state), changeLoginModalVisible, changeModalMode };
  },
});
</script>

<style scoped lang="less">
.home {
  background-color: rgb(252, 252, 252);
}
</style>
