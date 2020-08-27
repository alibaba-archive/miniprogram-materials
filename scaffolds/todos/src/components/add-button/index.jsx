import React from 'react';
import styles from './index.module.scss';

function AddButton (props) {
  const { text, onClickMe } = props;

  return (
    <button type='button' className={styles['add-button']} onClick={onClickMe}>
      <span className={styles['add-icon']}>+</span>
      <span>{text}</span>
    </button>
  );
}

export default AddButton;
