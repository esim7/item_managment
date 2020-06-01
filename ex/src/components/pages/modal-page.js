import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './modal-page.css';

export default class ModalPage extends Component
{

    state = {
        id: '',
        newName: '',
        newCategory: '',
        newPurchasePrice: '',
        newFinalPrice: '',
        newCount: '',
    }

    componentDidUpdate(prevProps) {
        if (this.props.editableItem.id !== prevProps.editableItem.id) {
          this.setState(({id, newName, newCategory, newPurchasePrice, newFinalPrice, newCount}) => {
            return {
                id: this.props.editableItem.id,
                newName: this.props.editableItem.name,
                newCategory: this.props.editableItem.category,
                newPurchasePrice: this.props.editableItem.purchasePrice,
                newFinalPrice: this.props.editableItem.finalPrice,
                newCount: this.props.editableItem.count,
            }
        })
        }
      }

    render()
    {
        return (
            <Dialog
                title="Dialog With Actions"
                open={this.props.isModalOpen}
                >
                <DialogTitle id="form-dialog-title">Изменение данных о товаре</DialogTitle><DialogContent>
                <TextField
                    ref="item_name"
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Наименование товара"
                    type="text"
                    fullWidth
                    value={this.state.newName}
                    onChange = { (event) => {
                            this.setState({newName: event.target.value
                            });
                        }}
                />
                <TextField
                    ref="item_category"
                    autoFocus
                    margin="dense"
                    id="category"
                    label="Категория"
                    type="text"
                    fullWidth
                    value={this.state.newCategory}
                    onChange = { (event) => {
                            this.setState({newCategory: event.target.value
                            });
                        }}
                />
                <TextField
                    ref="purchase_price"
                    autoFocus
                    margin="dense"
                    id="purchasePrice"
                    label="Закупочная цена"
                    type="number"
                    fullWidth
                    value={this.state.newPurchasePrice}
                    onChange = { (event) => {
                            this.setState({newPurchasePrice: event.target.value
                            });
                        }}
                />
                <TextField
                    ref="final_price"
                    autoFocus
                    margin="dense"
                    id="finalPrice"
                    label="Итоговая стоимость"
                    type="number"
                    fullWidth
                    value={this.state.newFinalPrice}
                    onChange = { (event) => {
                            this.setState({newFinalPrice: event.target.value
                            });
                        }}
                />
                <TextField
                    ref="count"
                    autoFocus
                    margin="dense"
                    id="count"
                    label="Количество"
                    type="number"
                    fullWidth
                    value={this.state.newCount}
                    onChange = { (event) => {
                            this.setState({newCount: event.target.value
                            });
                        }}
                />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.props.exitDialog()} color="primary">
                        Отмена
                    </Button>
                    <Button onClick={() => this.props.onSaveEditedProduct({id: this.state.id, name: this.state.newName, 
                                                                          category: this.state.newCategory, purchasePrice: this.state.newPurchasePrice, 
                                                                          finalPrice: this.state.newFinalPrice, count: this.state.newCount})} 
                        color="primary">
                        Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}