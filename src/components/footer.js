import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
      <div id="footer-container">

        <footer className="font-small blue pt-4">
  <div className="container-fluid text-center text-md-left">
    <div className="row">
      <div className="col-md-6 mt-md-0 mt-3">
        <h5 className="text">Awesome Tea Group</h5>
        <p>
          Welcome to the world of tea.
        </p>
      </div>

      <hr className="clearfix w-100 d-md-none pb-3" />

      <div className="col-md-3 mb-md-0 mb-3">

        <ul className="list-unstyled">
          <li>
            <Link className="footer-link" to="/about">About us</Link>
          </li>
          <li>
            <Link className="footer-link" to="/contact">Get in touch</Link>
          </li>
        </ul>
      </div>

      <div className="col-md-3 mb-md-0 mb-3">
        <ul className="list-unstyled">
          <li>
            <Link className="footer-link" to="/privacy">Privacy policy</Link>
          </li>
          <li>
            <Link className="footer-link" to="/terms">Terms and conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="footer-copyright text-center py-3">
    © 2022 Copyright: Awesome tea group @ITU</div>
</footer>
</div>

    )
}

export default Footer;