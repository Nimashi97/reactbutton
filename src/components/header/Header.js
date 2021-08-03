import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import history from '../../history';
function Header(){
    
    return(
        <div>
            <AppBar position="static">
        <Toolbar>
          
        <h2><a  onClick={()=> history.push('/')}>Maztars</a></h2>
        <div>
        <ul>
            <li><a  onClick={()=> history.push('/Home')}>Home</a></li>
            <li><a  onClick={()=> history.push('/Products')}>Products</a></li>
        </ul>
        </div>
        </Toolbar>
      </AppBar>
        </div>
    );
}
export default Header;