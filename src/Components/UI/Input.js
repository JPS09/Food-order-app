import classes from "./Input.module.css";
const Input = (props) => {
  <div className={classes.input}>
    <label htmlFor="input">{props.label}</label>
    <input id="input" type="text" />
  </div>;
};

export default Input;
