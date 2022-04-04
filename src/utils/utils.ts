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

export { getBase64 };
