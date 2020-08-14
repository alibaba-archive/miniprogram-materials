import React from 'react';

import styles from './index.module.scss';

function CategoryNav () {
  return <>
    <navigator
      url="/pages/category/index"
      className={styles['category-nav']}
    >
      <image
        className={styles['category-nav__icon']}
        src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*ck3uR5yzoboAAAAAAAAAAABkARQnAQ"
        mode="scaleToFill"
      />
      <text className={styles['category-nav__description']}>分类</text>
    </navigator>
  </>
}

export default CategoryNav;
