import {
  ADD_CART, ADD_PRODUCT, DECREMENT_PRICE, INCREMENT_PRICE, REMOVE_CART,
  TOTAL_PRICE, UPDATE_CART_BUTTON
} from "./types";
  
  const initialState = {
    products: [],
    carts: [],
    totalPrice: 0,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PRODUCT:
        const newProduct = {
          id: state.products.length + 1,
          ...action.payload,
        };
        return {
          ...state,
          products: [...state.products, newProduct],
        };
      case ADD_CART:
        const cartItem = state.carts.find(
          (item) => item.id === action.payload.id
        );
        if (cartItem) {
          cartItem.quantity++;
          return {
            ...state,
            cart: [...state.carts],
          };
        } else {
          return {
            ...state,
            cart: [...state.carts, { ...action.payload, quantity: 1 }],
          };
        }
      case UPDATE_CART_BUTTON:
        const updatedCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: updatedCart,
        };
      case INCREMENT_PRICE:
        const incrementedCart = state.carts.map((item) => {
          if (item.id === action.payload.id && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: incrementedCart,
        };
      case DECREMENT_PRICE:
        const decrementedCart = state.carts.map((item) => {
          if (item.id === action.payload.id && item.quantity > 0) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
        return {
          ...state,
          cart: decrementedCart,
        };
      case REMOVE_CART:
        const filteredCart = state.carts.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filteredCart,
        };
      case TOTAL_PRICE:
        const total = state.carts.reduce(
          (accumulator, item) => accumulator + item.price * item.quantity,
          0
        );
        return {
          ...state,
          totalPrice: total,
        };

      
        
      default:
        return state;
    }
  };
  
  export default reducer;
  