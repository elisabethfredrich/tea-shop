import {Link} from "react-router-dom"
import React from "react";
import {useState, useEffect} from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  const [apiResponse, setState] = useState([]);
  const initialState = apiResponse;
  const [categoriesList, setList] = useState(initialState);

const callAPI = () => {
  fetch("http://localhost:9000/productCategories", {
    method: "GET",
    headers: {"Content-Type": "application/json"},
    mode: 'cors'
  })
    .then(res => res.json())
    .then(res => setState(res));
  ;
}

  useEffect(() => {
    callAPI();
  }, [])

  useEffect(()=>{
    setList(apiResponse);
  },[apiResponse])

  return(
    <div id="nav-container">
      <div id="logo-top-container"><Link className="navbar-brand-top" to="/">
          <img src="/img/Logo.png" alt="logo"/>
        </Link></div>
      <Navbar collapseOnSelect expand="lg" variant="light">

          <Link className="navbar-brand-logo" to="/">
              <img src="/img/Logo.png" alt="logo"/>
          </Link>
          
          <Navbar.Toggle type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            
          <ul className="navbar-nav mr-auto">
                {categoriesList.map((category)=>(
                      <li className="nav-item" key={category.categoryName}>
                      <Link className="nav-link" activeclassname="active" to={`/${category.categoryName.replaceAll(" Teas","").replaceAll(" Tea", "")}`}>
                        {category.categoryName} 
                      </Link>
                    </li>
                ))}
          </ul>
          <Nav className="me-auto">
            <Link className="Login" to="/login">
              <img src="/img/icons/profile.png" alt="login"/></Link>
            <Link className="Basket" to="/basket">
              <img src="/img/icons/basket.png" alt="basket"/></Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )}
export default NavigationBar;
