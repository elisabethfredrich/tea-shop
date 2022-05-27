import React from "react"
import "./style.css";
import {BrowserRouter, Route, Switch, NavLink, Link} from "react-router-dom"
import ProductDetails from './components/productDetails';
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer';
import TeaOverview from './components/TeaOverview';
import Basket from './components/basket';
import Login from './components/login';
 import Home from './components/home'; 
import About from "./components/about";
import Terms from "./components/terms";
import Privacy from "./components/privacy";
import Contact from "./components/contact";
import Register from "./components/Register";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { UserContext } from "./components/userContext";
import { useState } from 'react';


const App = () => {

    const [userId, setUserId] = useState(undefined);
    const [userName, setUserName] = useState(undefined);
    const [basket, setBasket] = useState([]);


    return (
    <div className="App">
       <BrowserRouter>
        <div id="app-main">
              <NavigationBar/>

              <UserContext.Provider value={{userId, setUserId, userName, setUserName, basket, setBasket}}>

              <Switch>
                <Route path="/basket" component={() => <Basket />} />
                <Route path="/login" component={() => <Login />}/>
                <Route path="/register" component={() => <Register/>}/>
                <Route path="/about" component={About}/>
                <Route path="/terms" component={Terms}/>
                <Route path="/privacy" component={Privacy}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/products/:productId" component={() => <ProductDetails />} />
                <Route path="/:category" render={(props) => ( <TeaOverview key={props.match.params.category} {...props} />)} />
                <Route exact path="/" component={() => <Home />} />
              
              </Switch>

              <Footer/>

              </UserContext.Provider>
            </div>
        </BrowserRouter>
    </div>
  )};


export default App;
