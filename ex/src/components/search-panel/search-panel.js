import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component
{
    render()
    {
        return (
            <form class="form-inline d-flex justify-content-center md-form form-sm active-pink-2 mt-5">
                <input class="form-control form-control-sm mr-3 w-75 bg-primary text-white" type="text" placeholder="Наименование товара"
                    aria-label="Search" onChange={this.props.onInputChange}/>
                <i class="fas fa-search" aria-hidden="true"></i>
            </form>
        )
    }
}


