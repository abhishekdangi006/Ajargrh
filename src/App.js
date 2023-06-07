import Home from "./home/Home";
import Product from "./Product.js/Product";
import Payment from "./payment/Payment";
import React from "react";
import Success from "./payment/Success";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

class App extends React.Component{
  
 
  Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product/>,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  render(){
    return (
      <div className="App">
        <RouterProvider router={this.Router} />
      </div>
    );
  }
}

export default App;
