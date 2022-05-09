import { Nav, Navbar, NavLink } from "react-bootstrap";
import React from "react";

const NavigationBar = (categories) => {

  return(

<Navbar className="navbar navbar-expand-lg navbar-light">
<Navbar.Collapse className="collapse navbar-collapse">
<Nav className="navbar-nav mr-auto">
{categories.map((category) => (
    <Nav.Item className="nav-item">
    <NavLink className="nav-link" exact="true">
      {category.categoryName}
    </NavLink>
  </Nav.Item>))}

</Nav> 
</Navbar.Collapse>
</Navbar>)}

export default NavigationBar;