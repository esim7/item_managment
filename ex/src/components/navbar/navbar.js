import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './navbar.css';
import SearchPanel from '../search-panel/search-panel';
import logo from './logo.png';

export default class NavBar extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/mainPage/"><img className="logo" src={logo}></img></Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item mr-4" >
                            <Link className="btn btn-sm btn-outline-success my-2 my-sm-0" to="/addProduct/">Приход товара </Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="btn btn-sm btn-outline-success my-2 my-sm-0" to="/itemTable/">Товар в реализации</Link>
                        </li>
                        <li className="nav-item mr-4">
                            <Link className="btn btn-sm btn-outline-success my-2 my-sm-0" to="/planets/">Прогноз деятельности</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}