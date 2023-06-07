import classes from "./payment.module.css";
import {
    Link,
  } from "react-router-dom";
function Payment() {
  return (
    <div className={classes.payment}>
      <div className={classes.paymentScreen}>
        <form>
            <p>Card Number</p>
            <input placeholder="Enter Card Number ..." type="text" required></input>
            <p>Name on Card</p>
            <input type="tesxt" placeholder="Enter Name" required></input>
            <p className={classes.ep}>Expiration Date</p>
            <p className={classes.sc}>Security Code</p>
            <input type="text" className={classes.input1} placeholder="mm/yy" required></input>
            <input type="text" className={classes.input1} placeholder="Enter Security Code" required></input>
            <Link style={{ textDecoration: 'none' }} to={"/success"}>
            <button type="submit">Pay now</button>
            </Link>
        </form>
      </div>
    </div>
  );
}

export default Payment;

        