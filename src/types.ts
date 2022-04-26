export interface UploadParams {
  url: string;
  fieldname: string;
  method: any;
  headers?: { [key: string]: any };
  multiple?: boolean;
  signal?: AbortSignal;
}

export interface Task {
  id: string;
  file?: File;
  files?: File[];
  progress: number;
  formattedSize: string;
  status: 'uploading' | 'uploaded' | 'failed';
  httpStatus: number | null;
  responseData: any;
  meta?: { [key: string]: any };
  callback: Function;
  signal?: AbortSignal;
}

export type Uploader = [
  Task[] | [],
  {
    startUploadTask: (
      files: File[] | FileList,
      meta?: { [key: string]: any } | Function,
      callback?: Function
    ) => void;
    retryUploadTask: (id: string) => void;
    removeUploadTask: (id: string) => void;
    clearUploadTasks: () => void;
  }
];
