import React from "react";
import BasketItem from './basketItem';
import { UserContext } from "./userContext";

import { useState, useContext, useEffect} from 'react';

const Basket = () => {

  const user = React.useContext(UserContext);  
  const [apiResponse, setState] = useState([]);

  const callAPI = () => {
    if(user.userId === undefined || user.userId === "null" || user.userId === "undefined" || user.userId === null){
      getBasketForAnynomousUser();
      return;
    }
    console.log("userid:"+user.customerId)

    fetch(`http://localhost:9000/baskets/${user.userId}/products`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
      mode: 'cors'
    })
      .then(res => res.json())
      .then(res => setState(res))
      .then(
      console.log("api response: "+apiResponse));
    ;
}

//for non-registered user
const getProduct=(product) => {
  fetch(`http://localhost:9000/products/${product.productId}`, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
    mode: 'cors'
  })
    .then(res => res.json())
    .then(res=> {
        res = { product:res, amount:product.amount} 
        console.log(res)
        let basket = apiResponse;
        basket.push(res);
        setState(basket);
    }
      )
  ;
}

const getBasketForAnynomousUser = () => {
  console.log(user.basket)
  const basketArray = user.basket;
  setState([]);
  basketArray.forEach(product => {
    getProduct(product);
  })
}

  useEffect(() => {
    callAPI();
  }, [])

  
  const initialState = apiResponse;
  const [basketProductsList, setList] = useState(initialState);

  useEffect(()=>{
    setList(apiResponse);
  },[apiResponse])

    return (
        <div id="basket-container">
          <header id="header-basket">
        <h1>{user.userId === undefined || user.userId === "null" || user.userId === "undefined" || user.userId === null ? "Basket" :  user.userId +"'s basket"}</h1>
        </header>
        <div id="basket">
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
        {basketProductsList.map((product) => (<BasketItem key={product.product.productId} product={product.product} amount={product.amount} updateHandler={callAPI}/>))} 
        </tbody>
      </table>
      <div id="check-out-wrapper">
    <div id="check-out">
      <h1>Total price: {basketProductsList.reduce((prev,product) => prev + parseInt(product.product.price.replaceAll(" dkk",""))*product.amount,0)} dkk</h1>
      </div>
      </div>


      </div>
      </div>
    )
}

export default Basket;