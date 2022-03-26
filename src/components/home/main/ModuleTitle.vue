<template>
  <div class="module-title">
    <div class="flex">
      <icon-font class="icon" :iconName="state.iconName"></icon-font>
      <span class="word">{{ state.title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import IconFont from "@/components/common/IconFont.vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: { IconFont },
  setup(props) {
    const state = reactive({
      iconName: props.iconName,
      title: props.title,
    })
    return { state };
  },
});
</script>

<style scoped lang="less">
.module-title {
  margin-left: 40px;
  .flex {
    display: flex;
    align-items: center;
    .icon {
      font-size: 48px;
      margin-right: 20px;
    }
    .word {
      font-size: 16px;
      font-weight: bolder;
      box-shadow: 1px 1px 1px #000;
    }
  }
}
</style>
