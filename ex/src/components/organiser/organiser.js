import React, { Component } from 'react';

import './organiser.css';

export default class Organiser extends Component
{
    render()
    {
        return (
                <div class="ml-5 organiser row">
                    <div class="col">
                        <img src="http://openweathermap.org/img/wn/10d@2x.png" class="rounded image" alt="..."/>
                    </div>
                    <div class="col d-flex align-items-center">
                        <h4>25<sup><i className="grade fas fa-genderless"></i></sup> </h4>
                    </div>
                   
                    
                    <div class="col-4">
                        <p>Ветер 15 м/с</p>
                        <p>Влажность 40%</p>
                    </div>
                    <div class="col-4">
                        <p>Nur-Sultan, KZ</p>
                        <p>2020-05-28</p>
                    </div>
                </div>
        )
    }
}