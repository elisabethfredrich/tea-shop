import React from "react";
import BasketItem from './basketItem';

import { useState, useContext, useEffect} from 'react';

const Basket = ({user}) => {

  const [apiResponse, setState] = useState([]);

  const callAPI = () => {
    console.log("userid:"+user.customerId)

    fetch(`http://localhost:9000/baskets/${user.customerId}/products`, {
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
    if(user===undefined){
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
        <div>
        <h1>{user === undefined ? "Basket" :  user.firstName +"'s basket"}</h1>
        <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
        {basketProductsList.map((product) => (<BasketItem key={product.productId} product={product} user={user} updateHandler={callAPI}/>))}
      </tbody>
      </table>
      <h1>Total price: {basketProductsList.reduce((prev,product) => prev + parseInt(product.price.replaceAll(" dkk","")),0)} dkk</h1>
      </div>
    )
}

export default Basket;