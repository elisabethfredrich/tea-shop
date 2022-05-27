import React, { useState } from "react";
import { Link} from "react-router-dom"
import { UserContext } from "./userContext";

const BasketItem = ({product,amount,updateHandler}) => {

    const user = React.useContext(UserContext);  

    const deleteItem = () =>{
        if(user.userId===undefined){
            console.log("hej")
            let basketArray = user.basket;
            console.log(basketArray);        
            for (let i = 0; i < basketArray.length; ++i) {
                const element = basketArray[i];
                if(element.product.productId===product.productId) { 
                    if(element.amount > 1){ 
                        element.amount -= 1;
                        break;
                    }
                    else if(element.amount===1){
                        basketArray.splice(i,1);
                        break;
                    }
                }
            }
            user.setBasket(basketArray);
            updateHandler();
            return;
        }
        else{
            fetch(`http://localhost:9000/baskets/${user.userId}/products/${product.productId}`,{
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                mode: 'cors'
        })
        .then(updateHandler);
        }
    }

    return (
        <tr>
            <th scope="row"><img className="basket-img" src={product.image}/></th>
            <td>{product.productName}</td>
            <td>{amount}</td>
            <td>{parseInt(product.price.replaceAll(" dkk",""))*amount} dkk</td>
            <td><Link to="/basket" onClick={deleteItem} className="btn"> Delete from basket</Link></td>
        </tr>
    )
}

export default BasketItem;