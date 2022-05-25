import ProductList from './productList';
import React from "react";
import Filter from './filter';
import Product from './product';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TeaOverview = () => {

  const { category } = useParams(); //loads the parameter of the url, e.g. the 'Green' in http://localhost:3000/Green

  const [apiResponse, setState] = useState([]);

  const callAPI = () => {
    fetch(`http://localhost:9000/products/${category.toLowerCase()}`, { 
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
    setList(apiResponse);
  },[apiResponse])


  const initialState = apiResponse;
  const [productList, setList] = useState(initialState);

    const filterHandler = (filterCategory) => {
      if (filterCategory === "reset filter"){
        setList(initialState);
      }
      else{
        setList(initialState); //maybe delete this - ask Katrine
        const newList = productList.filter((product) => product.categories.includes(filterCategory));
        setList(newList);
      }
    };

    return (
        <div>
         <header id="header" className="teapage-header">
          <div className="headline-container">
            <h1 className="white_headline">{category} teas</h1>
            <h3 className="white_headline">Discover our tasty {category.toLowerCase()} teas</h3>
          </div>
          <img src="/img/tea-leaves3.jpg" />
        </header>

        <Filter handler={filterHandler}/>
    
        <ProductList products={productList}/> 
      </div>
    )
}

export default TeaOverview;