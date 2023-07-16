import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from 'redux';
import listReducer from './TinyUrl/Componnent/redux/reducer/link';
import userReducer from './TinyUrl/Componnent/redux/reducer/user';
import messageReducer from './TinyUrl/Componnent/redux/reducer/message';

const root = ReactDOM.createRoot(document.getElementById('root'));
let myStore = createStore(combineReducers({link: listReducer,mes: messageReducer,user: userReducer}))

root.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App />
    </Provider>
  </React.StrictMode>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
