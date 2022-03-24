export interface User {
  id?: number;
  username?: string;
  phone?: string;
  password?: string;
  gender?: number;
  birthday?: Date;
  signature?: string;
  avatarUrl?: string;
  collectionCount?: 0;
  favoritesCount?: 0;
}

export interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}

export interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
