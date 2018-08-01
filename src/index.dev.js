import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader'; // eslint-disable-line
import App from './App';
import './scss/main.scss';

const Hot = hot(module)(App);

render(<Hot />, document.getElementById('root'));
