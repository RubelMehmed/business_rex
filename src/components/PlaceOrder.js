import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, updateProduct } from "../redux/actions";

const OrderPlace = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingInfo((prevShippingInfo) => ({
      ...prevShippingInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update product quantity
    cart.forEach((cartItem) => {
      const product = products.find((p) => p.id === cartItem.id);
      const updatedProduct = { ...product, quantity: product.quantity - cartItem.quantity };
      dispatch(updateProduct(updatedProduct));
    });
    // Clear cart and shipping info
    dispatch(clearCart());
    setShippingInfo({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h2>Order Place</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={shippingInfo.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={shippingInfo.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={shippingInfo.phone}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={!cart.length}>
          Place Order
        </button>
      </form>
      <h3>Cart:</h3>
      {cart.map((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        return (
          <div key={cartItem.id}>
            <h4>{product.product_name}</h4>
            <p>Quantity: {cartItem.quantity}</p>
          </div>
        );
      })}
      {!cart.length && <p>Your cart is empty!</p>}
    </div>
  );
};

export default OrderPlace;
