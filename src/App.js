import './App.css';
import React from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import {Product} from './components/product.js'



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
  return (
    <div>
      <h2>green tea</h2>
      <Product/>
      </div>
  );
}


export default App;
