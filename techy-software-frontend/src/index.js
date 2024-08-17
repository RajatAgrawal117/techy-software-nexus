import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './components/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Home />
    </Router>
 
  </React.StrictMode>
);

reportWebVitals();
