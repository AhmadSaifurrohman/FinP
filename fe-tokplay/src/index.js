import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import "./index.css";
import axios from 'axios'
import reportWebVitals from './reportWebVitals';

axios.defaults.baseURL = 'http://localhost:3000/api';
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
