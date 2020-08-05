import * as React from 'react';
import styles from './index.module.scss';

export default (props) => {
  const { uri } = props;
  return (
    <img
      alt="logo"
      className={styles.logo}
      src={uri}
    />
  );
};
