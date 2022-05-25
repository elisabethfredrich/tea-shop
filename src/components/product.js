import { Card, Button } from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Product = ({product}) => {

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

  const[userId, setUserId] = useState('1000');
  const[products, setProducts] = useState('');

  const createBasketAndAddProductForAnonymousUser = (productId) => {
    const basket = {userId, products:[{productId}]};

    fetch('http://localhost:9000/baskets', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(basket)
    }).then(() =>{
      console.log(JSON.stringify(basket))
    })
  }

  /*function moveProductToBasket(productId){
   fetch(`http://localhost:9000/baskets/${productId}/products`,{
      mode: 'no-cors',
 /*  const handleAddToBasket = () => moveProductToBasket(product.id, 1) */


  let customerId = 1;
  let productId = 1;


   function moveProductToBasket(productId, customerId){
   fetch(`http://localhost:9000/baskets/${customerId}/products`,{
      method:'POST', 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(productId)
    }).then(()=>{
      console.log('Product is added to basket')
    })
  
  
  } 
   
    return (
        <Card className="card" style={{ minWidth: '300px', border: 'none' }}>
        <Card.Img variant="top" img="true" src={product.image} alt="Card image"/>
        <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button onClick={() => createBasketAndAddProductForAnonymousUser(product.productId)}>Add to basket</Button>
            <Button onClick={() => moveProductToBasket(customerId,productId)}>Add to basket</Button>
            <Button onClick={() => moveToProductDetails(product.productId)}>Read more</Button>

            {/* Another way to make the buttons: */}
            {/* <Link className="btn" to={`/products/${product.productName.replaceAll(" ", "")}`}>Read more</Link> */}
        </Card.Body>
      </Card>
    )
}

export default Product;