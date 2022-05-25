import React from "react"
import {BrowserRouter, Route, Switch, NavLink, Link} from "react-router-dom"
import ProductDetails from './components/productDetails';
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer';
import TeaOverview from './components/TeaOverview';
import Basket from './components/basket';
import LoginForm from './components/login';
 import Home from './components/home'; 
import About from "./components/about";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Contact from "./components/contact";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

import { useState, useEffect } from 'react';


const App = () => {

 
    const productTest = {"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."};
    const categoriesTest = [{"categoryName":"Green tea"}, {"categoryName":"Black tea"}, {"categoryName":"White tea"},{"categoryName":"Herbal tea"},{"categoryName":"Rooibos tea"}];
    const categoryTest = {"categoryName":"Green tea"};
    const productsTest = [{"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."},
    {"productId":2,"productName":"Organic Matcha Tea","categories":["green","organic","30-50 DKK"],"price":"35 dkk","image":"/img/greenteas/matcha.png","description":"Matcha is a fine, green tea powder and is used for the traditional Japanese tea ceremony. Matcha is made from the finest top leaves of the plant and is rich on A-, E- and C vitamins, minerals and polyphenols. It is said that Matcha is even healthier than other teas because the whole tea leaves are used."}];


 /*    const [formValues, setFormValues] = useState(""); 
    const [isSubmit, setIsSubmit] = useState(false); 
     */

    const [user, setUser] = useState({undefined});


    return (
    <div className="App">
       <BrowserRouter>
        <div>
              <NavigationBar/>

              <Switch>
            {/*   <userContext.Provider value={{setIsSubmit, setFormValues, formValues, isSubmit}}> */}
                <Route path="/basket" component={() => <Basket basketList={productsTest} user={user}/>} />
                <Route path="/search" component={Search} />
                <Route path="/login" component={() => <LoginForm setUser={setUser}/>}/>
                <Route path="/about" component={About}/>
                <Route path="/terms" component={Terms}/>
                <Route path="/privacy" component={Privacy}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/products/:productId" component={() => <ProductDetails />} />
                {/* the thing below with the props ensures that the router can differientate between /white and /black and
                that it knows to update the TeaOverviw based on that. Solution found here: https://stackoverflow.com/questions/62836374/react-router-does-not-update-component-if-url-parameter-changes */}
                <Route path="/:category" render={(props) => ( <TeaOverview key={props.match.params.category} {...props} />)} />
                <Route exact path="/" component={() => <Home user={user}/>} />
   {/*              </userContext.Provider> */}
              
              </Switch>

              <Footer/>
            </div>
        </BrowserRouter>
    </div>
  )};

/* 
function Home() {
return <h2>Home</h2>;
}
 */



function Search() {
  return <h2>Search</h2>;
}



export default App;
