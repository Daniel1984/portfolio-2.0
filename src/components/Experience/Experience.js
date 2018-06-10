import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import { withAppContainer } from '../../containers/AppContainer';
import experiences from './experience.json';
import styles from './Experience.scss';

class Experience extends Component {
  static propTypes = {
    setActiveSlideViaScroll: PropTypes.func.isRequired,
    storeSlideRef: PropTypes.func.isRequired,
  };

  render() {
    const { storeSlideRef, setActiveSlideViaScroll } = this.props;

    return (
      <div
        ref={el => storeSlideRef({ el, index: 1 })}
        className={styles.root}
      >
        <VisibilitySensor onChange={visible => setActiveSlideViaScroll({ visible, slide: 1 })} />
        <div className={styles.title}>
          experience
        </div>

        {experiences.map(({
          title,
          company,
          date,
          message,
        }) => (
          <div key={company} className={styles.experienceRow}>
            <div className={styles.jobTitle}>
              {title}
            </div>
            <div className={styles.company}>
              {company}
            </div>
            <div className={styles.date}>
              {date}
            </div>
            <div className={styles.description}>
              {message}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withAppContainer(Experience);
