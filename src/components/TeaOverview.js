import ProductList from './productList';
import React from "react";
import Filter from './filter';
import Product from './product';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TeaOverview = () => {

  const { category } = useParams(); 
  const [apiResponse, setState] = useState([]);
  const initialState = apiResponse;
  const [productList, setList] = useState(initialState);

  const callAPI = () => {
    if(category==="All"){
        fetch(`http://localhost:9000/products`, { 
          method : "GET",
          mode: 'cors'
      })
    .then(res => res.json())
    .then(res => setState(res));
    }
    else{
    fetch(`http://localhost:9000/products/productCategories/${category.toLowerCase()}`, { 

                method : "GET",
                mode: 'cors'
            })
        .then(res => res.json())
        .then(res => setState(res));
    }
  }

  useEffect(() =>{
    callAPI();
  },[])

  useEffect(()=>{
    setList(apiResponse);
  },[apiResponse])

  const filterHandler = (filterCategory) => {
    if (filterCategory === "reset filter"){
      setList(initialState);
    }
    else{
      const newList = productList.filter((product) => product.categories.includes(filterCategory));
      setList(newList);
    }
  };

  return (
      <div id='main-content'>
        <header id="header" className="teapage-header">
        <div className="headline-container">
          <h1 className="white_headline">{category} teas</h1>
          <h3 className="white_headline">Discover our tasty {category.toLowerCase()==="all"?"":category.toLowerCase()} teas</h3>
        </div>
        <img src="/img/tea-leaves3.jpg" />
      </header>

      <Filter handler={filterHandler}/>
  
      <ProductList products={productList}/> 
    </div>
  )
}

export default TeaOverview;