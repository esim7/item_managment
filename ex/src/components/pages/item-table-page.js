import React, {Component} from 'react';

import './item-table-page.css';
import TableRow from '../table-row/table-row';



export default class ItemTablePage extends Component
{
    onEdited = () => {
        console.log('edited');
    }
    
    onDeleted = () => {
        console.log('deleted');
    }

    render()
    {
        var counter = 0;
        const elements = this.props.data.map((item) => {
            counter ++;
            console.log(item.id);
            return (
                <tr key={item.id}>
                    <TableRow 
                        {...item}
                        counter={counter}
                        onDeleted={() => this.props.onDeleted(item.id)}
                        onEdited={() => this.props.onEdited(item.id)}
                        />
                </tr>
            );

        })
        return(
            <div className="container mt-5">
                <h2>Каталог реализуемой продукции</h2>
                <table className="table table-secondary table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Наименование товара</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Закупочная цена</th>
                            <th scope="col">Реализуемая цена</th>
                            <th scope="col">Количество</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
            </div>
        )
    }
}