import React from 'react';

import Title from '@/components/Title';

import styles from './index.module.scss';

function Search (props) {

  const {
    trend = [],
    searchValue= ''
  } = props;

  return <view>
    <Title>
      宝贝搜索
    </Title>
    <view className={styles['search-nav']}>
      <search
        value={searchValue}
      />
      {/* <category-nav a:if="{{!searchValue}}" /> */}
      <navigator
        className={styles['search-cancel']}
        url="/pages/handbag/handbag"
        open-type="navigateBack"
      >取消</navigator>
    </view>
    {
      !searchValue ? <view className={styles['trend']}>
        <view className={styles['trend-title']}>
          热门推荐
        </view>
        <view className={styles['trend-body']}>
          {
            trend.map(item =>
              <view
                className={styles['trend-body__item']}
                key={index}
              >
                <view>
                  {item}
                </view>
              </view>
            )
          }
        </view>
      </view> : ''
    }
  </view>
}

export default Search;
