import React from "react";

function Header({ listProducts }) {
  let totalProduct = 0;
  listProducts.map(function (item) {
    totalProduct += item.quantity;
  });

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
