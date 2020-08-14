import React from 'react';

import styles from './index.module.scss';

function Tab (props) {
  const {
    className = '',
    tabs = [],
    activeId = 0,
    onActiveTabChange = () => undefined
  } = props;  

  return <view className={`${styles['tab']} ${styles[className]}`}>
    {
      tabs.map((tab, index) => 
        <view
          className={styles['tab-item']}
          onClick={() => onActiveTabChange(tab.id)}
          key={index}
        >
          {
            tab.title
          }
          {
            activeId === tab.id ? <view className={styles['tab-item--active']}/> : ''
          }
        </view>
      )
    }
  </view>
}

export default Tab;
