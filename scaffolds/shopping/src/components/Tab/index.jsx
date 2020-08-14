import React from 'react';

import styles from './index.module.scss';

function Tab (props) {

  const {
    tabs = [],
    activeId = 0,
    onActiveTabChange = () => undefined
  } = props;

  return <scroll-view
  className={styles['tab']}
  scroll-x={true}
  scroll-y={false}
>
  {
    tabs.map((tab, index) =>
      <view
        className={`${styles['tab-item']} ${styles[activeId === tab.id ? 'tab-item--active' : '']}`}
        onClick={() => onActiveTabChange(index)}
        key={index}
      >
        {
          tab.sortable ? <>
          {tab.title}
          <image 
            src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*WR7tS62_iPwAAAAAAAAAAABkARQnAQ"
            mode="scaleToFill"
          />
          </> : ''
        }
      </view>
    )
  }
</scroll-view>
}

export default Tab;
