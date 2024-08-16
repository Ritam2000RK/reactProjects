import React, { useReducer } from "react";

const items = [
  { id: 1, name: "item 1", price: 10 },
  { id: 2, name: "item 2", price: 50 },
  { id: 3, name: "item 3", price: 30 },
];

const ACTIONS = {
  ADD_ITEM: "add_item",
  REMOVE_ITEM: "remove_item",
  UPDATE_ITEM: "update_item",
};

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      const itemExists = state.cart.find((item) => item.id === action.item.id);
      if (itemExists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: 1 }],
        };
      }

    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };

    case ACTIONS.UPDATE_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.id ? { ...item, quantity: action.quantity } : item
        ),
      };
    
    default:
        return state;
  }
}

function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: ACTIONS.ADD_ITEM, item });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: ACTIONS.UPDATE_ITEM, id, quantity})
  }

  const removeItemFromCart = (id) => {
    dispatch({ type: ACTIONS.REMOVE_ITEM, id });
  }

  const calculateTotal = () => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity,0);
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <div>
        {items.map((item) => (
            <button key={item.id} onClick={() => addItemToCart(item)}>Add {item.name}</button>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {state.cart.map((item) => (
            <li key={item.id}>
                {item.name} = {item.quantity} X ${item.price}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 0))}>-</button>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                
            </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
    </>
  );
}

export default Cart;
