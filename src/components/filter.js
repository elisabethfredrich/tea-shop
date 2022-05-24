import React from "react";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import styled from "styled-components";


const Filter = ({handler}) => {
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
    :active {
      background-color: #666;
      color: white;
    }
    `;
  
  const FilterButton = ({filter}) => {
    
    return (
      <Button className="btn btn-1" onClick={ () => handler(`${filter}`)} >{filter}</Button>
    )
  }
  const FilterOption = ({filter}) => {
    return (
      <option className="btn" value={`${filter}`}>
            {filter}
          </option>
    )
  }

    return (
        <div id="myBtnContainer">
          <h5>Filters</h5>
          <FilterButton filter="show all"/>
          <FilterButton filter="organic"/>
          <FilterButton filter="conventional"/>
        
          <p>Price</p>
          <select className="form-select" id="form-select" onChange={(val) => handler(val.target.value)}>
            <option value="show all">select price range</option>
            <FilterOption filter="10-29 DKK" />
            <FilterOption filter="30-50 DKK"/>
            <FilterOption filter="51-70 DKK"/>
          </select>
      </div>    
    )
}
export default Filter;