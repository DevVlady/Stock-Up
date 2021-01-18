import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { GlobalStyles } from './global-styles';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';


//Styles
// import 'spectre.css/dist/spectre.min.css';
// import 'spectre.css/dist/spectre-icons.css';

ReactDOM.render(
  <BrowserRouter>
    {/* <GlobalStyles/> */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();