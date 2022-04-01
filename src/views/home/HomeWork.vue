<template>
  <div class="home-work">
    <div class="top-container">
      <div class="home-top">
        <div class="avatar-container">
          <a-avatar
            :src="wrapper"
            :size="130"
            class="avatar-wrapper"
            shape="square"
          ></a-avatar>
          <a-avatar
            :src="this.$store.getters.getUser.avatarUrl"
            :size="90"
            class="avatar"
          ></a-avatar>
        </div>
        <div class="info-container">
          <div class="info">
            <span class="title">UserName</span>
            <span class="vertical-divider">|</span>
            <span>0点赞</span>
          </div>
          <div class="menu-container">
            <a-menu
              v-model:selectedKeys="current"
              mode="horizontal"
              class="menu"
            >
              <a-menu-item key="mail">
                <span>图片库</span>
              </a-menu-item>
              <a-menu-item key="app">
                <span>Gif库</span>
              </a-menu-item>
              <a-menu-item key="alipay">
                <span>矢量库</span>
              </a-menu-item>
              <a-menu-item key="coll">
                <span>收藏</span>
              </a-menu-item>
            </a-menu>
          </div>
        </div>
        <div class="ops-container">
          <div class="icon-container add" v-if="state.isRouteWork">
            <svg-icon
              iconClass="add"
              class="icon"
              @click="openModal"
            ></svg-icon>
          </div>
          <div class="icon-container share">
            <svg-icon iconClass="share" class="icon"></svg-icon>
          </div>
          <div class="icon-container reward">
            <svg-icon iconClass="reward" class="icon"></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <a-modal
      :visible="state.addLibraryModalVisible"
      title="添加库"
      :footer="null"
      @cancel="closeModal"
    >
      <a-form
        labelAlign="right"
        :labelCol="{ span: 4 }"
        :wrapperCol="{ span: 8 }"
        :model="state.library"
        :rules="rules"
        @finish="addLibrarySubmit"
      >
        <a-form-item label="库名" name="lbName">
          <a-input v-model:value="state.library.lbName"></a-input>
        </a-form-item>
        <a-form-item label="库类型" name="lbType">
          <a-select
            v-model:value="state.library.lbType"
            :options="selectOp"
          ></a-select>
        </a-form-item>
        <a-form-item
          label="库描述"
          :wrapperCol="{ span: 20 }"
          name="lbDescription"
        >
          <a-textarea v-model:value="state.library.lbDescription"></a-textarea>
        </a-form-item>
        <a-form-item :wrapperCol="{ span: 24 }" style="text-align: right">
          <a-button type="primary" htmlType="submit" style="margin-right: 10px"
            >提交</a-button
          >
          <a-button htmlType="submit" @click="closeModal">取消</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { SelectTypes } from "ant-design-vue/es/select";
import wrapper from "@/assets/images/avatar-wrapper.png";
import SvgIcon from "@/components/common/SvgIcon.vue";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { useStore } from "vuex";
import { onBeforeRouteUpdate, RouteLocationNormalized } from "vue-router";

export default defineComponent({
  name: "home-work",
  props: {},
  components: { SvgIcon },
  setup() {
    const store = useStore();
    const state = reactive({
      addLibraryModalVisible: false,
      library: {
        lbName: "",
        lbType: undefined,
        lbDescription: "",
      },
      isRouteWork: true,
    });
    const libraryInit = () => {
      state.library = {
        lbName: "",
        lbType: undefined,
        lbDescription: "",
      };
    };
    const closeModal = () => {
      state.addLibraryModalVisible = false;
    };
    const openModal = () => {
      libraryInit();
      state.addLibraryModalVisible = true;
    };
    const addLibrarySubmit = async (): Promise<void> => {
      let formData = new FormData();
      formData.append("library", JSON.stringify(state.library));
      formData.append("id", JSON.stringify(store.state.user.id));
      let data: any = await service.post(urls.addLibrary, formData);
      console.log(data);
    };
    const rules = {
      lbName: [
        { required: true, message: "请输入库名", trigger: "change" },
        { max: 16, message: "库名不能超过16个字符", trigger: "change" },
      ],
      lbType: [
        {
          type: "number",
          required: true,
          message: "请选择库类型",
          trigger: "change",
        },
      ],
      lbDescription: [
        { required: true, message: "请输入库描述", trigger: "change" },
        { max: 64, message: "库名不能超过64个字符", trigger: "change" },
      ],
    };
    const selectOp = ref<SelectTypes["options"]>([
      {
        label: "图片库",
        value: 1,
      },
      {
        label: "Gif库",
        value: 2,
      },
      {
        label: "矢量库",
        value: 3,
      },
    ]);

    onBeforeRouteUpdate((to: RouteLocationNormalized) => {
      state.isRouteWork = to.fullPath === "/work";
    });
    return {
      state,
      wrapper,
      closeModal,
      openModal,
      rules,
      addLibrarySubmit,
      selectOp,
    };
  },
});
</script>

<style scoped lang="less">
@base-width: 1160px;
.home-work {
  background-color: rgb(252, 252, 252);
  min-height: 960px;
  .top-container {
    background-color: rgb(9, 7, 35);
    .home-top {
      height: 200px;
      width: @base-width;
      margin: 0 auto;
      color: #ffffff;
      display: flex;
      align-items: flex-end;
      .avatar-container {
        height: 200px;
        width: 130px;
        position: relative;
        .avatar-wrapper {
          position: absolute;
          z-index: 9999;
          bottom: 0px;
          left: 0px;
        }
        .avatar {
          position: absolute;
          bottom: 25px;
          left: 20px;
        }
      }
      .info-container {
        height: 130px;
        width: 854px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .info {
          padding-left: 20px;
          font-size: 16px;
          font-weight: 800;
          .vertical-divider {
            margin: 0 10px;
          }
        }
        .menu-container {
          :deep(.ant-menu) {
            color: #a6a5ad;
            font-weight: 800;
            background-color: rgb(9, 7, 35);
            border-bottom: none;
          }
          :deep(.ant-menu-item) {
            &:hover {
              color: #ffffff;
            }
            &::after {
              border-bottom: none;
            }
          }
          :deep(.ant-menu-item-selected) {
            color: #ffffff;
            &::after {
              border-bottom: 2px red solid;
            }
          }
        }
      }
      .ops-container {
        position: relative;
        top: 24px;
        display: flex;
        .icon-container {
          height: 48px;
          width: 48px;
          text-align: center;
          border-radius: 50%;
        }
        .add {
          background-color: #ff0000;
          margin-right: 16px;
        }
        .share {
          background-color: #64b532;
          margin-right: 16px;
        }
        .reward {
          background-color: #ffa000;
        }
        .icon {
          font-size: 36px;
          height: 48px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
