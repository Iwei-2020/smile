<template>
  <div>
    <a-modal
      v-model:visible="state.visible"
      title="登录"
      @ok="handleOk"
      :footer="null"
    >
      <a-form
        labelAlign="right"
        :labelCol="{ span: 6, offset: 0 }"
        :wrapperCol="{ span: 12, offset: 0 }"
      >
        <a-form-item label="用户名">
          <a-input></a-input>
        </a-form-item>
        <a-form-item label="密码">
          <a-input></a-input>
        </a-form-item>
        <a-form-item :colon="false" label=" ">
          <a-checkbox>记住密码</a-checkbox>
          <span style="float: right">注册</span>
        </a-form-item>
        <a-form-item :colon="false" label=" ">
          <a-button type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      visible: false,
      formData: {
        username: "",
        password: "",
      },
    });

    return { state };
  },
});
</script>

<style scoped lang="less"></style>
