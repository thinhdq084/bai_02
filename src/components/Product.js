import React, { Component } from 'react';
import './Product.css'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <li className="row" alt = "true">
                <div className="col left" alt = "true">
                    <div className="thumbnail" alt = "true">
                        <a href="#" alt = "true">
                        <img src={this.props.image}  alt = "true" />
                        </a>
                    </div>
                    <div className="detail" alt = "true">
                        <div className="name" alt = "true"><a href="#" alt = "true">{this.props.productName}</a></div>
                        <div className="description" alt = "true">{this.props.description}</div>
                        <div className="price" alt = "true">Price: {this.props.price}</div>
                        <div className="vat" alt = "true">VAT: {this.props.vat}%</div>
                    </div>
                </div>
                <div className="col right" alt = "true">
                    <div className="quantity" alt = "true">
                        <input type="number" className="quantity" step={1} defaultValue={this.props.quantity} />
                    </div>
                    <div className="remove" alt = "true">
                        <svg version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60" xmlSpace="preserve">
                        <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                        </svg>
                    </div>
                </div>
            </li>
        );
    }
}
 
export default Product;