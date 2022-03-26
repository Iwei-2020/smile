<template>
  <a-form
    class="my-information"
    :labelCol="{ span: 6 }"
    labelAlign="left"
    @finish="updateUser"
    :model="this.$store.getters.getUser"
  >
    <a-form-item label="昵称">
      <a-input
        style="width: 200px"
        v-model:value="this.$store.getters.getUser.username"
        @change="(e) => handleInputChange(formProp[0], e.target.value)"
      ></a-input>
    </a-form-item>
    <a-form-item label="手机号">{{
      this.$store.getters.getUser.phone
    }}</a-form-item>
    <a-form-item label="性别">
      <a-radio-group
        v-model:value="this.$store.getters.getUser.gender"
        @change="(e) => handleInputChange(formProp[1], e.target.value)"
      >
        <a-radio :value="1">男</a-radio>
        <a-radio :value="2">女</a-radio>
        <a-radio :value="0">保密</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      label="出生日期"
      v-model:value="this.$store.getters.getUser.birthday"
      @change="(e) => handleInputChange(formProp[2], e.target.value)"
    >
      <a-date-picker placeholder="请选择年份" format="YYYY-MM-DD" />
    </a-form-item>
    <a-form-item label="我的签名">
      <a-textarea
        placeholder="设置您的签名- ( ゜- ゜)つロ"
        :maxlength="36"
        v-model:value="this.$store.getters.getUser.signature"
        @change="(e) => handleInputChange(formProp[3], e.target.value)"
      ></a-textarea>
    </a-form-item>
    <a-form-item label=" " :colon="false">
      <a-button type="primary" html-type="submit">保存</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { User } from "@/interface/interface";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { message } from "ant-design-vue";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MyInformation",
  props: {},
  components: {},
  setup() {
    let store = useStore();
    const updateUser = async (): Promise<void> => {
      let user: User;
      user = await service.post(urls.update, store.state.user);
      if (user) {
        store.commit("userLogin", user);
        message.success("保存成功");
      }
    };
    const handleInputChange = (type: string, value: string) => {
      store.commit("userChange", { type: type, value: value });
    };
    const formProp = ["username", "gender", "birthday", "signature"];
    return { updateUser, handleInputChange, formProp };
  },
});
</script>

<style scoped lang="less"></style>
