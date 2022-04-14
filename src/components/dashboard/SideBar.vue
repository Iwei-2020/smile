<template>
  <div class="side-bar">
    <span class="title">Smile.io</span>
    <br />
    <span class="sub">It's time to smile</span>
    <div class="avatar-container">
      <a-avatar :size="50" shape="square" style="flex-shrink: 0"></a-avatar>
      <span class="hi">Hi Passion</span>
    </div>
    <div class="side-menu">
      <div class="menu-container">
        <a-menu>
          <a-menu-item key="explore">
            <template #icon>
              <svg-icon iconClass="Icon Explore"></svg-icon>
            </template>
            Explore
          </a-menu-item>
          <a-menu-item key="dashboard">
            <template #icon>
              <svg-icon iconClass="Icon Dashboard"></svg-icon>
            </template>
            Dashboard
          </a-menu-item>
          <a-menu-item key="setting">
            <template #icon>
              <svg-icon iconClass="Icon Setting"></svg-icon>
            </template>
            My Settings
          </a-menu-item>
          <a-menu-item key="calendar">
            <template #icon>
              <svg-icon iconClass="Icon Calendar"></svg-icon>
            </template>
            Manage
          </a-menu-item>
        </a-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SvgIcon from "../common/SvgIcon.vue";

export default defineComponent({
  name: "",
  props: {},
  components: { SvgIcon },
});
</script>

<style scoped lang="less">
.side-bar {
  padding-left: 36px;
  padding-top: 32px;
  .title {
    font-size: 20px;
    margin-top: 24px;
  }
  .sub {
    color: rgba(142, 155, 174, 1);
    font-size: 12px;
    line-height: 18px;
  }
  .avatar-container {
    width: 220px;
    display: flex;
    align-items: center;
    margin-top: 28px;
    .hi {
      margin-left: 18px;
      font-size: 18px;
      font-weight: bolder;
    }
  }
  .side-menu {
    height: 231px;
    width: 220px;
    margin-top: 132px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 34px 68px rgba(13, 46, 97, 0.05);
    border-radius: 15px;
    display: flex;
    align-items: center;
    .menu-container {
      width: 100%;
      padding-left: 36px;
      :deep(.ant-menu-item) {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bolder;
      }
      :deep(.ant-menu-item-icon) {
        width: 24px;
        height: 24px;
      }
      :deep(.ant-menu-item-selected) {
        background-color: #fff;
        color: #6f63f1;
      }
    }
  }
}
</style>
