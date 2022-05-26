import React from "react"
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
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import { UserContext } from "./components/userContext";
import { useState, useEffect } from 'react';


const App = () => {

    const [userId, setUserId] = useState(undefined);
    const [userName, setUserName] = useState(undefined);
    const [basket, setBasket] = useState([]);

    const getNameForGreeting = (id) => {
      if(userId===undefined){return;}
      fetch(`http://localhost:9000/customers/${id}`, { 
        method : "GET",
        mode: 'cors'
    })
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setUserName(res.customerName)
      console.log(res.customerName)
    })};
  
    // useEffect(() =>{
    //   getNameForGreeting()
    // }, [])

        //grabbing the value of the userId when logged in
        useEffect(() => {
          let data = localStorage.getItem('THE_ID');
          if(data === undefined || data === "null" || data === "undefined" || data === null) {data=undefined}
          console.log(data)
          setUserId(data);
          getNameForGreeting(data);
          console.log("id grabbed:", data);
      }, []);

      //setting the value of the userName in localstorage whenever it changes
      useEffect(() => {
        if(userId!==undefined){
          localStorage.setItem('THE_ID', userId)}
    }, [userId]);    


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
                {/* the thing below with the props ensures that the router can differientate between /white and /black and
                that it knows to update the TeaOverviw based on that. Solution found here: https://stackoverflow.com/questions/62836374/react-router-does-not-update-component-if-url-parameter-changes */}
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
