<template>
  <div class="home">
    <top-bar class="top-bar"></top-bar>
    <a-row>
      <a-col :span="12" class="home-carousel">
        <home-carousel></home-carousel>
      </a-col>
      <a-col :span="12" class="home-introduction">
        <home-introduction></home-introduction>
      </a-col>
    </a-row>
    <login-modal></login-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "@/components/TopBar.vue";
import HomeCarousel from "@/components/HomeCarousel.vue";
import HomeIntroduction from "@/components/HomeIntroduction.vue";
import LoginModal from "@/components/LoginModal.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
    HomeCarousel,
    HomeIntroduction,
    LoginModal,
  },
});
</script>

<style scoped lang="less">
.home {
  .top-bar {
    width: 100%;
    height: 200px;
  }
  .home-introduction {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
