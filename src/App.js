import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';


ReactDOM.render(
  <Router>
        <div className="App">
            <Routes></Routes>
        </div>
    </Router>,
  document.getElementById('root')
);