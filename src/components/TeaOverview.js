import ProductList from './productList';
import React from "react";

const TeaOverview = ({category}) => {
    const productsTest = [
        {"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."},
      {"productId":2,"productName":"Organic Matcha Tea","categories":["green","organic","30-50 DKK"],"price":"35 dkk","image":"/img/greenteas/matcha.png","description":"Matcha is a fine, green tea powder and is used for the traditional Japanese tea ceremony. Matcha is made from the finest top leaves of the plant and is rich on A-, E- and C vitamins, minerals and polyphenols. It is said that Matcha is even healthier than other teas because the whole tea leaves are used."}]; //the http call should probably go here    


    return (
        <div>
        <header id="header" class="teapage-header">
          <div class="headline-container">
            <h1 class="white_headline">{category.categoryName}s</h1>
            <h3 class="white_headline">Discover our tasty {category.categoryName.toLowerCase()}s</h3>
          </div>
          <img src="/img/tea-leaves3.jpg" />
        </header>
    
        <ProductList products={productsTest}/>
      </div>
    )
}

export default TeaOverview;