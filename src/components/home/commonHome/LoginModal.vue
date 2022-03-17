<template>
  <div>
    <a-modal
      :visible="isVisible"
      @ok="handleOk"
      @cancel="this.$emit('changeLoginModalVisible', false)"
      :footer="null"
    >
      <template #title>
        <a-menu
          mode="horizontal"
          :selectedKeys="state.menuCurrentKey"
          @select="handleMenuSelect"
        >
          <a-menu-item key="login">登录</a-menu-item>
          <a-menu-item key="register">注册</a-menu-item>
        </a-menu>
      </template>
      <a-form
        labelAlign="right"
        :labelCol="{ span: 6, offset: 0 }"
        :wrapperCol="{ span: 12, offset: 0 }"
        :model="state.userForm"
      >
        <a-form-item label="手机号" name="phone">
          <a-input v-model:value="state.userForm.phone"></a-input>
        </a-form-item>
        <a-form-item label="密码" name="password">
          <a-input v-model:value="state.userForm.password"></a-input>
        </a-form-item>
        <a-form-item label="验证码" v-if="mode === 'register'">
          <a-input></a-input>
        </a-form-item>
        <a-form-item :colon="false" label=" ">
          <a-checkbox>记住密码</a-checkbox>
        </a-form-item>
        <a-form-item :colon="false" label=" ">
          <a-button type="primary" @click="submit">{{
            mode === "register" ? "注册" : "登录"
          }}</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import service from "@/utils/https";
import urls from "@/utils/urls";
export default defineComponent({
  name: "",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String, // login | register
      default: "login",
    },
  },
  emits: ["changeLoginModalVisible", "changeModalMode"],
  components: {},
  setup(props, context) {
    const state = reactive({
      menuCurrentKey: [props.mode],
      userForm: {
        phone: "",
        password: "",
      },
    });
    const handleMenuSelect = (item: any) => {
      context.emit("changeModalMode", item.key);
      state.menuCurrentKey.pop();
      state.menuCurrentKey.push(item.key);
    };
    const submit = async (): Promise<void> => {
      let data: any = "";
      console.log(state.userForm);
      if (props.mode === "register") {
        data = await service.post(urls.register, state.userForm);
        console.log(data);
      } else {
        data = await service.post(urls.login, state.userForm);
        console.log(data);
      }
      // todo save to store
    };
    return { state, handleMenuSelect, submit };
  },
});
</script>

<style scoped lang="less"></style>
