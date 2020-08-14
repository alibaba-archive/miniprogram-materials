import React from 'react';

import styles from './index.module.scss';

function Ticket (props) {
  const {
    id = 0,
    price = 0,
    baseline = 0,
    startAt = '',
    endAt = '' 
  } = props;

  return <view className={styles['ticket']}>
    <view className={styles['ticket-left']}>
      <view className={styles['ticket-left__line-price']}>
        <view className={styles['ticket-left__price-logo']}>¥</view>
        <view className={styles['ticket-left__price']}>{price}</view>
        <view className={styles['ticket-left__price-dec']}>店铺优惠券</view>
      </view>
      <view className={styles['ticket-left__baseline']}>满{baseline}可用</view>
      <view className={styles['ticket-left__time']}>有效期：{startAt} - {endAt}</view>
    </view>
    <view className={styles['ticket-confirm']}>
      去使用
    </view>
    <view className={styles['circle']}></view>
  </view>
}

export default Ticket;