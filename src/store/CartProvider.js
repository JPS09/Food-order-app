import CartContext from "./cart-context";
import { useReducer } from "react";

// defaultState for the cart managed here, useful for the useReducer Hook (2nd argument)
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//Defining the function that will be passed to the useReducer Hook (1st argument)
const cartReducer = (state, action) => {
  //Aceessing the type key provided when disptaching the action to sort out the correct behavior
  if (action.type === "ADD_CART_ITEM") {
    // IMPORTANT : the state must NOT be edited directly -> They must be considered immutable
    // ONLY use methods that return a NEW element
    const updatedItems = state.items.concat(action.payload); // Mergin the old state with the new one
    const updatedTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount; // Adding to the old state the new values carried by adding the above item
    return {
      // Returning the updated state with the same structure as the one which came before it
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, disptachCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    disptachCartAction({
      // Identifier to use further down the line inside the useReducer function
      type: "ADD_CART_ITEM",
      // Element that has been changed
      payload: item,
    });
  };

  const removeItemfromCartHanlder = (id) => {
    // Same logic as ADD
    disptachCartAction({ type: "REMOVE_CART_ITEM", payload: id });
  };

  const cartContext = {
    // Linking the state managed by useReducer to the actuel context
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHanlder,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
