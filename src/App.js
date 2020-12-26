import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Products from './components/Products';
import Summary from './components/Summary';

function App() {
  let products = [
    { productName: 'Product Item Number 1', description: 'Description for product item number 1', quantity: 1, price: 5000000, vat: 5, image: 'https://via.placeholder.com/200x150' },
    { productName: 'Product Item Number 2', description: 'Description for product item number 2', quantity: 1, price: 6000000, vat: 5, image: 'https://via.placeholder.com/200x150' },
    { productName: 'Product Item Number 3', description: 'Description for product item number 3', quantity: 1, price: 7000000, vat: 5, image: 'https://via.placeholder.com/200x150' },
    { productName: 'Product Item Number 4', description: 'Description for product item number 4', quantity: 1, price: 8000000, vat: 5, image: 'https://via.placeholder.com/200x150' },
    { productName: 'Product Item Number 5', description: 'Description for product item number 5', quantity: 1, price: 10000000, vat: 0, image: 'https://via.placeholder.com/200x150' }
  ]
  return (
      <div alt = "true">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Shopping Cart</title>
        <link rel="stylesheet" href="style.css" />
        <main alt = "true">
          <header className="container">
            <h1>Shopping Cart</h1>
            <ul className="breadcrumb" alt = "true">
              <li alt = "true">Home</li>
              <li alt = "true">Shopping Cart</li>
            </ul>
            <span className="count">{products.length} items in the bag</span>
          </header>
          <section className="container" alt = "true">
            <Products listProducts = {products}/>
          </section>
          <section className="container" alt = "true">
            <div className="promotion" alt = "true">
              <label htmlFor="promo-code">Have A Promo Code?</label>
              <input type="text" id="promo-code" /> <Button/>
            </div>
            <Summary listProducts={products}/>
            <div className="checkout" alt = "true">
              <Button text = "Check Out"/>
            </div>
          </section>
        </main>
      </div>
  );
}

export default App;
