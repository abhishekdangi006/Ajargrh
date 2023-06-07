import classes from "./success.module.css";
function Success() {
  return (
    <div className={classes.success}>
        <img src="https://cdn-icons-png.flaticon.com/128/7518/7518748.png" alt="logo"/>
        <div>
            <h1>Payment received!</h1>
            <p>Your oder is now on the way please <br/>check your email for the receipt.</p>
        </div>
    </div>
  );
}

export default Success;