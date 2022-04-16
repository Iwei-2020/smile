<template>
  <div class="dashboard">
    <side-bar class="side-bar"></side-bar>
    <main-area class="main-area"></main-area>
    <right-bar class="right-bar"></right-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "@/components/dashboard/SideBar.vue";
import MainArea from "@/components/dashboard/MainArea.vue";
import RightBar from "@/components/dashboard/RightBar.vue";

export default defineComponent({
  name: "DashBoard",
  props: {},
  components: { SideBar, MainArea, RightBar },
});
</script>

<style scoped lang="less">
.dashboard {
  background-image: url(../assets/images/dashboard.png);
  background-repeat: no-repeat no-repeat;
  width: 1440px;
  min-height: 990px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
