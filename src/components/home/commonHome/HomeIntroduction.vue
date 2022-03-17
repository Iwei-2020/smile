<template>
  <div class="home-introduction">
    <p class="headline">
      全新 Mac Studio 和 Studio Display、新一代 iPad Air、新一代 iPhone
      SE、两款新配色的 iPhone 13 和 iPhone 13 Pro 携手登场。
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "HomeIntroduction",
  props: {},
  components: {},
});
</script>

<style scoped lang="less">
.home-introduction {
  .headline {
    width: 80%;
    font-size: 36px;
    font-weight: 600;
    margin: auto auto;
    text-align: center;
  }
}
</style>
