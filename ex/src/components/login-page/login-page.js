import React, { Component } from 'react';

import './login-page.css';

export default class LoginPage extends Component
{
    state = {
        login: '',
        password: '',
        selectedCity: '',
    }

    emptyInputsChecker = () => {
        if(!this.state.selectedCity)
        {
            return false;
        }
        else
        {
            return true;
        }
    }


    render()
    {
        return(
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header bg-primary">
                                <h3>Sign In</h3>
                            </div>
                            <div className="card-body">

                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="username"
                                            onChange = {(event) => {this.setState({login: event.target.value})}}
                                        />
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password"
                                            onChange = {(event) => {this.setState({password: event.target.value})
                                            console.log(this.state.password);
                                            }}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <select className="form-control" id="city"
                                            onChange = {(event) => {this.setState({selectedCity: event.target.value})}}
                                        >
                                            <option value=""></option>
                                            <option value="nur-sultan">Нур-Султан</option>
                                            <option value="almaty">Алматы</option>
                                            <option value="pavlodar">Павлодар</option>
                                            <option value="karagandy">Караганда</option>
                                            <option value="kostanay">Костанай</option>
                                        </select>
                                    </div>

                                    <button type="button" className="btn float-right btn btn-sm btn-outline-primary"
                                    onClick={(e) => {e.preventDefault(); 
                                    if(this.emptyInputsChecker()) 
                                    {
                                        this.props.onLogged(this.state.selectedCity)
                                    }
                                    else if(!this.emptyInputsChecker())
                                    {
                                        alert('Введите все данные!')
                                    }
                                         }}
                                    >Login</button>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}