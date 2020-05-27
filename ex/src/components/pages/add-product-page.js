import React, {Component} from 'react';

import './add-product-page.css';
import Product from '../../classes/product';

export default class AddProductPage extends Component
{
    state = {
        productName: '',
        category: '', 
        // issue: '',
        // shelfLife: '', 
        purchasePrice: '',
        finalPrice: '', 
        count: '',
    }

    onInputChange = (event) => {
        this.setState({
            city: event.target.value          
          });
       
      }

    render()
    {
        return (
            <div className="mt-5">
                <h2>Форма добавления товара в базу</h2>
                <div className="form-row mt-5">
                    <div className="form-group col-md-6">
                        <label>Наименование товара</label>
                        <input type="text" className="form-control" id="item-name" value={this.state.productName}
                        onChange = { (event) => {
                            this.setState({productName: event.target.value
                            });
                        }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Категория</label>
                        <input type="text" className="form-control" id="item-category" value={this.state.category}
                        onChange = { (event) => {
                            this.setState({category: event.target.value
                            });
                        }}
                        />
                    </div>
                </div>

                {/* <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Дата выпуска</label>
                        <input type="date" className="form-control" id="item-issue" value={this.state.issue}
                        onChange = { (event) => {
                            this.setState({issue: event.target.value
                            });
                        }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Дата срока годности</label>
                        <input type="date" className="form-control" id="item-shelf-life" value={this.state.shelfLife}
                        onChange = { (event) => {
                            this.setState({shelfLife: event.target.value
                            });
                        }}
                        />
                    </div>
                </div> */}

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Закупочная цена</label>
                        <input type="number" className="form-control" id="item-purchase-price" value={this.state.purchasePrice}
                        onChange = { (event) => {
                            this.setState({purchasePrice: event.target.value
                            });
                        }}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Итоговая цена</label>
                        <input type="number" className="form-control" id="item-final-price" value={this.state.finalPrice}
                        onChange = { (event) => {
                            this.setState({finalPrice: event.target.value
                            });
                        }}
                        />
                    </div>
                </div>
                <div className="form-row mb-5">
                    <label>Количество</label>
                    <input type="number" className="form-control" id="item-count" value={this.state.count}
                    onChange = { (event) => {
                            this.setState({count: event.target.value
                            });
                        }}
                    />
                </div>
                <button type="button" className="btn btn-outline-primary"
                onClick={(e) => {this.props.onProductAdded(new Product(this.state.productName, this.state.category,
                                                                        // this.state.issue, this.state.shelfLife,
                                                                        this.state.purchasePrice, this.state.finalPrice,
                                                                        this.state.count))
                                                                        }}
                
                >Добавить</button>
            </div>
        )
    }
}