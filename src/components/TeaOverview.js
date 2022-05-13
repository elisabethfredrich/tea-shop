import ProductList from './productList';
import React from "react";
import Filter from './Filter';
import Product from './product';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const TeaOverview = () => {

  const { category } = useParams();

  const productsTest = [
    {"productId":1,"productName":"Sencha tea",
        "categories":["green","conventional","30-50 DKK"],
        "price":"32 dkk","image":"/img/greenteas/sencha.jpg",
        "description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."},
    
    {"productId":2,"productName":"Organic Matcha Tea",
        "categories":["green","organic","30-50 DKK"],
        "price":"35 dkk","image":"/img/greenteas/matcha.png",
        "description":"Matcha is a fine, green tea powder and is used for the traditional Japanese tea ceremony. Matcha is made from the finest top leaves of the plant and is rich on A-, E- and C vitamins, minerals and polyphenols. It is said that Matcha is even healthier than other teas because the whole tea leaves are used."},

    {"productId":3,"productName":"Organic Licorice tea",
        "categories":["herbal","organic","30-50 DKK"]
        ,"price":"39 dkk","image":"/img/herbaltea/licorice.jpg",
        "description":"This tea is a very tasty, pure herbal tea composed of lemon grass, peppermint, liquorice roots and apple pieces. It can be drunk both hot and cold and is excellent used as icetea on a hot summerday."},

    {"productId":4,"productName":"Organic Lemon tea",
        "categories":["black","organic","30-50 DKK"]
        ,"price":"45 dkk","image":"/img/blacktea/lemon.jpg",
        "description":"This is a black Keemon tea with lemon and lemon peel of the highest quality. The content of tannic acid in the tea is rather limited and therefore, it is a mild black tea."},
    
    {"productId":5,"productName":"Organic Earl Grey tea",
        "categories":["black","organic","30-50 DKK"]
        ,"price":"35 dkk","image":"/img/blacktea/organicearlgreytea.jpg",
        "description":"A classic black Keemun tea in which the well known bergamot oil have been added. Keemun tea is known as one of the milder black teas and therefore the content of tannic acid is rather limited."},
    
    {"productId":6,"productName":"Quince Tea",
        "categories":["black","conventional","30-50 DKK"]
        ,"price":"32 dkk","image":"/img/blacktea/quincetea.jpg",
        "description":"The popular quince tea is made from black and mild Keemun tea, quince and sunflower flowers. Quince is a pear or apple-like fruit, often used for jam and compote - and for this lovely quince."},
            
    {"productId":7,"productName":"Lapsang Souchong smoked tea",
        "categories":["black","conventional","51-70 DKK"]
        ,"price":"55 dkk","image":"/img/blacktea/lapsangtea.jpg",
        "description":"A very unique tea not consisting of the typical two leaves and a bud, but instead bigger and thicker leaves from the bottom part of the tea plant. These leaves are smoked over exotic wood which gives it the typical smoked flavor."},
            
    {"productId":8,"productName":"Christmas tea",
        "categories":["black","conventional","10-29 DKK"]
        ,"price":"29 dkk","image":"/img/blacktea/christmastea.jpg",
        "description":"Our Christmas tea is made on black Keemun tea combined with all the classic Christmas spices such as apple, hibiscus, carnations, rose hips, almonds, orange peel, currants, fennel, juniper, cinnamon and vanilla aroma, coconut pieces, vanilla pieces, orange flavor, carnation aroma and marigold petals."},
        
    {"productId":9,"productName":"Temple tea",
            "categories":["white","conventional","10-29 DKK"]
            ,"price":"29 dkk","image":"/img/blacktea/templetea.jpg",
            "description":"Completely classic and tasteful black Ceylon Temple Tree Tea with ginkgo biloba leaves, mallow flower, vanilla, Roman chamomile and aroma. Lightly spicy, soft and fresh."},
            
    {"productId":10,"productName":"Aronia tea",
        "categories":["white","conventional","30-50 DKK"]
        ,"price":"32 dkk","image":"/img/blacktea/aroniatea.jpg",
        "description":"Aronia tea is a light, elegant white tea in lovely harmony with high quality aronia, peach, pineapple and marigold. A pure vitamin bomb."},
    
    {"productId":11,"productName":"Organic Chamomile tea",
        "categories":["herbal","organic","30-50 DKK"]
        ,"price":"29 dkk","image":"/img/blacktea/chaomiletea.jpg",
        "description":"This tea is a classic herbal tea with chamomile flowers of the finest quality. It can be drunk alone or be mixed with other herbs or with your favorite tea. Chamomile is said to be soothing to the body and can therefore easily be enjoyed in the evening without affecting your night's sleep."},
    
    {"productId":12,"productName":"Rhubarb tea",
        "categories":["rooibos","conventional","30-50 DKK"]
        ,"price":"32 dkk","image":"/img/blacktea/rhubarbtea.jpg",
        "description":"Rooibos is the popular national drink in South Africa and is also known as 'red tea'. Calling it tea, however, is a bit misleading, as Rooibos does not contain tea from the tea plant Camilia Sinensis as we know it from black and green tea, but comes from the South African plant Rooibos. The Rooibos plant has green leaves, but during the oxidation, where only spring water and the strong African sun are used, the leaves turn red. In this variant we have chosen to combine Rooibos with rhubarb, which gives both sweetness and acidity."},
        

    {"productId":13,"productName":"Ginger tea",
        "categories":["Rooibos Tea","conventional","30-50 DKK"]
        ,"price":"30 dkk","image":"/img/blacktea/gingertea.jpg",
        "description":"Rooibos is the popular national drink in South Africa and is also known as 'red tea'. Calling it tea, however, is a bit misleading, as Rooibos does not contain tea from the tea plant Camilia Sinensis as we know it from black and green tea, but comes from the South African plant Rooibos. The Rooibos plant has green leaves, but during the oxidation, where only spring water and the strong African sun are used, the leaves turn red. In this variant we have chosen to combine Rooibos with ginger, orange, star anise, fennel and cinnamon."},
        
    {"productId":14,"productName":"Organic Sea Buckthorn tea",
        "categories":["Rooibos Tea","Organic","30-50 DKK"]
        ,"price":"39 dkk","image":"/img/blacktea/seabuckthorntea.jpg",
        "description":"Rooibos is the popular national drink in South Africa and is also known as 'red tea'. Calling it tea, however, is a bit misleading, as Rooibos does not contain tea from the tea plant Camilia Sinensis as we know it from black and green tea, but comes from the South African plant Rooibos. The Rooibos plant has green leaves, but during the oxidation, where only spring water and the strong African sun are used, the leaves turn red. In this variant we have chosen to combine Rooibos with sea buckthorn berries, orange peel, aronia berries and safflower."},
        
    {"productId":15,"productName":"Goodnight tea",
        "categories":["Herbal Tea","Organic","30-50 DKK"]
        ,"price":"30 dkk","image":"/img/blacktea/goodnighttea.jpg",
        "description":"This tea is a classic herbal tea made from only the best ingredients such as lemon balm, peppermint, and chamomile that are said to soothe the body. It does not contain tea from the tea plant and is therefore without caffeine and can easily be enjoyed in the evening before you sleep"}];

  

  const initialState = productsTest.filter(product => product.categories.includes(category.toLowerCase()));
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