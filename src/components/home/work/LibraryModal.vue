<template>
  <a-modal
    :visible="isVisible"
    title="添加库"
    :footer="null"
    @cancel="changeLibraryModalVisible"
    class="library-modal"
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
      <a-form-item label="添加素材" :wrapperCol="{ span: 20 }" v-if="isUpdate">
        <div class="clearfix">
          <a-upload
            list-type="picture-card"
            v-model:file-list="state.fileList"
            :before-upload="beforeUpload"
            @preview="handlePreview"
          >
            <div v-if="state.fileList.length < 8">
              <plus-outlined />
              <div class="upload-text">Upload</div>
            </div>
          </a-upload>
          <a-modal
            :visible="state.previewVisible"
            :footer="null"
            @cancel="handleCancel"
          >
            <img alt="example" style="width: 100%" :src="state.previewImage" />
          </a-modal>
        </div>
      </a-form-item>
      <a-form-item :wrapperCol="{ span: 24 }" style="text-align: right">
        <a-button type="primary" htmlType="submit" style="margin-right: 10px"
          >提交</a-button
        >
        <a-button @click="changeLibraryModalVisible">取消</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import service from "@/utils/https";
import urls from "@/utils/urls";
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRaw,
  toRefs,
  watch,
  isReactive,
} from "vue";
import { SelectTypes } from "ant-design-vue/es/select";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
import { FileInfo, FileItem, Library } from "@/interface/interface";
import { getBase64 } from "@/utils/utils";
import { PlusOutlined } from "@ant-design/icons-vue";
import emitter from "@/utils/mybus";

export default defineComponent({
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    mode: {
      type: String,
      required: true,
    },
    library: {
      type: Object,
    },
  },
  components: { PlusOutlined },
  emits: ["changeLibraryModalVisible", "updateLibrary"],
  setup(props, context) {
    const { library } = toRefs(props);
    let raw = toRaw(props.library);
    const store = useStore();
    const state = reactive({
      library: {
        lbId: undefined,
        lbName: "",
        lbType: undefined,
        lbDescription: "",
        lbLike: undefined,
        lbWatch: undefined,
        lbCount: undefined,
        lbCreated: "",
      } as Library,
      previewVisible: false,
      fileList: [] as FileItem[],
      previewImage: "" as string | undefined,
    });
    const libraryInit = () => {
      if (props.library) {
        state.library = JSON.parse(JSON.stringify(raw));
      } else {
        state.library = {
          lbId: undefined,
          lbName: "",
          lbType: undefined,
          lbDescription: "",
          lbLike: undefined,
          lbWatch: undefined,
          lbCount: undefined,
          lbCreated: "",
        };
      }
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
    const changeLibraryModalVisible = () => {
      libraryInit();
      context.emit("changeLibraryModalVisible", false);
    };
    const handleChange = ({ fileList: newFileList }: FileInfo) => {
      state.fileList = newFileList;
    };
    const handlePreview = async (file: FileItem) => {
      if (file && !file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string;
      }
      state.previewImage = file.url || file.preview;
      state.previewVisible = true;
    };
    const handleCancel = () => {
      state.previewVisible = false;
    };
    const beforeUpload = (file: FileItem) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }
      return false;
    };
    const isUpdate = props.mode === "update" ? true : false;
    const addLibrarySubmit = async (): Promise<void> => {
      if (!isUpdate) {
        let formData = new FormData();
        formData.append("library", JSON.stringify(state.library));
        formData.append("id", JSON.stringify(store.state.user.id));
        await service.post(urls.addLibrary, formData);
        message.success("创建成功");
        changeLibraryModalVisible();
      } else {
        let formData = new FormData();
        formData.append("library", JSON.stringify(state.library));
        formData.append("id", JSON.stringify(store.state.user.id));
        state.fileList.forEach((file) => {
          console.log(file.name);
          formData.append("files", file.originFileObj);
        });
        await service.post(urls.updateLibrary, formData);
        emitter.emit("updateLibrary", state.library.lbId);
        message.success("更新成功");
        context.emit("updateLibrary", state.library);
        changeLibraryModalVisible();
      }
    };

    watch(library, (newValue: any) => {
      let raw = toRaw(newValue);
      state.library = JSON.parse(JSON.stringify(raw));
    });

    onMounted(() => {
      libraryInit();
    });
    return {
      state,
      rules,
      selectOp,
      addLibrarySubmit,
      changeLibraryModalVisible,
      beforeUpload,
      handleChange,
      handlePreview,
      handleCancel,
      isUpdate,
    };
  },
});
</script>

<style scoped lang="less">
.library-modal {
  .clearfix {
    .upload-text {
      margin-top: 8px;
    }
  }
}
</style>
