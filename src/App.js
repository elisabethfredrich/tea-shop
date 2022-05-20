import React from "react"
import {BrowserRouter, Route, Switch, NavLink, Link} from "react-router-dom"
import ProductDetails from './components/productDetails';
import NavigationBar from './components/NavigationBar';
import Footer from './components/footer';
import TeaOverview from './components/TeaOverview';
import Basket from './components/basket';
import LoginForm from './components/login';
import Home from './components/home';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";



class App extends React.Component {

  render(){ 
    const productTest = {"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."};
    const categoriesTest = [{"categoryName":"Green tea"}, {"categoryName":"Black tea"}, {"categoryName":"White tea"},{"categoryName":"Herbal tea"},{"categoryName":"Rooibos tea"}];
    const categoryTest = {"categoryName":"Green tea"};
    const productsTest = [{"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."},
    {"productId":2,"productName":"Organic Matcha Tea","categories":["green","organic","30-50 DKK"],"price":"35 dkk","image":"/img/greenteas/matcha.png","description":"Matcha is a fine, green tea powder and is used for the traditional Japanese tea ceremony. Matcha is made from the finest top leaves of the plant and is rich on A-, E- and C vitamins, minerals and polyphenols. It is said that Matcha is even healthier than other teas because the whole tea leaves are used."}];

    return (
    <div className="App">
       <BrowserRouter>
        <div>
              <NavigationBar categories={categoriesTest}/>

              <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/basket" component={() => <Basket basketList={productsTest}/>} />
                <Route path="/search" component={Search} />

                <Route path="/products/:productId" component={() => <ProductDetails />} />

                {/* the thing below with the props ensures that the router can differientate between /white and /black and
                that it knows to update the TeaOverviw based on that. Solution found here: https://stackoverflow.com/questions/62836374/react-router-does-not-update-component-if-url-parameter-changes */}
                <Route path="/:category" render={(props) => ( <TeaOverview key={props.match.params.category} {...props} />)} />
                <Route exact path="/" component={Home} />
              </Switch>

              <Footer/>
            </div>
        </BrowserRouter>
    </div>
  )};
}

// function Home() {
//   return <h2>Home</h2>;
// }

function Login() {
  return <h2>Login</h2>;
}

function Search() {
  return <h2>Search</h2>;
}


export default App;
