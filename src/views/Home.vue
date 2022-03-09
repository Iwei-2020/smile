<template>
  <div class="home">
    <top-bar class="top-bar"></top-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "@/components/TopBar.vue";

export default defineComponent({
  name: "Home",
  components: {
    TopBar,
  },
});
</script>

<style scoped lang="less">
.home {
  .top-bar {
    width: 100%;
    margin-top: 20px;
  }
}
</style>
