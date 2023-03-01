import {
  ADD_CART,
  ADD_PRODUCT,
  DECREMENT_PRICE,
  DECREMENT_QUANTITY,
  INCREMENT_PRICE,
  PLACE_ORDER,
  REMOVE_CART,
  TOTAL_PRICE,
  UPDATE_CART_BUTTON
} from "./types";
  
  const initialState = {
    products: [],
    carts: [],
    quantity: 0,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case ADD_CART:
        return {
          ...state,
          carts: [
            ...state.carts,
            {
              id: action.payload.id,
              quantity: action.payload.quantity,
              price: action.payload.price,
            },
          ],
          quantity: state.quantity + 1,
        };
      case INCREMENT_PRICE:
        const incrementedCarts = state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            return {
              ...cart,
              quantity: cart.quantity + action.payload.quantity,
              price: cart.price + action.payload.price,
            };
          }
          return cart;
        });
        return {
          ...state,
          carts: incrementedCarts,
        };
      case DECREMENT_PRICE:
        const decrementedCarts = state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            return {
              ...cart,
              quantity: cart.quantity - action.payload.quantity,
              price: cart.price - action.payload.price,
            };
          }
          return cart;
        });
        return {
          ...state,
          carts: decrementedCarts,
        };
      case REMOVE_CART:
        const filteredCarts = state.carts.filter(
          (cart) => cart.id !== action.payload
        );
        return {
          ...state,
          carts: filteredCarts,
          quantity: state.quantity - 1,
        };
      case TOTAL_PRICE:
        const updatedCarts = state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            return {
              ...cart,
              quantity: action.payload.quantity,
              price: action.payload.price,
            };
          }
          return cart;
        });
        return {
          ...state,
          carts: updatedCarts,
        };
      case UPDATE_CART_BUTTON:
        return {
          ...state,
          quantity: action.payload,
        };
      case DECREMENT_QUANTITY:
        const updatedProducts = state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: product.quantity - action.payload.quantity,
            };
          }
          return product;
        });
        return {
          ...state,
          products: updatedProducts,
        };
      case PLACE_ORDER:
        return {
          ...state,
          carts: [],
          quantity: 0,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  