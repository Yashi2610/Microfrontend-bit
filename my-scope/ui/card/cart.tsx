import React, { useState, useEffect } from "react";

import styles from "./cart.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);

    setCart(arr);

    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;

    cart.map((item) => (ans += item.amount * item.price));

    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="container ">
      <article>
        {cart.map((item: any) => (
          <div key={item.id} className={styles["cart_box"]}>
            <div className="row ">
              <div className="col-sm-1">
                <img src={item.img} alt="" />
              </div>

              <div className="col-sm-4  ">
                <span className="fw-bold">{item.title}</span>
              </div>

              <div className="col-sm-3 ">
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleChange(item, -1)}
                >
                  -
                </button>
                <button className="btn btn-info btn-sm ms-2 me-2">
                  {item.amount}
                </button>

                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleChange(item, +1)}
                >
                  +
                </button>
              </div>

              <div className="col-sm-2 ">
                <span className="fw-bold">Price: {item.price}</span>
              </div>

              <div className="col-sm-2 text-end ">
                <button
                  id={styles["remove"]}
                  className=" btn btn-danger btn-sm"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className={styles["total"]}>
          <span>Total Price of your Cart</span>

          <span>Rs : {price}</span>
        </div>
      </article>
    </div>
  );
};

export default Cart;
