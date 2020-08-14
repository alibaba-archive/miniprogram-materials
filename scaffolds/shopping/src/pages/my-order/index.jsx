import React from 'react';

import Title from '@/components/Title';

import styles from './index.module.scss';

function MyOrder () {

  const orderList = [
      {
        time: '2019.4.11 12:09',
        state: '商家备货中',
        sum: '1096.00',
        total: 2,
        commodity: [
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ',
          },
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*6HXWRKGCK-oAAAAAAAAAAABkARQnAQ',
          },
        ],
      },
      {
        time: '2019.4.11 12:09',
        state: '配送中',
        sum: '1096.00',
        total: 2,
        commodity: [
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*DenfRpLr6NEAAAAAAAAAAABkARQnAQ',
          },
          {
            title: '屈臣氏 碧柔致臻颜面膜64片 补水 水润 白皙 保湿 透滑',
            description: '150ml',
            price: '299.00',
            num: '1',
            image:
              'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*6HXWRKGCK-oAAAAAAAAAAABkARQnAQ',
          },
        ],
      },
    ]

  return <>
    <view>
      <Title className="title">我的订单</Title>
      {
        orderList.map((order, index) =>
          <view
            className={styles['order-section']}
            key={index}
            >
            <view className={styles['order-section-header']}>
              <view className={styles['order-section-header__time']}>{order.time}</view>
              <view className={styles['order-section-header__state']}>{order.state}</view>
            </view>
            {
              order.commodity.map((eachCommodity, index) =>
                <view
                  className={styles['order-section-body']}
                  key={index}
                >
                  <image
                    className={styles['order-section-body__image']}
                    lazy-load='true'
                    src={eachCommodity.image}
                    mode="scaleToFill"
                  />
                  <view className={styles['order-section-body__middle']}>
                    <view className={styles['order-section-body__title']}>
                      {eachCommodity.title}
                    </view>
                    <view className={styles['order-section-body__description']}>
                      {eachCommodity.description}
                    </view>
                  </view>
                  <view className={styles['order-section-body__right']}>
                    <view className={styles['order-section-body__price']}>¥ {eachCommodity.price}</view>
                    <view className={styles['order-section-body__num']}>x{eachCommodity.num}</view>
                  </view>
                </view>
              )
            }
            <view className={styles['order-section-footer']}>
              <view className={styles['order-section-footer__total']}>共{order.total}件商品</view>
              <view className={styles['order-section-footer__desc']}>合计：¥</view>
              <view className={styles['order-section-footer__sum']}>{order.sum}</view>
            </view>
          </view>
        )
      }
    </view>
  </>
}

export default MyOrder;
