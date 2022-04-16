<template>
  <div class="image-card">
    <div class="image-wrapper">
      <img :src="image.url" class="image" />
    </div>
    <span class="icon-name">
      <span>{{ image.imgName }}</span>
    </span>
    <div class="icon-cover">
      <DownloadOutlined @click="download" class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DownloadOutlined } from "@ant-design/icons-vue";
import { downloadIamge } from "@/utils/utils";
export default defineComponent({
  name: "",
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const download = () => {
      downloadIamge(props.image.url, props.image.name);
    };
    return { download };
  },
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
      height: 220px;
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
    cursor: pointer;
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
