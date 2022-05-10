import React from "react";
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer class="page-footer font-small blue pt-4">
  <div class="container-fluid text-center text-md-left">
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5 class="text">Awesome Tea Group</h5>
        <p>
          Welcome to the world of tea.
        </p>
      </div>

      <hr class="clearfix w-100 d-md-none pb-3" />

      <div class="col-md-3 mb-md-0 mb-3">

        <ul class="list-unstyled">
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact.html">Get in touch</Link>
          </li>
        </ul>
      </div>

      <div class="col-md-3 mb-md-0 mb-3">
        <ul class="list-unstyled">
          <li>
            <Link to="/privacy">Privacy policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms and conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-copyright text-center py-3">
    © 2022 Copyright: Awesome tea group @ITU</div>
</footer>
    )
}

export default Footer;