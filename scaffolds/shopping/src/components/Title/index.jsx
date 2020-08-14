import React from 'react';

import styles from './index.module.scss';

function Title (props) {
  const {className, children} = props;
  return <view className={`${styles['title']} ${styles[className]}}`}>
    {children}
  </view>
}

export default Title;