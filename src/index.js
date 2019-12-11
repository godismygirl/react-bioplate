import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import { StoreContext } from 'redux-react-hook';
import createStore from '@/utils/createStore';

import App from './application/App';
import Worker from './service/worker';

import './index.css';

if (typeof PRODUCTION !== 'undefined') {
  OfflinePluginRuntime.install();
}

// 演示 Web Worker 的功能
const worker = new Worker();

worker.expensive(1000).then(count => {
  console.log(`Ran ${count} loops`);
});

const store = createStore({
  isUpdated: false,
  todos: ['Make the fire!', 'Fix the breakfast!', 'Wash the dishes!', 'Do the mopping!']
});

render(
  <StoreContext.Provider value={store}>
    <App title="Webpack 4 Demo" />
  </StoreContext.Provider>,
  document.querySelector('#root')
);
