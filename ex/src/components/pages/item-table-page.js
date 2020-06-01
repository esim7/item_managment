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
        var {data} = this.props;
        if(!data.length)
            return <h2 className="mt-5">Товаров не найдено!</h2>

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
                <table className="table table-sm table-dark table-hover mt-2">
                    <thead>
                        <tr class="bg-primary">
                            <th scope="col">#</th>
                            <th scope="col">Наименование товара</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Закупочная цена</th>
                            <th scope="col">Реализуемая цена</th>
                            <th scope="col">Количество</th>
                            <th scope="col">Редактировать</th>
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