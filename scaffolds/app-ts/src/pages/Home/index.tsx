import * as React from 'react';
import Logo from '@/components/Logo';
import styles from './index.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Logo uri="https://img.alicdn.com/tfs/TB1DHJHdypE_u4jSZKbXXbCUVXa-192-192.png" />
      <h2 className={styles.title}>Welcome to Your MiniApp!</h2>
      <p className={styles.info}>More information about Ice</p>
      <p className={styles.info}>Visit https://ice.work</p>
    </div>
  );
};

export default Home;
