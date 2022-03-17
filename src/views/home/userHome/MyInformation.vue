<template>
  <div>
    <a-form>
      <a-form-item label="昵称">
        <a-input style="width: 200px"></a-input>
      </a-form-item>
      <a-form-item label="手机号">18379995325</a-form-item>
      <a-form-item label="性别">
        <a-radio-group v-model:value="state.user.gender">
          <a-radio value="M">男</a-radio>
          <a-radio value="F">女</a-radio>
          <a-radio value="N">保密</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="出生日期">
        <a-date-picker placeholder="请选择年份" format="YYYY-MM-DD" />
      </a-form-item>
      <a-form-item label="我的签名">
        <a-textarea
          placeholder="设置您的签名- ( ゜- ゜)つロ"
          :maxlength="36"
        ></a-textarea>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="btn-area">保存</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "MyInformation",
  props: {},
  components: {},
  setup() {
    const state = reactive({
      user: {
        gender: "M",
      },
      current: ["my-information"],
    });
    return { state };
  },
});
</script>

<style scoped lang="less"></style>
