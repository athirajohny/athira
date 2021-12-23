import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  React.createElement("h1",{style: {color:"blue"}},"Heyy Everyone!"),
  document.getElementById('root')
);



