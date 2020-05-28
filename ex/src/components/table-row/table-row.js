import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './table-row.css';

export default class TableRow extends Component
{
    render()
    {
        const {category, count, dateIssue, finalPrice, id, name, purchasePrice, shelfLife} = this.props;
        console.log(id);
        return (
            <React.Fragment>
                <th scope="row">{this.props.counter}</th>
                    <td>{name}</td>
                    <td>{category}</td>
                    <td>{purchasePrice}</td>
                    <td>{finalPrice}</td>
                    <td>{count}</td>
                <td>
                    <button className="btn btn-sm btn-outline-primary my-2 my-sm-0 mr-5" ><i className="fas fa-edit"
                    onClick={this.props.onEdited}
                    ></i></button>
                    <button type="button" className="btn btn-sm btn-outline-danger"
                    onClick={this.props.onDeleted}
                    ><i className="far fa-trash-alt"></i></button>
                </td>
            </React.Fragment>
        )
    }
}