import classes from "./product.module.css";
import React from "react";
import {
    Link,
  } from "react-router-dom";
class Product extends React.Component{
    constructor(){
        super();
        this.state = {
          qty : 1,
          size: false,
        }
      }
      handleIncrease = () => {
    
        this.setState({
          qty : this.state.qty + 1
        });
      };
    
      handleDecrease = () => {
    
        if (this.state.qty === 1) {
          alert("qty should not be smaller than 1");
          return;
        }
        this.setState({
          qty : this.state.qty - 1
        });
      };
    
      handleSize = () => {
        this.setState({
          size : !this.state.size
        });
      };

     
    render(){
        const {qty, size} = this.state;
  return (
    <div className={classes.product}>
      <div className={classes.productScreen}>
        <div className={classes.imgCon}>
        <Link style={{ textDecoration: 'none' }} to={"/"}>
            <img src="https://cdn-icons-png.flaticon.com/128/93/93634.png" alt=""/>
            </Link>
        </div>
        <div className={classes.detailCon}>
            <div className={classes.firstsec}>
                <div className={classes.title}>
                    <div className={classes.name}>Roller Rabbit</div>
                    <div className={classes.company}>Vado Odelle Dress</div>
                    <div className={classes.review}><img src="https://cdn-icons-png.flaticon.com/128/10801/10801392.png" alt=""/>(320 Review)</div>
                </div>
                <div className={classes.qty}>
                    <div className={classes.qtybtn}>
                        <div onClick={this.handleDecrease}>-</div>
                        <div>{qty}</div>
                        <div onClick={this.handleIncrease}>+</div>
                    </div>
                    <div className={classes.stock}> 
                        Available in stock
                        <div />
                    </div>
                </div>
            </div>
            <div className={classes.sizeCon}>
                <div className={classes.sizeTitle}>Size</div>
                <div className={classes.sizes}>
                {size? <div onClick={this.handleSize} className={classes.nsize}>S</div> :
                 <div onClick={this.handleSize} className={classes.size}>S</div>}
                {size? <div onClick={this.handleSize} className={classes.nsize}>M</div> :
                 <div onClick={this.handleSize} className={classes.size}>M</div>}
                 {size? <div onClick={this.handleSize} className={classes.nsize}>L</div> :
                 <div onClick={this.handleSize} className={classes.size}>L</div>}
                 {size? <div onClick={this.handleSize} className={classes.nsize}>XL</div> :
                 <div onClick={this.handleSize} className={classes.size}>XL</div>}
                 {size? <div onClick={this.handleSize} className={classes.nsize}>XXL</div> :
                 <div onClick={this.handleSize} className={classes.size}>XXL</div>}
                </div>
            </div>
            <div className={classes.desCon}>
                <div className={classes.desTitle}>
                    Description
                </div>
                <div className={classes.des}>
                    Get a little lift from there sam edelman sandals feauring ruched straps and leather lace up ties, while a braided jute sole make a fresj statement summer
                </div>
            </div>
            <div className={classes.checkout}>
                <div>
                <div className={classes.total}>Total Price</div>
                <div className={classes.amount}>${198.00*qty}</div>
                </div>
                <div className={classes.checkoutbtn}>
                    <Link style={{ textDecoration: 'none' }} to={"/payment"}>
                    <button>
                        <img src="https://github.com/abhishekdangi006/image/assets/76874880/9e43c88e-cd43-4094-b312-8a020cb9589c" alt=""/>
                        <span>Buy Now</span>
                    </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
    }
}

export default Product;

        