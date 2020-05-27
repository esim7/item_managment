import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import SearchPanel from '../search-panel/search-panel';
import './main-page.css';
import CardList from '../card-list/card-list';

export default class MainPage extends Component
{
    state = {
        data: [],
        value: '',
    }

    onInputChange = (event) => {
        var currentData = this.props.itemData.filter(item => item.name.indexOf(event.target.value) > -1);
        if(event.target.value == "")
        {
            currentData = [];
        }
        console.log(currentData);
        this.setState(({data}) => {
            
            return {
                data: currentData,
            }
        })
    }

    render()
    {
        return (
            <div className="container">
                <SearchPanel onInputChange={this.onInputChange}/>
                <CardList actualData={this.state.data}/>
            </div>
                
        )
    }
}