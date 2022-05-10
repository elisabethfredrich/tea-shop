import './App.css';
import React from "react"
import {BrowserRouter, Route, Switch, NavLink, Link} from "react-router-dom"
import ProductList from './components/productList';
import ProductDetails from './components/productDetails';
import NavigationBar from './components/NavigationBar';


class App extends React.Component {

  render(){ 
    const productTest = {"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."};
    const categoriesTest = [{"categoryName":"Green tea"}, {"categoryName":"Black tea"}, {"categoryName":"White tea"},{"categoryName":"Herbal tea"},{"categoryName":"Rooibos tea"}];

    return (
    <div className="App">
       <BrowserRouter>
        <div>
              <NavigationBar categories={categoriesTest}/>

              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/basket" component={Basket} />
                <Route path="/search" component={Search} />
                <Route path="/products/:productId" component={() => <ProductDetails product={productTest}/>} />
                <Route path="/:category" component={GreenTea} /> {/* change later*/}
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
        </BrowserRouter>
    </div>
  )};
}

function Home() {
  return <h2>Home</h2>;
}

function GreenTea() {
  const products = [
    {"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"/img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."},
  {"productId":2,"productName":"Organic Matcha Tea","categories":["green","organic","30-50 DKK"],"price":"35 dkk","image":"/img/greenteas/matcha.png","description":"Matcha is a fine, green tea powder and is used for the traditional Japanese tea ceremony. Matcha is made from the finest top leaves of the plant and is rich on A-, E- and C vitamins, minerals and polyphenols. It is said that Matcha is even healthier than other teas because the whole tea leaves are used."}]; //the http call should probably go here

  return (
    <div>
      <h2>green tea</h2>
        <ProductList products={products}/>
      </div>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Basket() {
  return <h2>Basket</h2>;
}

function Search() {
  return <h2>Search</h2>;
}


export default App;
