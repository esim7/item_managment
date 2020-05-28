import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';

import logo from './logo.png';
import Organiser from '../organiser';


// collapse navbar-collapse
export default class NavBar extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
                <Link to="/mainPage/"><img className="logo" src={logo}></img></Link>
                <div className="" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item mr-4" >
                            <Link className="btn btn-sm btn-outline-primary" to="/addProduct/">Добавить</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="btn btn-sm btn-outline-primary" to="/itemTable/">Товары</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="btn btn-sm btn-outline-primary" to="/planets/">Граффик</Link>
                        </li>
                        
                    </ul>
                </div>
                <Organiser/>
            </nav>
        )
    }
}