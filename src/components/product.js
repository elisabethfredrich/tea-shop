import { Card, Button } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "./userContext";

import { useState, useContext, useEffect} from 'react';

const Product = ({product}) => {

  const user = React.useContext(UserContext);  
  let history = useHistory();
  
  const Button = styled.button`
  
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 12px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
  margin: 0.2rem;
  color: black;
/* Add a light grey background on mouse-over */
:hover{
  background-color: #ddd;
}
/* Add a dark background to the active button */
active {
  background-color: #666;
  color: white;
}
`;


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
  
  function addProductToBasket(productId){
    if(user.userId===undefined){
      let array = JSON.parse(localStorage.getItem("basket"))
      if(array===null) {array = []}
      if(array.length > 0){
        let containsId = false;
        for(let i=0;i<array.length; i++){
            if (array[i].productId === productId){
            array[i].amount += 1;
            containsId = true;
            break;}
        }
      if (containsId ===false) array.push({productId:productId, amount:1})
      }
      console.log(array);
      localStorage.setItem("basket", JSON.stringify(array));
      return;
    }

    const product = {productId: productId};
    fetch(`http://localhost:9000/baskets/${user.userId}/products`,{
       method:'POST', 
       headers: {"Content-Type": "application/json"}, 
       body: JSON.stringify(product)
     }).then(()=>{
       console.log('Product is added to basket')
     })
    }

    return (
        <div className="card">
        <img variant="top" img="true" src={product.image} alt="Card image"/>
        <div className="card-body">
            <h4 className="card-title">{product.productName}</h4>
            <p className="card-text">{product.price}</p>
            <Button onClick={() => addProductToBasket(product.productId)}>Add to basket</Button>
            <Button onClick={() => moveToProductDetails(product.productId)}>Read more</Button>

            {/* Another way to make the buttons: */}
            {/* <Link className="btn" to={`/products/${product.productName.replaceAll(" ", "")}`}>Read more</Link> */}
        </div>
      </div>
    )
}

export default Product;