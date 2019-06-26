import { hot } from 'react-hot-loader/root'; // eslint-disable-line
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './scss/main.scss';

const Hot = hot(App);

render(<Hot />, document.getElementById('root'));
