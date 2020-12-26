import React, { Component } from 'react';
// import {FormattedNumber} from 'react-intl';
import './Summary.css'

class Summary extends Component {
    render() { 
        let totalQuantity = 0;
        let itemMonney = 0;
        let totalMonney = 0;
        let grandMonney = 0;
        let totalTax = 0;

        this.props.listProducts.map(function(item){
            totalQuantity += item.quantity;
            itemMonney = (item.price * item.quantity);
            totalMonney += itemMonney;
            totalTax += itemMonney * item.vat / 100;
            grandMonney += itemMonney + itemMonney * item.vat / 100;
        });

        return (
            <div className="summary" alt = "true">
                <ul alt = "true">
                    <li alt = "true">Total quantity: <span>{totalQuantity.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span></li>
                    <li alt = "true">Total amount: <span>{totalMonney.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span></li>
                    <li alt = "true">VAT amount: <span>{totalTax.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span></li>
                    <li alt = "true">Grand total: <span>{grandMonney.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</span></li>
                </ul>
            </div>
        );
    }
}
 
export default Summary;