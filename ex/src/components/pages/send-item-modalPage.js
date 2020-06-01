import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './send-item-modalPage.css';

export default class SendItemModalPage extends Component
{
    render()
    {
        const {id, count} = this.props.sellingItem;
        return (
            <Dialog
                title="Dialog With Actions"
                open={this.props.isSendItemModalPageOpen}
                >
                <DialogTitle id="form-dialog-title">Продажа товара</DialogTitle>
                <DialogContent>
                    <h6>Товара в наличии: {count}</h6>
                    <TextField
                        id="outlined-secondary"
                        label="Введите количество"
                        variant="outlined"
                        color="secondary"
                        type="number"
                    />                 
                </DialogContent>
                <DialogActions>
                    <Button  color="primary">
                        Принять
                    </Button>
                    <Button onClick={() => this.props.exitSendItemModalPageDialog()} color="secondary">
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
