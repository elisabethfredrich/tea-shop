import React from "react";

const Filter = ({handler}) => {  
  const FilterButton = ({filter}) => {
    return (
      <button className="btn btn-1" onClick={ () => handler(`${filter}`)} >{filter}</button>
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
          <FilterButton filter="reset filter"/>
          <FilterButton filter="organic"/>
          <FilterButton filter="conventional"/>
        
          <p>Price</p>
          <select className="form-select" id="form-select" onChange={(val) => handler(val.target.value)}>
            <option value="reset filter">select price range</option>
            <FilterOption filter="10-29 DKK" />
            <FilterOption filter="30-50 DKK"/>
            <FilterOption filter="51-70 DKK"/>
          </select>
      </div>    
    )
}
export default Filter;