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
    <module-title :iconName="`icon-hot`" title="本周热门"></module-title>
    <module-title :iconName="`icon-xihuan`" title="点赞最多"></module-title>
    <image-card></image-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TopBar from "@/components/home/TopBar.vue";
import LoginModal from "@/components/home/LoginModal.vue";
import ModuleTitle from "@/components/home/main/ModuleTitle.vue";
import ImageCard from "@/components/home/main/WorkCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    LoginModal,
    ModuleTitle,
    ImageCard,
  },
  setup() {
    const state = reactive({
      LoginModalVisible: false,
      mode: "login",
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
    return { state, changeLoginModalVisible, changeModalMode };
  },
});
</script>

<style scoped lang="less">
.home {
}
</style>
