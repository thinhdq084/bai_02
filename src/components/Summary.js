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

  let totalQuantity = 0;
  let itemMonney = 0;
  let totalMonney = 0;
  let grandMonney = 0;
  let totalTax = 0;
  let Discount = 0;

  listProducts.map((item) => {
    totalQuantity += item.quantity;
    itemMonney = item.price * item.quantity;
    totalMonney += itemMonney;
    totalTax += (itemMonney * item.vat) / 100;
  });
  grandMonney = totalMonney + totalTax;
  Discount = (grandMonney * perDiscount) / 100;
  grandMonney = grandMonney - Discount;

  function changedPromotionCode(event) {
    setPromotionCode(event.target.value);
  }

  function promotionClick() {
    setPromotionDiscount(0);
    promotions.map((item) => {
      if (item.promotionCode === proCode) {
        setPromotionDiscount(item.percentDiscount);
      }
    });
    setPromotionCode("");
  }

  let itemDiscount = "";
  if (perDiscount > 0) {
    itemDiscount = (
      <li className={classes.discountDisplay}>
        Discount:{" "}
        <span>
          {VNDCurrencyFormat(Discount)}
        </span>
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
