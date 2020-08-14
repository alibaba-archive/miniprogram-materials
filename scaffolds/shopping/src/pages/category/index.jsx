import React from 'react';

import Title from '@/components/Title';

import styles from './index.module.scss';

function Category (props) {
  return <view className={styles['category']}>
  <Title className={styles['category-title']}>宝贝分类</Title>
  {/* <view
    a:for="{{categories}}"
    className={styles['category-item']}
  >
    <view className={styles['category-header']}>
      <view className={styles['category-header__title']}>
        {{item.name}}
      </view>
      <image
        className={styles['category-header__nav']}
        src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*yeGUSJlo0gsAAAAAAAAAAABkARQnAQ"
        mode="scaleToFill"
      />
    </view>
    <view className={styles['category-body']}>
      <view
        a:for="{{item.children}}"
        a:for-item="categoryItem"
        className={styles['category-body__item']}
      >
        <view>{{categoryItem}}</view>
      </view>
    </view>
  </view> */}
</view>
}

export default Category;
