import React from 'react';

import styles from './index.module.scss';

function Location () {
return <view className={styles['location']}>
  <view className={styles['location-description']}>
    <image
      className={styles['location-description__logo']}
      src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*JOy0QqiN0qUAAAAAAAAAAABkARQnAQ"
      mode="scaleToFill"
    />
    <text className={styles['location-description__title']}>屈臣氏亲橙里店</text>距离1.4km
  </view>
  <view className={styles['location-action']}>
    切换
    <image
      src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*tuXAT6mNwWUAAAAAAAAAAABkARQnAQ"
      mode="scaleToFill"
    />
  </view>
</view>
}

export default Location;
