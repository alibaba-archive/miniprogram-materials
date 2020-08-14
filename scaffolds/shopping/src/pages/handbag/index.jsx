import React from 'react';

import Location from './components/location';
import Search from '@/components/Search';
import CategoryNav from '@/components/CategoryNav';
import Tab from '@/components/Tab';
import Masonry from './components/Masonry';

import styles from './index.module.scss';

import { ALL, TREND, NEW, PRICE } from '@/asserts/CommodityType';
import Empty from '../../components/Empty';

function HandBag () {
  const searchValue = '';
  const activeTabId = ALL;
  const tabs = [
      {
        id: ALL,
        title: '综合',
      },
      {
        id: TREND,
        title: '人气榜',
      },
      {
        id: NEW,
        title: '新品',
      },
      {
        id: PRICE,
        title: '价格',
        sortable: true,
      }
    ]
  const currentCommodities = [];

  function onActiveTabChange(id) {
    // this.setData({ activeTabId: id });
    // this.fetchCurrentCommodities(id);
  }

  function onTapCommodity(id) {
    // this.setData({ selectedCommodityId: id, showCommodityDrawer: true });
    console.log(id);
  }
  
  return <>
    {/* <import-sjs
    name="EmptyType"
    from="../../components/Empty/empty-type.sjs"
  /> */}
  {/* <commodity-drawer
    commodityId="{selectedCommodityId}"
    show="{showCommodityDrawer}"
    onClose="onCloseCommodityDrawer"
    onConfirm="onConfirm"
  /> */}
  <view disable-scroll="{showCommodityDrawer}">

    <Location />
    <view className={styles['search-nav']}>
      <navigator
        className={styles['search-nav__input']}
        url='/pages/search/index'
      >
        <Search
          value={searchValue}
          disabled={true}
        />
      </navigator>
      <CategoryNav />
    </view>
    <Tab
      activeId={activeTabId}
      onActiveTabChange={onActiveTabChange}
      tabs={tabs}
    />
    {
      currentCommodities.length > 0 ? <Masonry
        columns={activeTabId === TREND ? 1 : 2}
        isRanking={activeTabId === TREND}
        masonryData={currentCommodities}
        onTapCommodity={onTapCommodity}
      /> : <Empty />
    }
  </view>
  </>
}

export default HandBag;