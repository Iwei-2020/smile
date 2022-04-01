<template>
  <div class="home-card-container">
    <div class="grid-wrapper">
      <source-card @goMyLibrary="goMyLibrary"></source-card>
      <source-card @goMyLibrary="goMyLibrary"></source-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SourceCard from "@/components/home/work/SourceCard.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {},
  components: { SourceCard },
  setup() {
    const router = useRouter();
    const goMyLibrary = (id: number) => {
      router.push(`/work/library/${id}`);
    };
    return { goMyLibrary };
  },
});
</script>

<style scoped lang="less">
@base-width: 1160px;
.home-card-container {
  width: @base-width;
  margin: 0 auto;
  .grid-wrapper {
    padding-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
    margin-bottom: 20px;
    grid-gap: 45px 40px;
  }
}
</style>
