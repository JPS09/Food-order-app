import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
  // Calling the original version of the context to insure that that app wide state is updated correctly
  // Using the Provider would not result in the same result
  const cartCtx = useContext(CartContext);
  // Using reduce to display the number of elements currently in the cart by adding the value of the 'amount' key to to 'currentNumber'
  // 'currentNumber' is the initial value defined after the comma in the reduce call
  const cartNbr = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>{cartNbr}</span>
    </button>
  );
};

export default HeaderCartButton;
