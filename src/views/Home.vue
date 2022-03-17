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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import TopBar from "@/components/home/commonHome/TopBar.vue";
import LoginModal from "@/components/home/commonHome/LoginModal.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    LoginModal,
  },
  setup() {
    const state = reactive({
      LoginModalVisible: false,
      mode: "login",
    });
    const changeLoginModalVisible = (visible: boolean) => {
      state.LoginModalVisible = visible;
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
  .top-bar {
    width: 100%;
  }
}
</style>
