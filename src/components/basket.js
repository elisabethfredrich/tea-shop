import React from "react";
import BasketItem from './basketItem';
import { UserContext } from "./userContext";

import { useState, useContext, useEffect} from 'react';

const Basket = () => {

  const user = React.useContext(UserContext);  
  const [apiResponse, setState] = useState([]);

  const callAPI = () => {
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
      let test = apiResponse;
      test.push(res);
      setState(test)
    }
      )
  ;
}


  useEffect(() => {
    if(user.userId===undefined){
      const basketArray = JSON.parse(localStorage.getItem("basket"));
      basketArray.forEach(product => {
        getProduct(product)
      });
      //setState(basketArray);
      return;
    }
    callAPI();
  }, [])

  useEffect(()=>{
    setList(apiResponse);
  },[apiResponse])



  const initialState = apiResponse;
  const [basketProductsList, setList] = useState(initialState);

    return (
        <div id="basket-container">
          <header id="header-basket">
        <h1>{user === undefined ? "Basket" :  user.firstName +"'s basket"}</h1>
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
        {basketProductsList.map((product) => (<BasketItem key={product.product.productId} product={product.product} amount={product.amount} user={user} updateHandler={callAPI}/>))}
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