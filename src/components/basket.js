import React from "react";
import BasketItem from './basketItem';

const Basket = ({basketList}) => {


/*  let basketPost = () =>{
   isSubmit ? 
 }
  {isSubmit ? "Make a Post for an non registered user - else get the state of the userID"}
 */


const onRemove = (product) => {
  
}
    return (
        <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
        {basketList.map((product) => (<BasketItem key={product.productId} product={product}/>))}
      </tbody>
      </table>
    )
}

export default Basket;