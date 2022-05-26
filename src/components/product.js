import { Card, Button } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";

import { UserContext } from "./userContext";

import { useState, useContext, useEffect} from 'react';

const Product = ({product}) => {

  const user = React.useContext(UserContext);  
  let history = useHistory();


  function moveToProductDetails(productId){
      history.push(`/products/${productId}`)
  }
  
  // const [basketArray,updateBasket] = useState([]);

  // const getProduct=(product) => {
  //   fetch(`http://localhost:9000/products/${product.productId}`, {
  //     method: "GET",
  //     headers: {"Content-Type": "application/json"},
  //     mode: 'cors'
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       let test = basketArray;
  //       test.push(res);
  //       updateBasket(test);
  //     })

  //   ;
  // }


  const [apiResponse, setState] = useState([]);


  const getProduct=(product) => {
    fetch(`http://localhost:9000/products/${product.productId}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
      mode: 'cors'
    })
      .then(res => res.json())
      .then(res=> {
         /*  let newproduct = apiResponse;
          newproduct.push(res); */
          let array = user.basket;
         // console.log(newproduct);
          array.push({product:res,amount:1});
          user.setBasket(array);
          console.log(array);
      }
        )
    ;
  }

  function addProductToBasket(productId){
    if(user.userId===undefined){
      let array = user.basket;

        let index=array.findIndex((p)=>p.product.productId===productId)
        if(index !==-1){
          array[index].amount++;
          user.setBasket(array)
          return;
        }
      else{
        getProduct(product);
      }

    }
    else{
    const product = {productId: productId};
    fetch(`http://localhost:9000/baskets/${user.userId}/products`,{
       method:'POST', 
       headers: {"Content-Type": "application/json"}, 
       body: JSON.stringify(product)
     }).then(()=>{
       console.log('Product is added to basket')
     })
    }}

    return (
        <div className="card">
        <img variant="top" img="true" src={product.image} alt="Card image"/>
        <div className="card-body">
            <h4 className="card-title">{product.productName}</h4>
            <p className="card-text">{product.price}</p>
            <button className="btn" onClick={() => addProductToBasket(product.productId)}>Add to basket</button>
            <button className="btn" onClick={() => moveToProductDetails(product.productId)}>Read more</button>

            {/* Another way to make the buttons: */}
            {/* <Link className="btn" to={`/products/${product.productName.replaceAll(" ", "")}`}>Read more</Link> */}
        </div>
      </div>
    )
}

export default Product;