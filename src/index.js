import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux-store/reducers'
import thunk from 'redux-thunk';
//import reportWebVitals from './reportWebVitals';
const initialState = {count:5}
const allReducers = combineReducers({counter:reducer})
const mystore = createStore(allReducers,initialState,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


