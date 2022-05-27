import React from "react";
import { useParams } from 'react-router-dom';
import { UserContext } from "./userContext";
import { useState, useContext, useEffect} from 'react';


const ProductDetails = () => {

    const { productId } = useParams();
    const user = useContext(UserContext);  
    const [apiResponse, setState] = useState([]);
    const [product, setProduct] = useState({});

    const callAPI = () => {
    fetch(`http://localhost:9000/products/${productId}`, { 
                method : "GET",
                mode: 'cors'
            })
        .then(res => res.json())
        .then(res => setState(res));
    }

    function addProductToBasket(){
      if(user.userId===undefined){
        let array = user.basket;
          let index=array.findIndex((p)=>p.product.productId===parseInt(productId))
          if(index !==-1){
            array[index].amount++;
            user.setBasket(array)
          }
        else{
          getProduct();
        }
        console.log('Product has been added to basket')
      }
      else{
      const product = {productId: parseInt(productId)};
      fetch(`http://localhost:9000/baskets/${user.userId}/products`,{
         method:'POST', 
         headers: {"Content-Type": "application/json"}, 
         body: JSON.stringify(product)
       }).then((res)=>{
        console.log('Product has been added to basket')
       })
      }}

      const getProduct=() => {
        fetch(`http://localhost:9000/products/${productId}`, {
          method: "GET",
          headers: {"Content-Type": "application/json"},
          mode: 'cors'
        })
          .then(res => res.json())
          .then(res=> {
              let array = user.basket;
              array.push({product:res,amount:1});
              user.setBasket(array);
          });
      }


  useEffect(() =>{
  callAPI();
  },[])

  useEffect(()=>{
    setProduct(apiResponse);
  },[apiResponse])
        
    return (
        <div id="productView">
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