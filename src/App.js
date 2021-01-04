import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Summary from "./components/Summary";

function App() {
  let products = [
    {
      key: "key1",
      productName: "Product Item Number 1",
      description: "Description for product item number 1",
      quantity: 1,
      price: 1.234,
      vat: 5,
      image: "https://via.placeholder.com/200x150",
    },
    {
      key: "key2",
      productName: "Product Item Number 2",
      description: "Description for product item number 2",
      quantity: 2,
      price: 2.453,
      vat: 5,
      image: "https://via.placeholder.com/200x150",
    },
    {
      key: "key3",
      productName: "Product Item Number 3",
      description: "Description for product item number 3",
      quantity: 3,
      price: 3.4578,
      vat: 5,
      image: "https://via.placeholder.com/200x150",
    },
    {
      key: "key4",
      productName: "Product Item Number 4",
      description: "Description for product item number 4",
      quantity: 4,
      price: 4.21432,
      vat: 5,
      image: "https://via.placeholder.com/200x150",
    },
    {
      key: "key5",
      productName: "Product Item Number 5",
      description: "Description for product item number 5",
      quantity: 5,
      price: 5.32432,
      vat: 0,
      image: "https://via.placeholder.com/200x150",
    },
  ];
  let [listProduct, setProducts] = useState(products);

  function removeProduct(Name) {
    let tempProducts = listProduct;

    setProducts((tempProducts) => {
      return tempProducts.filter((product) => product.productName !== Name);
    });
  }

  let itemProducts = [];
  listProduct.forEach((element) => {
    itemProducts.push(
      <Product
        key={element.key}
        image={element.image}
        productName={element.productName}
        description={element.description}
        quantity={element.quantity}
        price={element.price}
        vat={element.vat}
        onRemoveProduct={removeProduct}
      />
    );
  });

  return (
    <div>
      <main>
        <Header listProducts={listProduct} />
        <section className="container">
          <ul className="products">{itemProducts}</ul>
        </section>
        <Summary listProducts={listProduct} />
      </main>
    </div>
  );
}

export default App;
