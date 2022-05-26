import {Link} from "react-router-dom"
import React from "react";
import {useState, useEffect} from "react";

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
      <div className="navbar navbar-expand-lg navbar-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
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
      </div>
      <div id="icons-nav">
      <div className="Login"><Link to="/login">
          <img src="/img/icons/profile.png" alt="login"/>
      </Link></div>
      <div className="Basket"><div> 
        <Link to="/basket"><img src="/img/icons/basket.png" alt="basket"/> </Link></div>
      <Link to="/basket"><div id="basketSize"></div></Link></div>
      </div>
      </div>
</div>
    )}
export default NavigationBar;
