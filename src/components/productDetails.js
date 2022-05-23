import { Button } from "react-bootstrap";
import React from "react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ProductDetails = () => {

    const { productId } = useParams();

    const [apiResponse, setState] = useState([]);

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

  const [product, setProduct] = useState({});
        
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
        
            <Button onclick={()=> console.log()}>Add to basket</Button>
              </div>
        </div>
    )
}

export default ProductDetails;