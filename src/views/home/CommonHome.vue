<template>
  <div class="common-home">
    <a-row>
      <a-col :span="12" class="home-carousel">
        <home-carousel></home-carousel>
      </a-col>
      <a-col :span="12" class="home-introduction">
        <home-introduction></home-introduction>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import HomeCarousel from "@/components/home/commonHome/HomeCarousel.vue";
import HomeIntroduction from "@/components/home/commonHome/HomeIntroduction.vue";

export default defineComponent({
  name: "commonHome",
  props: {},
  components: {
    HomeCarousel,
    HomeIntroduction,
  },
});
</script>

<style scoped lang="less">
.common-home {
}
</style>
