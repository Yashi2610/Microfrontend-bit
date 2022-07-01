import React, { useState, useEffect } from 'react';
import styles from './cart.module.scss';
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
    <article>
      {cart.map((item: any) => (
        <div className={styles["cart_box"]} key={item.id}>
          <div className={styles["cart_img"]}>
            <img src={item.img} alt="" />

            <p>{item.title}</p>
          </div>

          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>

            <button>{item.amount}</button>

            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>

          <div>
            <span>{item.price}</span>

            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className={styles["total"]}>
        <span>Total Price of your Cart</span>

        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
