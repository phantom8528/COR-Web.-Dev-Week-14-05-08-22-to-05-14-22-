import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Image';
// import Image from './Image';
import Masthead from './masthead/masthead_main';
// import mh_background from './masthead/masthead_components/mh_background';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Image />
  <Masthead />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
