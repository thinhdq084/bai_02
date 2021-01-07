import React, { useState } from "react";
import Button from "./Button";
import { VNDCurrencyFormat } from "./NumberFormat";
import { getPromotionCode } from "./listPromotionCode";
import classes from "./Summary.module.css";

function Summary({ listProducts }) {
  // let promotions = getPromotionCode();
  let [promotions, setPromotionList] = useState(getPromotionCode());
  let [proCode, setPromotionCode] = useState("");
  let [perDiscount, setPromotionDiscount] = useState(0);

  let totalQuantity = listProducts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let totalMonney = listProducts.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
  let totalTax = listProducts.reduce(
    (total, product) =>
      total + (product.quantity * product.price * product.vat) / 100,
    0
  );

  let grandMonney = totalMonney + totalTax;
  let Discount = (grandMonney * perDiscount) / 100;

  grandMonney = grandMonney - Discount;

  function changedPromotionCode(event) {
    setPromotionCode(event.target.value);
  }

  function promotionClick() {
    setPromotionDiscount(0);
    let product = promotions.find((promo) => promo.promotionCode === proCode);
    if (product != null) {
      setPromotionDiscount(product.percentDiscount);
    }
    setPromotionCode("");
  }

  let itemDiscount = "";
  if (perDiscount > 0) {
    itemDiscount = (
      <li className={classes.discountDisplay}>
        Discount: <span>{VNDCurrencyFormat(Discount)}</span>
      </li>
    );
  }

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input
          type="text"
          id="promo-code"
          onChange={changedPromotionCode}
          value={proCode}
        />
        <Button promotionClick={promotionClick} />
      </div>
      <div className="summary">
        <ul>
          <li>
            Total quantity: <span>{totalQuantity}</span>
          </li>
          <li>
            Total amount: <span>{VNDCurrencyFormat(totalMonney)}</span>
          </li>
          <li>
            VAT amount: <span>{VNDCurrencyFormat(totalTax)}</span>
          </li>
          {itemDiscount}
          <li>
            Grand total: <span>{VNDCurrencyFormat(grandMonney)}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <Button displayText="Check Out" />
      </div>
    </section>
  );
  //   }
}

export default Summary;
