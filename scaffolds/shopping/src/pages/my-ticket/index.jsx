import React, {useState} from 'react';

import Title from '@/components/Title';
import Tab from './components/tab';
import Ticket from './components/ticket';

import styles from './index.module.scss';

const ONLINE = 0;
const OFFLINE = 1;

function MyTicket () {

    const tabs = [
      {
        id: ONLINE,
        title: '线上使用优惠券',
        onClick: () => {},
      },
      {
        id: OFFLINE,
        title: '到店使用优惠券',
        onClick: () => {},
      },
    ]
    const tickets = [
      {
        id: 0,
        price: 30,
        baseline: 300,
        startAt: '2019.4.01',
        endAt: '2019.12.31',
      },
      {
        id: 0,
        price: 30,
        baseline: 300,
        startAt: '2019.4.01',
        endAt: '2019.12.31',
      },
      {
        id: 0,
        price: 30,
        baseline: 300,
        startAt: '2019.4.01',
        endAt: '2019.12.31',
      },
    ]
    const [activeId, setActiveId] = useState(0);

    const onTabItemTap = function (id) {
      console.log(id);
      setActiveId(id);
    }

  return <view>
    <Title>我的券</Title>
    <Tab
      className={styles['tab-margin']}
      tabs={tabs}
      activeId={activeId}
      onActiveTabChange={onTabItemTap}
    />
    {
      tickets.map((ticket, index) =>
        <view
          className={styles['ticket-container']}
          key={index}
        >
          <Ticket
            id={ticket.id}
            price={ticket.price}
            baseline={ticket.baseline}
            startAt={ticket.startAt}
            endAt={ticket.endAt}
          />
        </view>
        )
    }
  </view>
}

export default MyTicket;