import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withAppContainer } from '../../containers/AppContainer';
import styles from './Dashboard.scss';

Dashboard.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  setActiveSlide: PropTypes.func.isRequired,
  scrollSlideIntoView: PropTypes.func.isRequired,
};

const MENU_ITEMS = [
  'About',
  'Experience',
  'Why me?',
];

function Dashboard({ activeSlide, setActiveSlide, scrollSlideIntoView }) {
  return (
    <Fragment>
      <div className={styles.avatar} />
      <div className={styles.menu}>
        {MENU_ITEMS.map((menuItem, index) => (
          <div
            key={menuItem}
            onKeyUp={() => {}}
            role="button"
            tabIndex="0"
            onClick={() => {
              setActiveSlide(index);
              scrollSlideIntoView(index);
            }}
            className={classnames([
              styles.menuItem,
              (index === activeSlide) && styles.active,
            ])}
          >
            {menuItem}
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default withAppContainer(Dashboard);
