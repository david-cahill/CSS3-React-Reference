import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import './index.css'
import css3App from './reducers'
const store = createStore(css3App)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
