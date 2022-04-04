<template>
  <a-modal
    :visible="isVisible"
    @cancel="changeLoginModalVisible"
    :footer="null"
    class="login-modal"
  >
    <a-menu
      mode="horizontal"
      :selectedKeys="[menuCurrentKey]"
      @select="handleMenuSelect"
      class="top-menu"
    >
      <a-menu-item key="login">登录</a-menu-item>
      <a-menu-item key="register">注册</a-menu-item>
    </a-menu>
    <a-form
      labelAlign="right"
      :labelCol="{ span: 6, offset: 0 }"
      :wrapperCol="{ span: 12, offset: 0 }"
      :model="state.userForm"
      :rules="state.rules"
      @finish="submit"
    >
      <a-form-item label="手机号" name="phone">
        <a-input v-model:value="state.userForm.phone"></a-input>
      </a-form-item>
      <a-form-item label="密码" name="password">
        <a-input
          v-model:value="state.userForm.password"
          type="password"
        ></a-input>
      </a-form-item>
      <a-form-item label="验证码" v-if="mode === 'register'" name="checkCode">
        <a-input
          style="width: 40%"
          v-model:value="state.userForm.checkCode"
        ></a-input>
        <a-button type="primary" style="float: right" @click="sendCheckCode"
          >发送验证码</a-button
        >
      </a-form-item>
      <a-form-item :colon="false" label=" " v-if="mode === 'login'">
        <a-checkbox>记住密码</a-checkbox>
      </a-form-item>
      <a-form-item :colon="false" label=" ">
        <a-button type="primary" html-type="submit">{{
          mode === "register" ? "注册" : "登录"
        }}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef } from "vue";
import { RuleObject } from "ant-design-vue/es/form/interface";
import service from "@/utils/https";
import urls from "@/utils/urls";
import store from "@/store";
import { message } from "ant-design-vue";

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
    let menuCurrentKey = toRef(props, "mode");
    const validatePhone = async (_rule: RuleObject, value: string) => {
      const phoneCheckReg =
        /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if (phoneCheckReg.test(value)) {
        return Promise.resolve();
      } else {
        return Promise.reject("请输入正确的手机号");
      }
    };
    const userFormInit = () => {
      state.userForm = {
        phone: "",
        password: "",
        checkCode: "",
      };
    };
    const state = reactive({
      userForm: {
        phone: "",
        password: "",
        checkCode: "",
      },
      rules: {
        phone: [
          {
            required: true,
            validator: validatePhone,
            trigger: "change",
          },
        ],
        password: [
          {
            required: true,
            trigger: "change",
            min: 6,
            max: 16,
            message: "密码必须是6-16位",
          },
        ],
        checkCode: {
          required: true,
          trigger: "change",
          len: 6,
          message: "请输入6位验证码",
        },
      },
    });

    const handleMenuSelect = (item: any) => {
      userFormInit();
      context.emit("changeModalMode", item.key);
      menuCurrentKey = item.key;
    };

    const submit = async (): Promise<void> => {
      let data: any;
      if (props.mode === "login") {
        data = await service.post(urls.login, state.userForm);
      } else {
        data = await service.post(urls.register, state.userForm);
      }
      let { user, token } = data;
      if (user) {
        // todo save to store
        context.emit("changeLoginModalVisible", false);
        store.commit("userLogin", user);
      }
      if (token) {
        store.commit("setToken", token);
      }
      userFormInit();
    };

    const sendCheckCode = () => {
      message.success("验证码已发送");
    };

    const changeLoginModalVisible = () => {
      userFormInit();
      context.emit("changeLoginModalVisible", false);
    };

    return {
      state,
      handleMenuSelect,
      submit,
      menuCurrentKey,
      sendCheckCode,
      changeLoginModalVisible,
    };
  },
});
</script>

<style scoped lang="less">
.login-modal {
  .top-menu {
    margin-bottom: 40px;
  }
}
</style>
