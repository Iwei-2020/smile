<template>
  <a-card hoverable class="image-card">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template class="ant-card-actions" #actions>
      <div key="heart">
        <HeartFilled class="pointer" />
        <span>163</span>
      </div>
      <div key="eye">
        <EyeFilled />
        <span>22.2k</span>
      </div>
      <div key="star">
        <StarFilled class="pointer" />
      </div>
    </template>
    <a-card-meta title="小熊软糖" description="这是一组可爱表情包">
      <template #avatar>
        <a-avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HeartFilled, EyeFilled, StarFilled } from "@ant-design/icons-vue";

export default defineComponent({
  name: "",
  props: {},
  components: {
    HeartFilled,
    EyeFilled,
    StarFilled,
  },
  setup() {
    return { };
  },
});
</script>

<style scoped lang="less">
.image-card {
  width: 300px;
  margin-left: 40px;
  :deep(.anticon) {
    margin-right: 6px;
  }
  :deep(.ant-card-actions > li > span:hover) {
    color: rgb(235, 10, 47);
    cursor: default;
  }
  .pointer {
    cursor: pointer;
  }
}
</style>
