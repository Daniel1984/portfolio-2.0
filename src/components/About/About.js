import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import styles from './About.scss';

const About = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h1 className={styles.name}>
        Daniel
        <span className={styles.surname}>Stenger</span>
      </h1>
      <a className={styles.email} href="mailto:danielstenger@protonmail.com">
        danielstenger@protonmail.com
      </a>

      <div className={styles.message}>
        Software engineer focusing on building simple, maintenance free software by applying established
        and community recognized technologies and best practices. GO and functional programming enthusiast
        <span className={styles.blink}>_</span>
      </div>

      <div className={styles.social}>
        <a
          href="https://www.linkedin.com/in/dan-stenger-93b6839b"
          className={styles.socilIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/daniel1984"
          className={styles.socilIcon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="#experience"
          className={styles.link}
          rel="noopener noreferrer"
        >
          Experience
        </a>
        <a
          href="https://hackernoon.com/@danstenger"
          target="_blank"
          className={styles.link}
          rel="noopener noreferrer"
        >
          More
        </a>
      </div>
    </div>
  </div>
);

export default About;
