import Vue from 'vue';
import axios from 'axios';

  // 设置 axios 请求的 baseUrl
  axios.defaults.baseURL = 'https://easy-mock.com/mock/5ceb51b551e3de74af53fe54/imooc/api/';

  /**
   * 设置拦截器，interceptors 的 响应处理，
   * 所有使用 axios 的请求响应, 
   * 在正确返回的情况下都会 优先 进入 第一个回调方法，
   * 在有错误的情况下，都会 优先 进入第二个回调方法。
   */
  axios.interceptors.response.use( (response) => {
    // 统一处理数据，使组件中的请求只获取到需要的业务数据
    return response.data.data;
  }, (error) => {
    // 处理错误的响应
      return Promise.reject(error);
  });

Vue.prototype.$http = axios;