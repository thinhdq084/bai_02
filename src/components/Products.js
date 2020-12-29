import React, { Component } from "react";
import Product from "./Product";
import "./Products.css";

class Products extends Component {
  render() {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    });

    return (
      <ul className="products">
        {this.props.listProducts.map((element) => {
          return (
            <Product
              key={element.key}
              image={element.image}
              productName={element.productName}
              description={element.description}
              quantity={element.quantity}
              price={formatter.format(element.price)}
              vat={element.vat}
            />
          );
        })}
      </ul>
    );
  }
}

export default Products;
