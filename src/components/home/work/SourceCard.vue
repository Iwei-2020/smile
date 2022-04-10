<template>
  <div class="source-card">
    <div
      :class="state.wrapperClass"
      @click="this.$emit('goMyLibrary', state.library.lbId)"
    >
      <div
        class="img-container"
        v-for="(image, index) in state.images"
        :key="index"
      >
        <img :src="image.url" class="img-area" />
      </div>
    </div>
    <div class="title-container">
      <svg-icon iconClass="name" class="icon-card"></svg-icon>
      <span class="title"> {{ state.library.lbName }} </span>
      <span class="title-right">
        数量
        <span class="count">{{ state.library.lbCount }}</span>
      </span>
    </div>
    <div class="ops-container">
      <span v-if="!isAuthor">
        <a-avatar
          :size="36"
          class="avatar"
          :src="state.author && state.author.avatarUrl"
        ></a-avatar>
        <span class="author-name">passion</span>
      </span>
      <span class="ops-area">
        <EyeFilled style="cursor: auto" />
        <span class="count mr10">{{ state.library.lbWatch }}</span>
        <HeartFilled
          :class="{ pointer: true, red: true, liked: isLike }"
          @click="() => handleLikeOrStar('like')"
        />
        <span :class="{ count: true, mr10: !isAuthor }">{{
          state.library.lbLike
        }}</span>
        <StarFilled
          v-if="!isAuthor"
          :class="{ pointer: true, yellow: true, star: isStar }"
          @click="() => handleLikeOrStar('star')"
        />
      </span>
    </div>
    <div
      v-if="isAuthor"
      class="edit-container"
      @click="() => changeLibraryModalVisible(true)"
    >
      <EditFilled class="icon" />
    </div>
    <library-modal
      :isVisible="state.changeLibraryModalVisible"
      @changeLibraryModalVisible="changeLibraryModalVisible"
      @updateLibrary="updateLibrary"
      mode="update"
      :library="state.library"
    ></library-modal>
  </div>
</template>

<script lang="ts">
import SvgIcon from "@/components/common/SvgIcon.vue";
import { defineComponent, reactive, toRefs, watch } from "vue";
import search from "@/assets/images/search.png";
import LibraryModal from "./LibraryModal.vue";
import {
  HeartFilled,
  EyeFilled,
  StarFilled,
  EditFilled,
} from "@ant-design/icons-vue";
import { Library } from "@/interface/interface";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { useStore } from "vuex";

export default defineComponent({
  props: {
    library: {
      type: Object,
      required: true,
    },
    images: {
      type: Array,
      default: () => [],
    },
    isAuthor: {
      type: Boolean,
      default: false,
      required: true,
    },
    author: {
      type: Object,
    },
    isLike: {
      type: Boolean,
      default: false,
    },
    isStar: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SvgIcon,
    HeartFilled,
    EyeFilled,
    StarFilled,
    EditFilled,
    LibraryModal,
  },
  emits: ["goMyLibrary", "changeLikeOrStar"],
  setup(props, context) {
    const { images, author, isLike, isStar } = toRefs(props);
    const store = useStore();
    const state = reactive({
      library: props.library,
      changeLibraryModalVisible: false,
      images: [],
      wrapperClass: { wrapper: true } as any,
      author: props.author,
    });
    const changeLibraryModalVisible = (visible: boolean) => {
      state.changeLibraryModalVisible = visible;
    };
    const updateLibrary = (library: Library) => {
      state.library = library;
    };
    const handleLikeOrStar = async (starOrLike: string): Promise<void> => {
      let formData = new FormData();
      formData.append("user_id", store.getters.getUser.id);
      formData.append("lbId", state.library.lbId);
      formData.append("type", starOrLike);
      if (starOrLike === "star") {
        formData.append("ops", isStar.value ? "0" : "1");
      } else if (starOrLike === "like") {
        formData.append("ops", isLike.value ? "0" : "1");
      }
      await service.post(urls.likeOrStar, formData);
      context.emit("changeLikeOrStar", {
        lbId: state.library.lbId,
        type: starOrLike,
      });
    };
    watch(images, (newValue: any) => {
      state.images = newValue;
      state.wrapperClass.backImage = state.images.length === 0;
    });
    watch(author, (newValue: any) => {
      state.author = newValue;
    });

    return {
      search,
      state,
      changeLibraryModalVisible,
      updateLibrary,
      handleLikeOrStar,
    };
  },
});
</script>

<style scoped lang="less">
.backImage {
  background-image: url(../../../assets/images/empty.png);
  background-size: 212px;
  background-position: center;
  background-repeat: no-repeat;
}
.source-card {
  cursor: pointer;
  transition: box-shadow 0.4s, transform 0.4s;
  background-color: rgb(255, 255, 255);
  width: 330px;
  padding: 24px 15px 15px 15px;
  box-sizing: content-box;
  position: relative;
  &:hover {
    transform: translateY(-2%);
    box-shadow: 1px 1px 10px 2px #ccc;
    .edit-container {
      display: block;
    }
  }
  .wrapper {
    min-height: 212px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
    grid-gap: 32px;
    .img-container {
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
      .img-area {
        height: 100%;
      }
      img {
        image-rendering: -webkit-optimize-contrast;
      }
    }
  }
  .title-container {
    height: 30px;
    margin-top: 10px;
    .icon-card {
      line-height: 30px;
    }
    .title {
      line-height: 30px;
      font-size: 12px;
    }
    .title-right {
      float: right;
      font-size: 12px;
      line-height: 30px;
      .count {
        color: red;
      }
    }
  }
  .ops-container {
    margin-top: 5px;
    .avatar {
      margin-right: 5px;
    }
    .author-name {
      line-height: 24px;
      font-size: 12px;
    }
    .ops-area {
      float: right;
      :deep(.anticon) {
        font-size: 16px;
        line-height: 36px;
        opacity: 0.5;
      }
      .red {
        &:hover {
          opacity: 1;
          color: rgb(235, 10, 47);
        }
      }
      .yellow {
        &:hover {
          opacity: 1;
          color: rgb(233, 233, 10);
        }
      }
      .liked {
        opacity: 1;
        color: rgb(235, 10, 47);
      }
      .star {
        opacity: 1;
        color: rgb(233, 233, 10);
      }
      .count {
        line-height: 24px;
        margin-left: 5px;
      }
      .mr10 {
        margin-right: 10px;
      }
      .pointer {
        cursor: pointer;
      }
    }
  }

  .edit-container {
    z-index: 999;
    width: 330px;
    background: rgba(13, 10, 49, 0.9);
    position: absolute;
    height: 24px;
    text-align: center;
    display: none;
    .icon {
      line-height: 24px;
      color: rgb(255, 255, 255);
      &:hover {
        color: red;
      }
    }
  }
}
</style>
