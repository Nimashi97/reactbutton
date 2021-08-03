
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import Routes from './Routes';
import Header from './components/header/Header';

ReactDOM.render(
    <Router>
        <div className="App">
            <Header/>
            <Routes />
        </div>
    </Router>,
    document.getElementById('root')
);
