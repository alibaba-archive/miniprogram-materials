import request from 'universal-request';

import config from './config';

const URL_PREFIX = config.URL_PREFIX;

export default {
  async edit (openId, { username }) {
    let user = {};
    try {
      const res = await request({
        url: `${URL_PREFIX}/user/edit`,
        method: 'POST',
        data: {
          openId,
          username
        }
      })
      user = res.data.data;
    } catch (err) {
      console.error(err);
    }
    return user;
  },
  async login (code) {
    const res = await request({
      url: `${URL_PREFIX}/auth/login`,
      method: 'POST',
      data: {
        code
      }
    });
    const { openId } = res.data.data; 
    return openId;
  }
}