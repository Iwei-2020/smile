<template>
  <div class="source-card">
    <div class="wrapper" @click="this.$emit('goMyLibrary', 1)">
      <div class="img-container">
        <svg-icon iconClass="duck1" class="icon"></svg-icon>
      </div>
      <div class="img-container">
        <svg-icon iconClass="duck2" class="icon"></svg-icon>
      </div>
      <div class="img-container">
        <svg-icon iconClass="duck3" class="icon"></svg-icon>
      </div>
      <div class="img-container">
        <svg-icon iconClass="duck1" class="icon"></svg-icon>
      </div>
    </div>
    <div class="title-container">
      <svg-icon iconClass="name" class="icon-card"></svg-icon>
      <span class="title"> {{ state.library.lbName }} </span>
      <span class="title-right">
        数量
        <span class="count">{{ state.library.lbCount }}</span>
      </span>
    </div>
    <div class="ops-container">
      <span v-if="false">
        <a-avatar :size="24" class="avatar"></a-avatar>
        <span class="author-name">passion</span>
      </span>
      <span class="ops-area">
        <EyeFilled />
        <span class="count mr10">{{ state.library.lbWatch }}</span>
        <HeartFilled class="pointer" />
        <span :class="{ count: true, mr10: false }">{{
          state.library.lbLike
        }}</span>
        <StarFilled v-if="false" class="pointer" />
      </span>
    </div>
    <div class="edit-container">
      <EditFilled class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import SvgIcon from "@/components/common/SvgIcon.vue";
import { defineComponent, reactive } from "vue";
import search from "@/assets/images/search.png";
import {
  HeartFilled,
  EyeFilled,
  StarFilled,
  EditFilled,
} from "@ant-design/icons-vue";

export default defineComponent({
  props: {
    library: {
      type: Object,
      required: true,
    },
  },
  components: { SvgIcon, HeartFilled, EyeFilled, StarFilled, EditFilled },
  emits: ["goMyLibrary"],
  setup(props) {
    const state = reactive({
      library: props.library,
    });
    return { search, state };
  },
});
</script>

<style scoped lang="less">
.source-card {
  cursor: pointer;
  transition: box-shadow 0.4s, transform 0.4s;
  background-color: rgb(255, 255, 255);
  width: 330px;
  padding: 24px 15px 15px 15px;
  box-sizing: content-box;
  position: relative;
  &:hover {
    transform: translateY(-2%);
    box-shadow: 1px 1px 10px 2px #ccc;
    .edit-container {
      display: block;
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    grid-gap: 32px;
    .img-container {
      height: 90px;
      .icon {
        height: 100%;
        width: 100%;
      }
    }
  }
  .title-container {
    height: 30px;
    margin-top: 10px;
    .icon-card {
      line-height: 30px;
    }
    .title {
      line-height: 30px;
      font-size: 12px;
    }
    .title-right {
      float: right;
      font-size: 12px;
      line-height: 30px;
      .count {
        color: red;
      }
    }
  }
  .ops-container {
    margin-top: 5px;
    .avatar {
      margin-right: 5px;
    }
    .author-name {
      line-height: 24px;
      font-size: 12px;
    }
    .ops-area {
      float: right;
      :deep(.anticon) {
        line-height: 24px;
        opacity: 0.5;
        &:hover {
          opacity: 1;
          color: rgb(235, 10, 47);
        }
      }
      .count {
        line-height: 24px;
        margin-left: 5px;
      }
      .mr10 {
        margin-right: 10px;
      }
      .pointer {
        cursor: pointer;
      }
    }
  }

  .edit-container {
    z-index: 999;
    width: 330px;
    background: rgba(13, 10, 49, 0.9);
    position: absolute;
    height: 24px;
    text-align: center;
    display: none;
    .icon {
      line-height: 24px;
      color: rgb(255, 255, 255);
      &:hover {
        color: red;
      }
    }
  }
}
</style>
