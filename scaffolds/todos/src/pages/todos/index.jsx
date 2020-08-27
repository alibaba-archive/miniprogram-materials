import React, { useState } from 'react';
import { usePageShow, history } from 'ice';
import request from 'universal-request';
import { isWeChatMiniProgram } from 'universal-env';

import todosService from '@/services/todos';
import storageService from '@/services/storage';
import userService from '@/services/user';

import AddButton from '@/components/add-button';
import logo from '@/public/logo.svg';
import styles from './index.module.scss';

const Todos = () => {
  // state
  const [userInfo, setUserInfo] = useState({});
  const [todos, setTodos] = useState([]);

  // handlers
  // auth
  async function login () {
    if (isWeChatMiniProgram) {
      // eslint-disable-next-line
      const res = await wx.login();
      const { code } = res;

      const openId = await userService.login(code);
      await storageService.openId.set(openId);
    }
  };

  // user
  const getUserInfo = async () => {
    // eslint-disable-next-line
    const storedUserInfo = await storageService.userInfo.get();
    if (isWeChatMiniProgram && !storedUserInfo) {
      // eslint-disable-next-line
      const res = await wx.getUserInfo();
      const userInfo = res.userInfo;

      setUserInfo(userInfo);

      await storageService.userInfo.set(userInfo);
      const openId = await storageService.openId.get();
      await userService.edit(openId, {
        username: userInfo.nickName
      });
    }
  };

  // todos
  const addTodo = async () => {
    if (isWeChatMiniProgram) {
      // eslint-disable-next-line
      wx.redirectTo({
        url: '/pages/add-todo/index'
      });
    } else {
      history.push('add-todo');
    }
  };

  const onTodoChange = async id => {
    let changedContent = {};
    const changedTodos = todos.map(todo => {
      const { id: curId } = todo;
      const { completed } = todo.content;
      if (id === curId) {
        changedContent = {
          ...todo.content,
          completed: id === curId ? !completed : completed
        };
      }

      return {
        ...todo,
        content: {
          ...todo.content,
          completed: id === curId ? !completed : completed
        }
      };
    });

    setTodos(changedTodos);
    await storageService.todos.set(changedTodos);
    const openId = await storageService.openId.get();
    await todosService.edit(id, {
      content: changedContent,
      openId
    });
  };

  async function delTodo (id) {
    const changedTodos = todos.filter(todo => {
      const { id: curId } = todo;
      return id !== curId;
    });

    setTodos(changedTodos);
    await storageService.todos.set(changedTodos);
    await todosService.del(id);
  };

  const initTodos = async () => {
    const openId = await storageService.openId.get();
    const syncedTodos = await todosService.list({ openId });
    const storedTodos = await storageService.todos.get();

    const mergedTodos = syncedTodos || storedTodos || [];

    console.log(storedTodos, syncedTodos, mergedTodos);

    setTodos(mergedTodos);

    await storageService.todos.set(mergedTodos);
  };

  // lifecyle function
  usePageShow(async () => {
    console.log('page show');

    // eslint-disable-next-line
    const storedUserInfo = await storageService.userInfo.get();
    setUserInfo(storedUserInfo || {});

    const openId = await storageService.openId.get();
    if (!openId) {
      await login();
    }

    await initTodos();
  });

  return (
    <div className={styles['page-todos']}>
      <div className={styles.user}>
        <button type='button' open-type="getUserInfo" onClick={getUserInfo} className={styles['login-button']} >
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <img className={styles.avatar} src={userInfo.avatarUrl ? userInfo.avatarUrl : logo} alt="用户头像" />
            <span className={styles.nickname}>{userInfo.nickName ? `${userInfo.nickName}'s` : 'My' } Todo List</span>
          </div>
        </button>
      </div>
      
      <div className={styles['todo-items']}>
        <div className={styles['todo-items-group']}>
          {
            todos.map(todo => (
              <div style={{position: 'relative'}} key={todo.id}>
                <div
                  className={`${styles['todo-item']} ${todo.content.completed ? styles.checked : ''}`}
                  onClick={() => onTodoChange(todo.id)}
                >
                  <checkbox className={styles['todo-item-checkbox']} checked={todo.content.completed} />
                  <span className={styles['todo-item-text']}>{todo.content.text}</span>
                </div>
                <div
                  className={styles['close-wrapper']}
                  onClick={() => delTodo(todo.id)}>
                  <div className={styles.close}/>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className={styles['todo-footer']}>
        <AddButton text="Add Todo" onClickMe={addTodo} />
      </div>
    </div>
  );
};

export default Todos;
