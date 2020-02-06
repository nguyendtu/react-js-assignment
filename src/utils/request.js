import { extend } from 'umi-request';

const codeMessage = {
  200: 'Success',
  // 201: '',
  // 202: '',
  // 204: '',
  // 400: '',
  403: 'Permission denied.',
  404: 'Not found',
  // 406: '',
  // 410: '',
  // 422: '',
  500: '500. Server error',
  502: '502. Server error',
  503: '503. Server error',
  504: '504. Server error',
};

const errorHandler = error => {
  const { response } = error;
  return response;
};

const request = extend({
  errorHandler,
  credentials: 'include',
});

// request interceptor, change url or options.
request.interceptors.request.use((url, options) => {
  console.log('line 32 - url', url, options)
  return {
    url,
    options: {
      ...options,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
});

export default request;
