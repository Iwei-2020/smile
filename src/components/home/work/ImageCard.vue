<template>
  <div class="image-card">
    <div class="image-wrapper">
      <a-image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        class="image"
      ></a-image>
    </div>
    <span class="icon-name">
      <span>处理中</span>
    </span>
    <div class="icon-cover">
      <DownloadOutlined class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "",
  props: {},
  components: { DownloadOutlined },
});
</script>

<style scoped lang="less">
.image-card {
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  width: 252px;
  height: 278px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.4s;
  position: relative;
  &:hover {
    box-shadow: 1px 1px 10px 2px #ccc;
    .icon-cover {
      top: auto;
      bottom: 0;
      height: auto;
      display: flex !important;
    }
  }
  .image-wrapper {
    margin-top: 18px;
    width: 220px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
      height: auto;
      max-width: 100%;
    }
  }
  .icon-name {
    color: rgb(102, 102, 102);
    height: 40px;
    line-height: 40px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
  .icon-cover {
    width: 100%;
    height: 100%;
    background: rgba(13, 10, 49, 0.9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: none;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 0 0 5px 5px;
    :deep(.anticon) {
      height: 40px;
      width: 100%;
      line-height: 40px;
      font-size: 20px;
      color: #fff;
      &:hover {
        color: red;
      }
    }
  }
}
</style>
