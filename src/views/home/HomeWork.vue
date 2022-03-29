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
          <div class="icon-container add">
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
        <a-modal
          :visible="state.addLibraryModalVisible"
          title="添加库"
          cancelText="取消"
          okText="确定"
          @cancel="closeModal"
        >
          <a-form
            labelAlign="right"
            :labelCol="{ span: 4 }"
            :wrapperCol="{ span: 8 }"
          >
            <a-form-item label="库名">
              <a-input></a-input>
            </a-form-item>
            <a-form-item label="库类型">
              <a-select>
                <a-select-option key="1" value="">图片库</a-select-option>
                <a-select-option key="2" value="">Gif库</a-select-option>
                <a-select-option key="3" value="">矢量库</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="库描述" :wrapperCol="{ span: 20 }">
              <a-textarea></a-textarea>
            </a-form-item>
          </a-form>
        </a-modal>
      </div>
    </div>

    <div class="home-card-container">
      <div class="grid-wrapper">
        <source-card></source-card>
        <source-card></source-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import wrapper from "@/assets/images/avatar-wrapper.png";
import SvgIcon from "@/components/common/SvgIcon.vue";
import SourceCard from "@/components/home/work/SourceCard.vue";

export default defineComponent({
  name: "home-work",
  props: {},
  components: { SvgIcon, SourceCard },
  setup() {
    const state = reactive({
      addLibraryModalVisible: false,
    });
    const closeModal = () => {
      state.addLibraryModalVisible = false;
    };
    const openModal = () => {
      state.addLibraryModalVisible = true;
    };
    return { state, wrapper, closeModal, openModal };
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
        margin: 0 auto;
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

  .home-card-container {
    width: @base-width;
    margin: 0 auto;
    .grid-wrapper {
      padding-top: 50px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
      margin-bottom: 20px;
      grid-gap: 45px 40px;
    }
  }
}
</style>
