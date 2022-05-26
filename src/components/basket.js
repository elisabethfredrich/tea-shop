import React from "react";
import BasketItem from './basketItem';
import { UserContext } from "./userContext";

import { useState, useContext, useEffect} from 'react';

const Basket = () => {

  const user = React.useContext(UserContext);  
  const [apiResponse, setState] = useState([]);

  const callAPI = () => {
    if(user.userId === undefined){
      setState(user.basket)
      return;
    }

    if(user.userId !== undefined){
   
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
}}

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
          <header className="basket-header">
        <h1>{user.userId === undefined || user.userId === "null" || user.userId === "undefined" || user.userId === null ? "Basket" :  user.userName +"'s basket"}</h1>
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