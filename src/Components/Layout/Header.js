import "./Header.module.css";
import mealsImage from "../Assets/meals.jpg"; // Importing the img to make it available in react
const Header = (props) => {
  return (
    <>
      <header>
        <h1>ReactFood</h1>
        <button>Cart placeholder</button>
      </header>
      <div>
        {/* Providing the above import into the src attr */}
        <img src={mealsImage} alt="" />
      </div>
    </>
  );
};

export default Header;
