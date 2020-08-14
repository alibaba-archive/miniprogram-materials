// 参照 ant design pro
const httpCodeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const miniCodeMessage = {
  11: "无权跨域。",
  12: "网络出错。",
  13: "超时。",
  14: "解码失败。",
  19: "HTTP错误。",
  20: "请求已被停止/服务端限流。",
};

/**
 * 判断状态是否正常
 * @param {number} status
 * @returns {boolean} 状态是否正常
 */
function isStatusSuccess(status) {
  if (status >= 200 && status < 300) {
    return true;
  }
  return false;
}

/**
 *
 * @param {string} url 路径
 * @param {object} options request 额外配置
 * @returns {Promise}
 */
export function request(url, options) {
  return new Promise((resolve, reject) => {
    const requestConfig = {
      url,
      ...options,

      success(response) {
        const { status, data } = response;
        if (isStatusSuccess(status)) {
          resolve(data);
        } else {
          reject({
            error: status,
            errorMessage: data.message || httpCodeMessage[status],
          });
        }
      },
      fail(response) {
        const { error, errorMessage = miniCodeMessage[error] } = response;
        my.showToast({
          type: "exception",
          content: errorMessage,
          duration: 3000,
        });
        reject({
          error,
          errorMessage,
        });
      },
    };

    if (my.request) {
      my.request(requestConfig);
    } else {
      my.httpRequest(requestConfig);
    }
  });
}
