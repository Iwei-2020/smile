<template>
  <div class="my-avatar">
    <div class="flex">
      <a-upload
        :before-upload="beforeUpload"
        name="file"
        v-model:avatar="state.avatarList"
        :showUploadList="false"
        :action="uploadUrl"
        @change="handleChange"
      >
        <a-button
          type="primary"
          shape="circle"
          style="width: 64px; height: 64px"
        >
          选择头像
        </a-button>
      </a-upload>
      <a-avatar
        :size="64"
        :src="this.$store.getters.getUser.avatarUrl"
      ></a-avatar>
      <a-button type="primary" shape="circle" style="width: 64px; height: 64px">
        添加挂件
      </a-button>
    </div>
    <div class="title">
      <span>默认头像</span>
    </div>
    <div v-if="state.defaultAvatarList">
      <div
        class="default-avatar-area"
        v-for="(_, i) in times(4, noop)"
        :key="i"
      >
        <a-row class="default-avatar-row">
          <a-col
            v-for="(url, j) in state.defaultAvatarList.slice(
              i * 4,
              (i + 1) * 4
            )"
            :span="6"
            :key="j"
          >
            <div class="avatar-div" @click="() => changeAvatar(url)">
              <a-avatar :src="url" :size="64"> </a-avatar>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { message } from "ant-design-vue";
import { FileInfo, FileItem, User } from "@/interface/interface";
import { useStore } from "vuex";
import service from "@/utils/https";
import urls from "@/utils/urls";
import { noop, times } from "lodash";

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
}

export default defineComponent({
  name: "MyAvatar",
  props: {},
  components: {},
  setup() {
    const store = useStore();
    const state = reactive({
      loading: false,
      imageUrl: "",
      defaultAvatarList: [],
    });
    const beforeUpload = (file: FileItem) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("仅仅支持JPG/PNG格式的图片");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("图片大小不能超过2M");
      }
      return isJpgOrPng && isLt2M;
    };
    const handleChange = (info: FileInfo) => {
      if (info.file.status === "uploading") {
        state.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (base64Url: string) => {
          state.imageUrl = base64Url;
          state.loading = false;
        });
      }
      if (info.file.status === "error") {
        state.loading = false;
        message.error("upload error");
      }
    };
    const getDefaultAvatar = async (): Promise<void> => {
      state.defaultAvatarList = await service.get(urls.getDefaultAvatar);
    };
    let { id } = store.state.user;
    const uploadUrl = `http://localhost:3001/api/upload/avatar/${id}`;
    onMounted(getDefaultAvatar);
    const changeAvatar = async (url: string): Promise<void> => {
      let user: User;
      let formData = new FormData();
      formData.append("url", url);
      formData.append("id", store.state.user.id);
      user = await service.post(urls.changeAvatar, formData);
      if (user) {
        store.commit("userLogin", user);
        message.success("头像修改成功");
      }
    };
    return {
      state,
      beforeUpload,
      handleChange,
      uploadUrl,
      noop,
      times,
      changeAvatar,
    };
  },
});
</script>

<style scoped lang="less">
.my-avatar {
  .flex {
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
  .default-avatar-area {
    margin-top: 40px;
    .default-avatar-row {
      margin: 20px 0 20px 0;
    }
  }
  .avatar-div {
    width: 64px;
    height: 64px;
    margin: 0 auto;
    border-radius: 50%;
    &:hover {
      background: rgba(101, 101, 101, 0.6);
      cursor: pointer;
    }
  }
  .title {
    margin-top: 40px;
    text-align: center;
    font-weight: bolder;
    font-size: 16px;
  }
}
</style>
