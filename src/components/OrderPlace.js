import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPrice, incrementPrice, removeCart,
  totalPrice
} from "../redux/actions";

const OrderPlace = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts);

  const handleIncrement = (id) => {
    dispatch(incrementPrice(id));
    dispatch(totalPrice());
  };

  const handleDecrement = (id) => {
    dispatch(decrementPrice(id));
    dispatch(totalPrice());
  };

  const handleRemove = (id) => {
    dispatch(removeCart(id));
    dispatch(totalPrice());
  };

  const handlePlaceOrder = () => {
    // Place order logic here
    console.log("Order placed");
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h4>Order Summary</h4>
          <div className="order-place">
    </div>
          <hr />
          {carts.length > 0 ? (
            carts.map((cart) => (
              <div key={cart.id}>
                <div className="row">
                  <div className="col-md-4">
                    <img src={cart.img_url} alt={cart.product_name} width="100" />
                  </div>
                  <div className="col-md-8">
                    <h5>{cart.product_name}</h5>
                    <p>
                      Price: ${cart.price} x {cart.quantity}
                    </p>
                    <p>Total: ${cart.price * cart.quantity}</p>
                    <button
                      onClick={() => handleDecrement(cart.id, cart.price,cart.quantity)}
                      disabled={cart.quantity === 1}
                    >
                      -
                    </button>
                    {cart.quantity}
                    <button
                      onClick={() => handleIncrement(cart.id, cart.price, cart.quantity)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(cart.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <p>No products added to cart.</p>
          )}
        </div>
        <div className="col-md-4">
          <h4>Order Total</h4>
          <hr />
          <p>Total: ${useSelector((state) => state.totalPrice)}</p>
          <button className="btn btn-primary" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPlace;

//===============================>


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { decrementPrice, incrementPrice, removeCart, totalPrice } from "../redux/actions";

// const OrderPlace = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.carts);

//   const handleIncrement = (index) => {
//     dispatch(incrementPrice(index));
//     dispatch(totalPrice());
//   };

//   const handleDecrement = (index) => {
//     dispatch(decrementPrice(index));
//     dispatch(totalPrice());
//   };

//   const handleRemove = (index) => {
//     dispatch(removeCart(index));
//     dispatch(totalPrice());
//   };

//   return (
//     <div>
//       <h2>Order Summary</h2>
//       {cart.map((item, index) => (
//         <div key={index}>
//           <h3>{item.product_name}</h3>
//           <p>Price: ${item.price}</p>
//           <p>Quantity: {item.quantity}</p>
//           <button onClick={() => handleIncrement(index)}>+</button>
//           <button onClick={() => handleDecrement(index)}>-</button>
//           <button onClick={() => handleRemove(index)}>Remove</button>
//         </div>
//       ))}
//       <p>Total Price: ${useSelector((state) => state.totalPrice)}</p>
//     </div>
//   );
// };

// export default OrderPlace;
