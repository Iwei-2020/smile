<template>
  <div class="work-card">
    <div class="wrapper">
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
      <svg-icon iconClass="namecard" class="icon-card"></svg-icon>
      <span class="title"> 鸭子表情包 </span>
      <span class="title-right">
        数量
        <span class="count">30</span>
      </span>
    </div>
    <div class="ops-container">
      <a-avatar :size="24" class="avatar"></a-avatar>
      <span class="author-name">passion</span>
      <div class="ops-area">
        <EyeFilled />
        <span class="count">100</span>
        <HeartFilled class="pointer" />
        <span class="count">100</span>
        <StarFilled class="pointer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SvgIcon from "@/components/common/SvgIcon.vue";
import { defineComponent } from "vue";
import search from "@/assets/images/search.png";
import { HeartFilled, EyeFilled, StarFilled } from "@ant-design/icons-vue";

export default defineComponent({
  props: {},
  components: { SvgIcon, HeartFilled, EyeFilled, StarFilled },
  setup() {
    return { search };
  },
});
</script>

<style scoped lang="less">
.work-card {
  background-color: rgb(255, 255, 255);
  width: 330px;
  padding: 24px 15px 15px 15px;
  box-sizing: content-box;
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
        margin-right: 10px;
      }
      .pointer {
        cursor: pointer;
      }
    }
  }
}
</style>
