import React, { useState } from 'react';
import { isWeChatMiniProgram } from 'universal-env';
import { history } from 'ice';

import todosService from '@/services/todos';
import storageService from '@/services/storage';

import AddButton from '@/components/add-button';
import styles from './index.module.scss';

const AddTodo = () => {
  // state
  const [value, setValue] = useState('');

  // handlers
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const add = async () => {
    const openId = await storageService.openId.get();
    const curTodos = await todosService.list({ openId });

    const res = await todosService.add({
      openId,
      content: {
        text: value,
        completed: false
      }
    });

    const { todo } = res.data;

    const newTodos = curTodos.concat(todo);
    storageService.todos.set(newTodos);

    if (isWeChatMiniProgram) {
      // eslint-disable-next-line
      wx.redirectTo({
        url: '/pages/todos/index'
      });
    } else {
      history.push('add-todo');
    }
  };


  return (
    <div className={styles['page-add-todo']}>
      <div className={styles['add-todo']}>
        <input
          className={styles['add-todo-input']}
          placeholder="What needs to be done?"
          value={value}
          onChange={() => {}}
          onInput={onChange} />
      </div>

      <div className={styles['todo-footer']}>
        <AddButton text="Add Todo" onClickMe={add}/>
      </div>
    </div>
  );
};

export default AddTodo;
