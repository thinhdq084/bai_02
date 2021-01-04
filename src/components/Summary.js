import React from "react";
import Button from "./Button";

function Summary({ listProducts }) {
  //   render() {
  let totalQuantity = 0;
  let itemMonney = 0;
  let totalMonney = 0;
  let grandMonney = 0;
  let totalTax = 0;

  listProducts.map(function (item) {
    totalQuantity += item.quantity;
    itemMonney = item.price * item.quantity;
    totalMonney += itemMonney;
    totalTax += (itemMonney * item.vat) / 100;
  });
  grandMonney = totalMonney + totalTax;

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 2,
  });

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" id="promo-code" /> <Button/>
      </div>
      <div className="summary">
        <ul>
          <li>
            Total quantity: <span>{totalQuantity}</span>
          </li>
          <li>
            Total amount: <span>{formatter.format(totalMonney)}</span>
          </li>
          <li>
            VAT amount: <span>{formatter.format(totalTax)}</span>
          </li>
          <li>
            Grand total: <span>{formatter.format(grandMonney)}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <Button text="Check Out" />
      </div>
    </section>
  );
  //   }
}

export default Summary;
