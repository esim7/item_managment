import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {AppContext} from '../../context'

import './app.css';

import LoginPage from '../login-page';
import NavBar from '../navbar';
import {ItemTablePage, AddProductPage} from '../pages';
import ModalPage from '../pages/modal-page';
import MainPage from '../pages/main_page';
import SendItemModalPage from '../pages/send-item-modalPage';

export default class App extends Component
{
    state = {
        isLogged: true,
        weatherToday: {},
        itemData: [],
        forecast: {},
        isModalOpen: false,
        isModalSendItemOpen: false,
        editableItem: {},
        sellingItem: {},
    }

    onDeleted = (id) => {
        this.setState(({ itemData }) => {
            const idx = itemData.findIndex((el) => el.id === id);
            const newData = [
              ...itemData.slice(0, idx),
              ...itemData.slice(idx + 1)
            ];
            return {
              itemData: newData,
            };
          });
    }

    onEdited = (id) => {
        this.setState(({editableItem, isModalOpen}) => {
            var item = this.state.itemData.find((el) => el.id === id);
            return {
                editableItem: item,
                isModalOpen: true,
            };
        });
    };

    exitDialog = () => {
        this.setState({isModalOpen: false, isModalSendItemOpen: false})
    };
    
    onProductAdded = (item) => {
        this.setState(({ itemData }) => {
        const newData = [
            ...itemData,
            item
        ];
        return {
            itemData: newData
        };
    });
  };

    onSellItem = (id) => {
        this.setState(({sellingItem, isModalSendItemOpen}) => {
            var itemToSell = this.state.itemData.find((el) => el.id === id);
            return {
                sellingItem: itemToSell,
                isModalSendItemOpen: true
            };
        });
        console.log(id);
    }

    onSaveEditedProduct = (obj) => {
        this.setState(({ itemData, isModalOpen }) => {
            const {id, name, category, purchasePrice, finalPrice, count} = obj;
            console.log(purchasePrice, finalPrice);
            const index = this.state.itemData.findIndex((el) => el.id === id);

            const editedItem = itemData[index];
            editedItem.name = name; editedItem.category = category;
            editedItem.purchasePrice = purchasePrice; editedItem.finalPrice = finalPrice;
            editedItem.count = count;

            const newData = [
                ...itemData.slice(0, index),
                editedItem,
                ...itemData.slice(index + 1)
              ];
            return {
                itemData: newData,
                isModalOpen: !isModalOpen,
            }
        })

        
    }

    render()
    {
        if(!this.state.isLogged) return <LoginPage/>
        console.log(this.state.itemData);
        return(
            <AppContext.Provider value={this.onSellItem}>
                <Router>
                    <div>
                        <NavBar/>
                        <Switch>
                            <Route path="/mainPage" render={() => {
                            return <MainPage itemData={this.state.itemData}/>
                            }} />
                            <Route path="/addProduct" render={() => {
                            return <AddProductPage onProductAdded={this.onProductAdded}/>
                            }} />
                            <Route path="/itemTable" render={() => {
                            return <ItemTablePage data={this.state.itemData} 
                                                onDeleted={this.onDeleted}
                                                onEdited={this.onEdited}                  
                            />
                            }} />
                        </Switch>
                    </div>
                    <ModalPage isModalOpen={this.state.isModalOpen} editableItem={this.state.editableItem} onSaveEditedProduct={this.onSaveEditedProduct} exitDialog={this.exitDialog}/>
                    <SendItemModalPage isSendItemModalPageOpen={this.state.isModalSendItemOpen} sellingItem={this.state.sellingItem} itemexitSendItemModalPageDialog={this.exitDialog}/>
                </Router>
            </AppContext.Provider>
        )
    }
}