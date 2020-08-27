import { isWeChatMiniProgram } from 'universal-env';
import MOCK_DATA from './mock';

const storageKey = {
  openId: 'openId',
  todos: 'todos',
  userInfo: 'userInfo'
};

async function getOpenId () {
  if (!isWeChatMiniProgram) {
    // MOCK USER
    return MOCK_DATA.user.openId;
  } else {
    let openId;
    try {
      // eslint-disable-next-line
      const res = await wx.getStorage({
        key: storageKey.openId
      });
      openId = res.data.openId;
    } catch (err) {
      console.error(err);
    }
    return openId;
  }
}

async function setOpenId (openId) {
  // eslint-disable-next-line
  await wx.setStorage({
    key: storageKey.openId,
    data: {
      openId
    }
  });
}

async function getStoredTodos () {
  let todos;
  try {
    // eslint-disable-next-line
    const res = await wx.getStorage({
      key: storageKey.todos
    });
    todos = res.data.todos;
  } catch (err) {
    console.error(err);
  }
  return todos;
}

async function storeTodos (todos) {
  // eslint-disable-next-line
  await wx.setStorage({
    key: storageKey.todos,
    data: {
      todos
    }
  });
}

async function getUserInfo () {
  let userInfo;
  try {
    // eslint-disable-next-line
    const res = await wx.getStorage({
      key: storageKey.userInfo
    });
    userInfo = res.data.userInfo;
  } catch (err) {
    console.error(err);
  }
  return userInfo;
}

async function setUserInfo (userInfo) {
  // eslint-disable-next-line
  await wx.setStorage({
    key: storageKey.userInfo,
    data: {
      userInfo
    }
  });
}

function wxWrapper (func) {
  return async (...args) => {
    if (isWeChatMiniProgram) {
      return await func(...args);
    }
  }
}

export default {
  openId: {
    get: getOpenId,
    set: wxWrapper(setOpenId)
  },
  todos: {
    get: wxWrapper(getStoredTodos),
    set: wxWrapper(storeTodos)
  },
  userInfo: {
    get: wxWrapper(getUserInfo),
    set: wxWrapper(setUserInfo)
  }
};

