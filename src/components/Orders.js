import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementPrice, incrementPrice, removeCart } from '../redux/actions';

const Orders = (cart) => {
  const dispatch = useDispatch();

  const {id, price, quantity } = cart
  const [totalPrice, setTotalPrice] = useState(0);

  const cartItems = useSelector((state) => state.carts);

  const handleIncrement = (id, quantity, price) => {
    dispatch(incrementPrice(id, quantity, price));
    setTotalPrice(totalPrice + quantity*price);
  };

  const handleDecrement = (id, quantity, price) => {
    dispatch(decrementPrice(id, quantity, price));
    setTotalPrice(totalPrice - quantity*price);
  };

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const handlePlaceOrder = () => {
    // handle placing order logic here
  };

  const cartInfo = cartItems.map((product) => (
    <div key={product.id}>
      <div>{product.name}</div>
      <div>Price: ${totalPrice}</div>
      <div>
        Quantity:
        <button onClick={() => handleDecrement(id, quantity, price)}>-</button>
        {quantity}
        <button onClick={() => handleIncrement(id,quantity, price)}>+</button>
      </div>
      <div>Total: ${(price * quantity)}</div>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  ));

  return (
    <div>
      <h2>Order Place</h2>
      {cartInfo}
      <div>
        Total Price: ${totalPrice}
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Orders;
