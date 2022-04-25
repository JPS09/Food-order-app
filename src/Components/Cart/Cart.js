import classes from "./CartIcon.js";
const Cart = (props) => {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 1, price: 12.99 }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
<<<<<<< HEAD
=======
  // const cartItem = <ul>{[{id:'c1', name:'Sushi', amount:1, price: 12.99}].map(item =>{
  //   <li>{item.name}</li>)}</ul>
  // })
>>>>>>> 3b23aece445ae222223e094e004b0bd842002f6f
  return (
    <div>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
