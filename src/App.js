import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Summary from "./components/Summary";
import { getProducts } from "./components/listProducts";

function App() {
  let [listProduct, setProducts] = useState(getProducts());

  function removeProduct(Name) {
    let tempProducts = [...listProduct];

    setProducts((tempProducts) => {
      return tempProducts.filter((product) => product.productName !== Name);
    });
  }

  function changedQuantity(proName, value) {
    let tempProducts = [...listProduct];
    let _nIndex = tempProducts.findIndex(
      (product) => product.productName === proName
    );
    tempProducts[_nIndex].quantity = parseInt(value);
    setProducts(tempProducts);
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
        onChangedQuantity={changedQuantity}
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
