export interface User {
  id?: number;
  username?: string;
  phone?: string;
  certificate?: string;
  userRole?: number;
  gender?: number;
  birthday?: Date;
  signature?: string;
  avatarUrl?: string;
  likedCount?: 0;
  likeLib?: string;
  starLib?: string;
}

export interface Library {
  lbId?: number;
  lbName?: string;
  lbCreator?: string;
  lbType?: number;
  lbDescription?: string;
  lbLike?: number;
  lbWatch?: number;
  lbCount?: number;
  lbCreated?: string;
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
  preview?: string;
  percent?: number;
}

export interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}
