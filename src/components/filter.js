import React from "react";
import { Button } from "react-bootstrap";



const Filter = ({handler}) => {
    return (

        <div id="myBtnContainer">
        <h5>Filters</h5>
        <button className="btn btn-1 active" >Show all</button>
        <button className="btn btn-1">Organic teas</button>
        <button className="btn btn-1"  onClick={ () => handler("organic")} >Conventional teas</button>
      
        <p>Price</p>
        <select className="form-select" id="form-select" aria-label="Default select example">
          <option selected value="all">
            select price range
          </option>
          <option className="btn" value="10-29">
            10 – 29 dkk
          </option>
          <option className="btn" value="30-50">
            30 – 50 dkk
          </option>
          <option className="btn" value="51-70">
            51 – 70 dkk
          </option>
        </select>
      </div>    
    )
}

export default Filter;