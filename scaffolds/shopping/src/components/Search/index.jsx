import React from 'react';

import styles from './index.module.scss';

function Search (props) {

  const {
    disabled = false,
    defaultFocus = false,
    value = '',
    className = '',
    onClear = () => {},
  } = props;

    function onBlur() {
      // this.setData({ focus: false });
    }
    function onFocus() {
      // this.setData({ focus: true });
    }
    function clear() {
      // this.props.onClear();
    }
    function onConfirm() {
      // this.props.onConfirm();
    }
    function onInput(e) {
      // this.props.onInput(e);
    }

  return <view
    className={`${styles['search']} ${styles[className]}}`}
    onClick={disabled?onFocus:''}
  >
    <image
      className={styles['search__icon']}
      src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*-ZudTL5rua4AAAAAAAAAAABkARQnAQ"
      mode="scaleToFill"
    />

    <input
      placeholder="搜索该门店的宝贝"
      className={styles['search__input']}
      value={value}
      disabled={disabled}
      // focus={focus}
      onBlur={onBlur}
      onFocus={onFocus}
      onInput={onInput}
      // onConfirm={onConfirm}
      // placeholder-className={styles['search__input-placeholder']}
    />
    {/* {
      (!disabled && value) ? <view
        className={styles['search__clear-container']}
        catchTap="clear"
        >
          <image
            className={styles['search__clear']}
            src="https://gw.alipayobjects.com/mdn/rms_107da2/afts/img/A*xttPT7EFYEAAAAAAAAAAAABkARQnAQ"
            mode="scaleToFill"
          />
        </view> : ''
    } */}
  </view>
}

export default Search;