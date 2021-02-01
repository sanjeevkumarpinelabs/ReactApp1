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
const allReducers = combineReducers({data:reducer})
const mystore = createStore(allReducers,initialState,compose(applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


