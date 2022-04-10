<template>
  <div class="dashboard">
    <a-row class="dashboard-content">
      <a-col :span="6">
        <side-bar class="side-bar"></side-bar>
      </a-col>
      <a-col :span="18">
        <main-area class="main-area"></main-area>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, watch } from "vue";
import type { MenuProps } from "ant-design-vue";
import SideBar from "@/components/dashboard/SideBar.vue";
import MainArea from "@/components/dashboard/MainArea.vue";

export default defineComponent({
  name: "DashBoard",
  props: {},
  components: { SideBar, MainArea },
});
</script>

<style scoped lang="less">
.dashboard {
  background-image: url(../assets/images/dashboard.png);
  width: 1440px;
  height: 990px;
  margin: 0 auto;
}
</style>
