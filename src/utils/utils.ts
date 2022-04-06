function getBase64(img: Blob, callback: (base64Url: string) => void): void;
function getBase64(file: File): Promise<unknown>;
function getBase64(
  item: Blob | File,
  callback?: (base64Url: string) => void
): Promise<unknown> | void {
  if (item instanceof Blob && callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(item);
  }
  if (item instanceof File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
}

function downloadIamge(imgsrc: string, name: string): void {
  //下载图片地址和图片名
  const image = new Image();
  // 解决跨域 Canvas 污染问题
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    const canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext("2d");
    if (context) {
      context.drawImage(image, 0, 0, image.width, image.height);
    }
    const url = canvas.toDataURL("image/png"); //得到图片的base64编码数据

    const a = document.createElement("a"); // 生成一个a元素
    const event = new MouseEvent("click"); // 创建一个单击事件
    a.download = name || "photo"; // 设置图片名称
    a.href = url; // 将生成的URL设置为a.href属性
    a.dispatchEvent(event); // 触发a的单击事件
  };
  image.src = imgsrc;
}

export { getBase64, downloadIamge };
