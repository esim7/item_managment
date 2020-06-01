import React, { Component } from 'react';
import {AppContext} from '../../context'
import './organiser.css';

export default class Organiser extends Component
{
    render()
    {
        const {weatherToday} = this.context;
        return (
                <div class="ml-5 organiser row">
                    <div class="col">
                        <img src={weatherToday.imagePath} class="rounded image" alt="..."/>
                    </div>
                    <div class="col d-flex align-items-center">
                        <h4>{weatherToday.temp}<sup><i className="grade fas fa-genderless"></i></sup> </h4>
                    </div>
                    <div class="col-4">
                        <p>Ветер: {weatherToday.speed}м/с</p>
                        <p>Влажность: {weatherToday.humidity}%</p>
                    </div>
                    <div class="col-4">
                        <p>{weatherToday.name}, {weatherToday.country}</p>
                        <p>{weatherToday.dt_txt}</p>
                    </div>
                </div>
        )
    }
}
Organiser.contextType = AppContext;