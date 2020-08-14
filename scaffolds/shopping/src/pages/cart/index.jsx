import React, {useState} from 'react';

import styles from './index.module.scss';

function ShoppingCart () {

  const initialData = {
    count: 2,
    totalDiscount: 2,
    shopDiscount: 50,
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
  }

  const [data, setData] = useState(initialData);

  return <>
    <view className={styles['cart']}>
      <view className={styles['cart-section']}>
        <checkbox-group>
          <view className={styles['cart-section-header']}>
            <view className={styles['cart-section-header__checkbox']}>
              <checkbox color="#FF5000" />
            </view>
            <view className={styles['cart-section-header__desc']}>全部商品</view>
          </view>
          {
            data.commodity.map((eachCommodity, index) =>
              <view
                className={styles['cart-section-body']}
                key={index}
              >
                <view className={styles['cart-section-body__checkbox']}>
                  <checkbox
                    color="#FF5000"
                    value="item.id"
                  />
                </view>
                <image
                  className={styles['cart-section-body__image']}
                  src={eachCommodity.image}
                  mode="scaleToFill"
                  lazy-load="true"
                />
                <view className={styles['cart-section-body__middle']}>
                  <view className={styles['cart-section-body__title']}>
                    {eachCommodity.title}
                  </view>
                  <view className={styles['cart-section-body__description']}>
                    {eachCommodity.description}
                  </view>
                  <view className={styles['cart-section-body__price']}>
                    ¥{eachCommodity.price}
                  </view>
                </view>
              </view>
            )
          }

        </checkbox-group>
      </view>



      <view className={styles['cart-footer']}>
        <view className={styles['cart-footer__desc']}>
          <view className={styles['cart-footer__price-section']}>
            <view className={styles['cart-footer__total-desc']}>合计：</view>
            <view className={styles['cart-footer__total-price']}>¥{data.sum}</view>
          </view>
          <view className={styles['cart-footer__discount']}>
            共减 ¥ {data.totalDiscount}（店铺减{data.shopDiscount}）
          </view>
        </view>
        <view className={styles['cart-footer__action']}>
          结算({data.count})
        </view>
      </view>
    </view>
  </>
}

export default ShoppingCart;