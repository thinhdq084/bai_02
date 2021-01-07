import React from "react";

function Header({ listProducts }) {
  let totalProduct = listProducts.reduce((total, product) => total + product.quantity, 0);

  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{totalProduct} items in the bag</span>
    </header>
  );
}

export default Header;
