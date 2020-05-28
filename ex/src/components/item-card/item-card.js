import React, { Component } from 'react';

import './item-card.css';
import image from './img.png';

import {AppContext} from '../../context'

export default class ItemCard extends Component
{
    render()
    {
        const {id, name, category, finalPrice} = this.props;    
        const onSellItem = this.context;
        console.log(this.context);
            return(
                <div className="main col-sm-3">
                    <div className="cd">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-title">{category}</p>
                            <h6 className="card-title">{finalPrice} тенге</h6>
                            <button type="button" className="btn btn-primary"
                            onClick={() => onSellItem(id)}
                            >Продажа</button>
                        </div>
                    </div>
                </div>
            )              
    }
}

ItemCard.contextType = AppContext;