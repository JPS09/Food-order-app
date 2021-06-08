import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon.js";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span classNAme={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;
