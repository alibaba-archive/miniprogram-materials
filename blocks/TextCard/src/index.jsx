import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function TextCard({ value }) {
  return (
    <div className={styles.TextCard}>
      TextCard {value}
    </div>
  );
}

TextCard.propTypes = {
  value: PropTypes.string,
};

TextCard.defaultProps = {
  value: 'string data',
};
