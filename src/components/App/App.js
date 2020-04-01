import React from 'react';
import About from '../About/About';
import Experience from '../Experience/Experience';
import styles from './App.scss';

const App = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <About />
      <Experience />
    </div>
  </div>
);

export default App;
