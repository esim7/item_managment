import React, { Component } from 'react';

import './item-card.css';
import image from './img.png';

export default class ItemCard extends Component
{
    render()
    {
        const {id, name, category, finalPrice} = this.props;    
        return(
            <div className="main col-sm-3">
                <div className="cd">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-title">{category}</p>
                        <h6 className="card-title">{finalPrice} тенге</h6>
                        <button type="button" className="btn btn-primary"
                        onClick={console.log('PRODANO')}
                        >Продажа</button>
                    </div>
                </div>
            </div>                                    
        )
    }
}