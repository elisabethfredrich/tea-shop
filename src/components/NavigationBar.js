import {Link} from "react-router-dom"
import React from "react";


const NavigationBar = (categories) => {
  const categoriesTest = [{"categoryName":"Green tea"}, {"categoryName":"Black tea"}, {"categoryName":"White tea"},{"categoryName":"Herbal tea"},{"categoryName":"Rooibos tea"}];

  return(
    <div>
      <div id="logo-top-container"><Link className="navbar-brand-top" to="/">
          <img src="/img/Logo.png" alt="logo"/>
        </Link></div>

      <div className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">

      
          {categoriesTest.map((category)=>(
                <li className="nav-item" key={category.categoryName}>
                  {/* The following to={...} defines the path for each category menu button. Right now it will be /white, /black and so on */}
                <Link className="nav-link" exact activeClassName="active" to={`/${category.categoryName.replaceAll(" tea","")}`}>
                  {category.categoryName}
                </Link>
              </li>
          ))}
        </ul>
      </div>

      <div id="icons-nav">
        <div className="search"><Link type="submit" to="/search">
            <img src="/img/icons/search.png" alt="search"/>
      </Link></div>

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