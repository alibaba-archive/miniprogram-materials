import React, {useState} from 'react';

import styles from './index.module.scss';

function My () {
  
   const currentUser = {
     name: '糙米苏打0905',
     credit: 10,
     member: '屈臣氏会员',
   }

   const entries = [
      {
        title: '新人礼遇',

        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*HTNURLN0hv8AAAAAAAAAAABkARQnAQ',
      },
      {
        title: '积分享好礼',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*8mUFQZnkpX4AAAAAAAAAAABkARQnAQ',
      },
      {
        title: '积分兑好礼',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*CwXrR4hRcGAAAAAAAAAAAABkARQnAQ',
      },
      {
        title: '会员特惠',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*dyvrR6BIbYgAAAAAAAAAAABkARQnAQ',
      },
      {
        title: '新人礼遇',
        cover:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*7G9XQLcv6tYAAAAAAAAAAABkARQnAQ',
      }
  ]

  const navList = [
      {
        name: '我的订单',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*Y8BATYqMN78AAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-order/index',
          }),
      },
      {
        name: '我的券',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*9RqXQaxLeCEAAAAAAAAAAABkARQnAQ',
        onClick: () =>
          my.navigateTo({
            url: '/pages/my-ticket/index',
          }),
      },
      {
        name: '关于',
        thumb:
          'https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*-Lp1TZDggnoAAAAAAAAAAABkARQnAQ',
        onClick: () => {},
      },
    ]
  
  return <>
    <view>
      <view className={styles['user-profile']}>
        <image
          className={styles['user-profile__avatar']}
          src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*O-qpSpu9vgQAAAAAAAAAAABkARQnAQ"
          mode="scaleToFill"
        />
        <view className={styles['user-profile__right']}>
          <view className={styles['user-profile__header']}>
            <view className={styles['user-profile__name']}>
              {currentUser.name}
            </view>
            <view className={styles['user-profile__member']}>
              {currentUser.member}
            </view>
          </view>
          <view className={styles['user-profile__credit']}>
            积分：{currentUser.credit}
          </view>
        </view>
      </view>
      <scroll-view
        className={styles['entries']}
        scroll-x={true}
        scroll-y={false}
      >
        {
          entries.map((entry, index) => 
            <view
              className={styles['entries__item']}
              key={index}
            >
              <image
                className={styles['entries__cover']}
                src={entry.cover}
                mode="scaleToFill"
              />
              <view className={styles['entries__title']}>{entry.title}</view>
            </view>
          )
        }
      </scroll-view>
      {/* <view className={`${styles['divider']} ${styles['--middle']}`}/> */}
      <view className={styles['member-center-nav']}>进入会员中心
        <image
          src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*kYnQR4upMIcAAAAAAAAAAABkARQnAQ"
          mode="scaleToFill"
        />
      </view>
      {
        navList.map(nav =>
          <block key={nav.name}>
            <view onClick={nav.onClick}>
              {nav.name}
            </view>
            {/* <list-item
              thumb="{item.thumb}"
              className="list-item"
              arrow="{true}"
              onClick="onListClick"
              data-index="{index}"
              key="items-{index}"
              last="{index === (items.length - 1)}"
            >
              {item.name}
            </list-item> */}
          </block>
        )
      }
    </view>
  </>
}

export default My;
