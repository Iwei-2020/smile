<template>
  <div class="common-home">
    <home-introduction></home-introduction>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HomeCarousel from "@/components/home/main/HomeCarousel.vue";
import HomeIntroduction from "@/components/home/main/HomeIntroduction.vue";

export default defineComponent({
  name: "HomeMain",
  props: {},
  components: {
    // HomeCarousel,
    HomeIntroduction,
  },
});
</script>

<style scoped lang="less">
.common-home {
}
</style>
