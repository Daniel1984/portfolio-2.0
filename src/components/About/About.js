import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';
import LinkedinIcon from 'react-icons/lib/io/social-linkedin';
import GithubIcon from 'react-icons/lib/io/social-github';
import { withAppContainer } from '../../containers/AppContainer';
import styles from './About.scss';

class About extends Component {
  static propTypes = {
    setActiveSlideViaScroll: PropTypes.func.isRequired,
    storeSlideRef: PropTypes.func.isRequired,
  };

  render() {
    const { storeSlideRef, setActiveSlideViaScroll } = this.props;

    return (
      <div
        ref={el => storeSlideRef({ el, index: 0 })}
        className={styles.root}
      >
        <VisibilitySensor onChange={visible => setActiveSlideViaScroll({ visible, slide: 0 })} />
        <div className={styles.content}>
          <h1 className={styles.name}>
            Daniel <span className={styles.surname}>Stenger</span>
          </h1>
          <a className={styles.email} href="mailto:danielstenge114@gmail.com">
            danielstenge114@gmail.com
          </a>

          <div className={styles.message}>
            For almost a decade I am focusing on building performant web
            applications that require little to no maintenance after delivery.
          </div>

          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/in/dan-stenger-93b6839b"
              className={styles.socilIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/daniel1984"
              className={styles.socilIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withAppContainer(About);
