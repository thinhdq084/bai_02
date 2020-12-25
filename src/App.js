import logo from './logo.svg';
import './App.css';

function App() {
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
            <span className="count">3 items in the bag</span>
          </header>
          <section className="container" alt = "true">
            <ul className="products" alt = "true">
              <li className="row" alt = "true">
                <div className="col left" alt = "true">
                  <div className="thumbnail" alt = "true">
                    <a href="#" alt = "true">
                      <img src="https://via.placeholder.com/200x150"  alt = "true" />
                    </a>
                  </div>
                  <div className="detail" alt = "true">
                    <div className="name" alt = "true">
                      <a href="#" alt = "true">PRODUCT ITEM NUMBER 1</a>
                    </div>
                    <div className="description" alt = "true">
                      Description for product item number 1
                    </div>
                    <div className="price" alt = "true">$5.99</div>
                  </div>
                </div>
                <div className="col right" alt = "true">
                  <div className="quantity" alt = "true">
                    <input type="number" className="quantity" step={1} defaultValue={2} />
                  </div>
                  <div className="remove" alt = "true">
                    <svg version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60" xmlSpace="preserve">
                      <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                    </svg>
                  </div>
                </div>
              </li>
              <li className="row" alt = "true">
                <div className="col left" alt = "true">
                  <div className="thumbnail" alt = "true">
                    <a href="#" alt = "true">
                      <img src="https://via.placeholder.com/200x150"  alt = "true" />
                    </a>
                  </div>
                  <div className="detail" alt = "true">
                    <div className="name" alt = "true">
                      <a href="#" alt = "true">PRODUCT ITEM NUMBER 2</a>
                    </div>
                    <div className="description" alt = "true">
                      Description for product item number 2
                    </div>
                    <div className="price" alt = "true">$9.99</div>
                  </div>
                </div>
                <div className="col right" alt = "true">
                  <div className="quantity" alt = "true">
                    <input type="number" className="quantity" step={1} defaultValue={1} />
                  </div>
                  <div className="remove" alt = "true">
                    <svg version="1.1" className="close" xmlns="//www.w3.org/2000/svg" xmlnsXlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enableBackground="new 0 0 60 60" xmlSpace="preserve">
                      <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </section>
          <section className="container" alt = "true">
            <div className="promotion" alt = "true">
              <label htmlFor="promo-code">Have A Promo Code?</label>
              <input type="text" id="promo-code" /> <button type="button" />
            </div>
            <div className="summary" alt = "true">
              <ul alt = "true">
                <li alt = "true">Subtotal <span>$21.97</span></li>
                <li alt = "true">Tax <span>$5.00</span></li>
                <li className="total" alt = "true">Total <span>$26.97</span></li>
              </ul>
            </div>
            <div className="checkout" alt = "true">
              <button type="button">Check Out</button>
            </div>
          </section>
        </main>
      </div>
  );
}

export default App;
