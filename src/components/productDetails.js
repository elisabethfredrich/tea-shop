import { Button } from "react-bootstrap";
import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import { UserContext } from "./userContext";


const ProductDetails = () => {
  const { productId } = useParams();

  const [apiResponse, setState] = useState([]);
  const [product, setProduct] = useState({});
  const user = React.useContext(UserContext);  


  const getProduct=() => {
    fetch(`http://localhost:9000/products/${productId}`, {
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

  function addProductToBasket(){
    if(user.userId===undefined){
      let array = user.basket;

        let index=array.findIndex((p)=>p.product.productId===product.productId)
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






    const callAPI = () => {
    fetch(`http://localhost:9000/products/${productId}`, { 
                method : "GET",
                mode: 'cors'
            })
        .then(res => res.json())
        .then(res => setState(res));
    }

    // This effect hook is the functional component version of didComponentMount (or whatever its called)
    // it is called only once upon loading/building the page/component.
    useEffect(() =>{
    callAPI();
    },[])

      // We need to have this useEffect hook in order to update the ProductList component correctly
  // it is only called when the apiResponse has been fetched
  useEffect(()=>{
    setProduct(apiResponse);
  },[apiResponse])

        
    return (
        <div>
        <div className="product-image">
            <img src={product.image} alt="Card image" />
          </div>
          <div className="product-description">
            <h4 className="product-title">{product.productName}</h4>
            <p className="card-text">
                {product.description}
            </p>
            <p className="card-text">{product.price}</p>
        
            <button className="btn" onClick={addProductToBasket}>Add to basket</button>
              </div>
        </div>
    )
}

export default ProductDetails;