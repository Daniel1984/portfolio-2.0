import React from 'react';
import experiences from './experience.json';
import styles from './Experience.scss';

const Experience = () => (
  <div id="experience" className={styles.root}>
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

export default Experience;
