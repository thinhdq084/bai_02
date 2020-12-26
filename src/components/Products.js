import React, { Component } from 'react';
import Product from './Product'
import './Products.css'

class Products extends Component {
    render() { 
        return (
            <ul className="products" alt = "true">
                {this.props.listProducts.map(element => {
                    return (
                        <Product 
                            image = {element.image} 
                            productName = {element.productName}
                            description = {element.description}
                            quantity = {element.quantity}
                            price = {element.price.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}
                            vat = {element.vat}
                        /> 
                    )
                })}
            </ul>
        )
    }
}
 
export default Products;