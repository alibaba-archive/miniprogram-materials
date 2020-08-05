import * as React from 'react';
import styles from './index.module.scss';

interface LogoProps {
  uri: string;
}

export default (props: LogoProps) => {
  const { uri } = props;
  return (
    <img
      alt="logo"
      className={styles.logo}
      src={uri}
    />
  );
};
