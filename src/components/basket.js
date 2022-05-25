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
      .then(res => setState(res));
      console.log(apiResponse)
    ;
}

  useEffect(() => {
    callAPI();
  }, [])

  useEffect(()=>{
    setList(apiResponse);
  },[apiResponse])


  const initialState = apiResponse;
  const [basketProductsList, setList] = useState(initialState);


const onRemove = (product) => {
  
}
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
        {basketProductsList.map((product) => (<BasketItem key={product.productId} product={product}/>))}
      </tbody>
      </table>
      </div>
    )
}

export default Basket;