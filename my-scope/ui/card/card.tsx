import React, { ReactNode, useState } from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from '@my-org/my-scope.header';

import Home from './home';

import Cart from './cart';

export function Card() {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState<any[]>([]);

  const handleClick = (item: any) => {
    if (cart.indexOf(item) !== -1) return;

    setCart([...cart, item]);
  };

  const handleChange = (item: any, d: any) => {
    const ind = cart.indexOf(item);

    const arr = cart;

    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;

    setCart([...arr]);
  };
  return (
    <div>
      <Header setShow={setShow} size={cart.length} />

      {show ? (
        <Home handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}
