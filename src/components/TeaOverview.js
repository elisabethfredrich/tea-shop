import ProductList from './productList';
import React from "react";
import Filter from './Filter';
import Product from './product';
import { useState } from 'react';

const TeaOverview = ({category}) => {

  const productsTest = [
    {"productId":1,"productName":"Organic conventional sencha tea (test)","categories":["green","organic","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."},
  {"productId":2,"productName":"Organic Matcha Tea","categories":["green","organic","10-29 DKK"],"price":"35 dkk","image":"/img/greenteas/matcha.png","description":"Matcha is a fine, green tea powder and is used for the traditional Japanese tea ceremony. Matcha is made from the finest top leaves of the plant and is rich on A-, E- and C vitamins, minerals and polyphenols. It is said that Matcha is even healthier than other teas because the whole tea leaves are used."},{"productId":3,"productName":"Organic Licorice tea",
  "categories":["Herbal Tea","Organic","30-50 DKK"]
  ,"price":"39 dkk","image":"/img/herbaltea/licorice.jpg","description":"This tea is a very tasty, pure herbal tea composed of lemon grass, peppermint, liquorice roots and apple pieces. It can be drunk both hot and cold and is excellent used as icetea on a hot summerday."}]; //the http call should probably go here    


  const initialState =productsTest;
  const [productList, setList] = useState(initialState);

    const filterHandler = (filterCategory) => {
      if (filterCategory === "show all"){
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
            <h1 className="white_headline">{category.categoryName}s</h1>
            <h3 className="white_headline">Discover our tasty {category.categoryName.toLowerCase()}s</h3>
          </div>
          <img src="/img/tea-leaves3.jpg" />
        </header>

        <Filter handler={filterHandler}/>
    
        <ProductList products={productList}/>
      </div>
    )
}

export default TeaOverview;