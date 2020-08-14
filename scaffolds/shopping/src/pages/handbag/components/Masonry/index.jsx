import React from 'react';

import styles from './index.module.scss';

function Masonry (props) {

  const {
    masonryData = [],
    columns = 2,
    isRanking = false,
    onTapCommodity = () => {}
  } = props;

  return <view
    className={styles['masonry']}
    // style="grid-template-columns:{{columns===1?'1fr':'1fr 1fr'}};"
>
  {
    masonryData.map((masonry, index) =>
      <view
        className={styles['masonry-col']}
       >
         <view
          onClick={onTapCommodity}
          className={styles['masonry-item']}
          style={{flexDirection:columns===1?'row':'column'}}
         >
           {
             (index < 3 && isRanking) ? <image
                className={styles['masonry-item__rank']}
                src={index === 0
                  ? 'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Uv3oTbU0A5AAAAAAAAAAAABkARQnAQ'
                  : index === 1
                    ? 'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*_ag8S6t0xtcAAAAAAAAAAABkARQnAQ'
                    : index === 2
                      ? 'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*2lPbRp3l8Z8AAAAAAAAAAABkARQnAQ'
                      : ''}
                mode="scaleToFill"
             /> : ''
           }
           {
            <image
              src={masonry.cover}
              mode="aspectFill"
              className={styles['masonry-item__background']}
              style="height:{{columns===1?280:342}}rpx;width:{{columns===1?'280rpx':'100%'}}"
            />
           }
          <view className={styles['masonry-item__container']}>
            <view className={styles['masonry-item__body']}>
              <view className={styles['masonry-item__title']}>{masonry.title}</view>
            </view>
            <view>
              {
                masonry.canSelfPickUp ? <view
                  className={styles['masonry-item__self-pick-up']}
                >
                  可自提
                </view> : ''
              }
              <view className={styles['masonry-item__footer']}>

                <view className={styles['masonry-item__footer-left']}>
                  <view className={styles['masonry-item__price-logo']}>¥</view>
                  <view className={styles['masonry-item__price']}>
                    {masonry.price}
                  </view>
                  <view className={styles['masonry-item__sales']}>
                    {masonry.sales}人付款
                  </view>
                </view>
                <image
                  mode="scaleToFill"
                  src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*7iWdR5ix18UAAAAAAAAAAABkARQnAQ"
                  className={styles['masonry-item__shopping-cart']}
                />
              </view>
            </view>
          </view>
         </view>
      </view>
      )
  }
  </view>
}

export default Masonry;
