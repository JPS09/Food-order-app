import classes from "./Header.module.css";
import mealsImage from "../Assets/meals.jpg"; // Importing the img to make it available in react
import HeaderCartButton from "./HeaderCartButton.js";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactFood</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        {/* Providing the above import into the src attr */}
        <img src={mealsImage} alt="A lot of delicious food" />
      </div>
    </>
  );
};

export default Header;
