import {Link} from "react-router-dom"
import React from "react";
import {useState, useEffect} from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  const [apiResponse, setState] = useState([]);

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


  const initialState = apiResponse;
  const [categoriesList, setList] = useState(initialState);


  return(
    <div>
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
                  {/* The following to={...} defines the path for each category menu button. Right now it will be /white, /black and so on */}
                
                <Link className="nav-link" activeclassname="active" to={`/${category.categoryName.replaceAll(" Teas","").replaceAll(" Tea", "")}`}>
                  {category.categoryName} 
                </Link>
              </li>
          ))}
        </ul>
              <Nav className="me-auto">
                <Nav.Link className="Login" to="/login">
                  <img src="/img/icons/profile.png" alt="login"/></Nav.Link>
                <Nav.Link className="Basket" to="/basket">
                  <img src="/img/icons/basket.png" alt="basket"/></Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Navbar>
      </div>
// </div>
    )}
export default NavigationBar;
