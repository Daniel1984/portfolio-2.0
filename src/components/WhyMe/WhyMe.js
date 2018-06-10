import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import { withAppContainer } from '../../containers/AppContainer';
import styles from './WhyMe.scss';


class WhyMe extends Component {
  static propTypes = {
    setActiveSlideViaScroll: PropTypes.func.isRequired,
    storeSlideRef: PropTypes.func.isRequired,
  };

  render() {
    const { storeSlideRef, setActiveSlideViaScroll } = this.props;

    return (
      <div
        ref={el => storeSlideRef({ el, index: 2 })}
        className={styles.root}
      >
        <VisibilitySensor onChange={visible => setActiveSlideViaScroll({ visible, slide: 2 })} />
        <div className={styles.title}>
          Because I`m special
        </div>
      </div>
    );
  }
}

export default withAppContainer(WhyMe);
