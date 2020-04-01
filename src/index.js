import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import 'reset-css';
import './styles/index.scss';


if (module.hot) {
  module.hot.accept();
}

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    window.location.href = '#experience';
  }
});

render(<App />, document.getElementById('daniel-root'));
