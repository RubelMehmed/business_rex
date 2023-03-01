import { ADD_CART, ADD_PRODUCT, DECREMENT_PRICE, DECREMENT_QUANTITY, INCREMENT_PRICE, PLACE_ORDER, REMOVE_CART, TOTAL_PRICE, UPDATE_CART_BUTTON } from "./types";


export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const addCart = (id, quantity, price) => {
  return {
    type: ADD_CART,
    payload: { id, quantity, price },
  };
};




export const incrementPrice = (id, quantity, price) => {
  return {
    type: INCREMENT_PRICE,
    payload: {
      id,
      quantity,
      price,
    },
  };
};

export const decrementPrice = (id, quantity, price) => {
  return {
    type: DECREMENT_PRICE,
    payload: {
      id,
      quantity,
      price,
    },
  };
};

export const removeCart = (id) => {
  return {
    type: REMOVE_CART,
    payload: id,
  };
};

export const totalPrice = (id, quantity, price) => {
  return {
    type: TOTAL_PRICE,
    payload: {
      id,
      quantity,
      price,
    },
  };
};

export const updateCartButton = (quantity) => {
  return {
    type: UPDATE_CART_BUTTON,
    payload: quantity,
  };
};


export const decrementProduct = (id, quantity) => {
    return {
      type: DECREMENT_QUANTITY,
      payload: { id, quantity },
    };
  };

  export const placeOrder = () => {
    return {
      type: PLACE_ORDER,
    };
  };  