<template>
  <div class="source">
    <div class="top-container">
      <div class="top-title-container">
        <h1 class="top-title-main">Search Now</h1>
        <span class="top-title-sub">
          Smile收录了超过17,800,800张各式各样表情包
        </span>
      </div>
      <img :src="search" class="top-img" />
    </div>
    <div class="input-container">
      <a-input class="input" placeholder="Search...">
        <template #prefix>
          <div class="icon-container">
            <svg-icon iconClass="search" class="icon"></svg-icon>
          </div>
        </template>
        <template #suffix>
          <div class="vertical-divider"></div>
          <span class="img-type">
            <span class="type-txt">Png</span>
            <a-popover
              :getPopupContainer="(triggerNode) => triggerNode.parentNode"
              placement="bottom"
              trigger="hover"
            >
              <template #content>
                <a-list class="down-list">
                  <a-list-item>Svg</a-list-item>
                  <a-list-item>Gif</a-list-item>
                </a-list>
              </template>
              <svg-icon iconClass="down" class="down"></svg-icon>
            </a-popover>
          </span>
        </template>
      </a-input>
    </div>
    <!-- <a-row>
      <a-col :span="16">
        <a-card class="card-main">
          <div class="icon-area">
            <div
              v-for="(item, index) in state.iconList"
              :key="index"
              class="icon-wrapper"
            >
              <icon-font :iconName="item.iconName"></icon-font>
              <p>{{ item.title }}</p>
            </div>
          </div>
          <div class="works-card-div">
            <works-card></works-card>
          </div>
        </a-card>
      </a-col>
    </a-row> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import search from "@/assets/images/search.png";
import SvgIcon from "@/components/common/SvgIcon.vue";

export default defineComponent({
  name: "SourceLibrary",
  props: {},
  components: { SvgIcon },
  setup() {
    const state = reactive({
      iconList: [
        { title: "热门精选", iconName: "icon-remen" },
        { title: "优秀作者", iconName: "icon-good" },
        { title: "其他暂定", iconName: "icon-biaoqingbao" },
      ],
    });
    return { state, search };
  },
});
</script>

<style scoped lang="less">
@base: 48px;
.font {
  color: #0d0c22;
  font-weight: 800;
}
.source {
  .top-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(253, 80, 126);
    height: 360px;
    text-align: center;
    position: relative;
    .top-title-container {
      z-index: 999;
      .top-title-main {
        font-size: 48px;
        font-weight: 700;
        line-height: 56px;
        color: #ffffff;
      }
      .top-title-sub {
        font-size: 18px;
        color: #ffffff;
        line-height: 32px;
      }
    }
    .top-img {
      position: absolute;
      height: 360px;
    }
  }
  .input-container {
    :deep(.ant-input-affix-wrapper) {
      border: none;
    }
    text-align: center;
    position: relative;
    .input {
      position: relative;
      height: 64px;
      width: 628px;
      border-radius: 8px;
      bottom: 32px;
      box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.06);
      .icon-container {
        width: @base;
        height: @base;
        text-align: center;
        color: rgba(0, 0, 0, 0.6);
        .icon {
          width: 20px;
          height: 100%;
        }
      }
      .vertical-divider {
        height: 50%;
        width: 2px;
        margin-right: 24px;
        background: #e7e7e9;
      }
      .img-type {
        .font();
        .type-txt {
          margin-right: 48px;
        }
        .down {
          margin-right: 6px;
          &:focus {
            outline: none;
          }
        }
        .down-list {
          width: 80px;
          .font();
          :deep(.ant-list-item) {
            justify-content: center;
            cursor: pointer;
            &:hover {
              background: #e7e7e9;
            }
          }
        }
      }
    }
    :deep(.ant-input) {
      font-size: 16px;
    }
  }
  .card-main {
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    min-height: 500px;
    .icon-area {
      padding: 0 20%;
      display: flex;
      justify-content: space-around;
      .icon-wrapper {
        :deep(.anticon) {
          font-size: 64px;
        }
      }
    }
    .works-card-div {
      display: flex;
    }
  }
}
</style>
