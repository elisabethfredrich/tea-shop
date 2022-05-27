import { Card } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./userContext";
import { useContext} from 'react';

const Product = ({product}) => {

  const user = useContext(UserContext);  
  let history = useHistory();

  function moveToProductDetails(productId){
      history.push(`/products/${productId}`)
  }

  const getProduct=(product) => {
    fetch(`http://localhost:9000/products/${product.productId}`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
      mode: 'cors'
    })
      .then(res => res.json())
      .then(res=> {
          let array = user.basket;
          array.push({product:res,amount:1});
          user.setBasket(array);
      }
    );
  }

  function addProductToBasket(productId){
    if(user.userId===undefined){
      let array = user.basket;
      let index=array.findIndex((p)=>p.product.productId===productId)
      if(index !==-1){
        array[index].amount++;
        user.setBasket(array)
        }
      else{
        getProduct(product);
      }
      console.log('Product has been added to basket')
    }
    else{
    const product = {productId: productId};
    fetch(`http://localhost:9000/baskets/${user.userId}/products`,{
       method:'POST', 
       headers: {"Content-Type": "application/json"}, 
       body: JSON.stringify(product)
     }).then(()=>{
       console.log('Product has been added to basket')
     })
    }}

    return (
        <Card>
        <Card.Img variant="top" img="true" src={product.image} alt="Card image"/>
        <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <button className="btn" onClick={() => addProductToBasket(product.productId)}>Add to basket</button>
            <button className="btn" onClick={() => moveToProductDetails(product.productId)}>Read more</button>
        </Card.Body>
      </Card>
    )
}

export default Product;