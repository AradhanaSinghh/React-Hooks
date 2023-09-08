import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppProvider} from "./useContext/userContext.js"
import './index.css';
ReactDOM.render(
  <AppProvider><App /></AppProvider>,document.getElementById('root')
);
