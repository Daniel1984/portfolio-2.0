import React from 'react';
import { AppProvider } from '../../containers/AppContainer';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';
import Experience from '../Experience/Experience';
import WhyMe from '../WhyMe/WhyMe';
import styles from './App.scss';

export default function App() {
  return (
    <AppProvider>
      <div className={styles.root}>
        <div className={styles.dashboard}>
          <Dashboard />
        </div>
        <div className={styles.content}>
          <About />
          <Experience />
          <WhyMe />
        </div>
      </div>
    </AppProvider>
  );
}
