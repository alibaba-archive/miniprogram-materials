import React from 'react';

import styles from './index.module.scss';

function Empty () {
  const emptyStore = {
    cover:
      "https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*13iTQpYauJUAAAAAAAAAAABkARQnAQ",
    title: "当前门店暂时没有商品",
    description: "您可以切换其他门店查看商品",
    action: "/pages/handbag/index",
    actionName: "切换门店",
    openType: "switchTab",
  }

  return <>
    {
      emptyStore ? <view
        className={styles['empty']}
      >
      <image
        className={styles['empty__cover']}
        src={emptyStore.cover}
        mode="scaleToFill"
      />
      <view className={styles['empty__title']}>
        {emptyStore.title}
      </view>
      <view
        className={styles['empty__description']}
      >
        {emptyStore.description}
      </view>
      <navigator
        className={styles['empty__nav']}
        url={emptyStore.action}
        open-type={emptyStore.openType}
      >
        {emptyStore.actionName}
      </navigator>
      </view> : ''
   }
  </>

}

export default Empty;
