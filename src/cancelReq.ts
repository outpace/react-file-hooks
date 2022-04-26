import axios from 'axios';

const controller = new AbortController();

const form = new FormData();

form.append('file', new File(['foo omg'.repeat(10000)], 'file.txt'));

const url = 'https://file.io?expires=1w';
const headers = {
  'Content-Type': 'multipart/form-data',
};
const method = 'POST';

axios
  .request({
    url,
    headers,
    method,
    data: form,
    onUploadProgress: ({ total, loaded }) => {
      const progress = Math.round((loaded / total) * 100);
      const status = 'uploading';
      console.log({ progress, status });
    },
  })
  .then(console.log)
  .catch(console.error);

setTimeout(() => {
  controller.abort();
}, 100);

export { method };
