import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span>0</span>
    </button>
  );
};

export default HeaderCartButton;
