import React, { Component } from 'react';
import './card-list.css';
import ItemCard from '../item-card';

export default class CardList extends Component
{
    render()
    {
        const elements = this.props.actualData.map((item) => {
            const {...props } = item;
            return (
                <ItemCard {...props}/>      
            );
          });
        return (
            <div className="row justify-content-center mt-4">
                {elements}
            </div>
        )
    }
}