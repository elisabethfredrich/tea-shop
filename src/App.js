import './App.css';
import React from "react"
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
} from "react-router-dom"
import ProductList from './components/productList';
import { CardDeck, Card, Container, Button } from "react-bootstrap";




class App extends React.Component {
  render(){ 
    return (
    <div className="App">
       <BrowserRouter forceRefresh>
          <div style={{display:"flex"}}>
            <div className='App-header'>
              <ul style={{listStyleType: 'none'}}>

                <li>
                  <NavLink exact activeClassName="active" to="/greentea">
                    Green tea
                  </NavLink>
                </li>

              </ul>
            </div>
            <Switch>
              <Route path="/greentea" component={GreenTea} />
              <Route path="/" component={Home} />
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
    {"productId":1,"productName":"Sencha tea","categories":["green","conventional","30-50 DKK"],"price":"32 dkk","image":"./img/greenteas/sencha.jpg","description":"Sencha is a mild and soft green tea from China. It is often used in various green tea blends because it is mild and can therefore easily be combined with various ingredients such as fruits, berries and herbs."},
  {"productId":2,"productName":"Organic Matcha Tea","categories":["green","organic","30-50 DKK"],"price":"35 dkk","image":"./img/greenteas/matcha.png","description":"Matcha is a fine, green tea powder and is used for the traditional Japanese tea ceremony. Matcha is made from the finest top leaves of the plant and is rich on A-, E- and C vitamins, minerals and polyphenols. It is said that Matcha is even healthier than other teas because the whole tea leaves are used."}]; //the http call should probably go here

  return (
    <div>
      <h2>green tea</h2>
        <ProductList products={products}/>
      </div>
  );
}


export default App;
