import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import logo from "../../../../assets/images/logo.png";
// import logo from "../../../assets/images/logo.png";
import close from "../../../../assets/icon/cancel.svg";

const Burger = () => {
  return (
    <Fragment>
      <div className="burger-section">
        <div className="top-part">
          <a href="/">
            <img src={logo} />
          </a>
          <a href="/">
            <img src={close} />
          </a>
        </div>
        <hr />
        <ul className="btm-part">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="register">Patient Register</a>
          </li>
          <li>
            <a href="monitor">Patient Monitoring</a>
          </li>
          <li>
            <a href="cash">Manage Budget</a>
          </li>
        </ul>
        <p className="copy">Copyright © 2010-2021 Agape. All rights reserved</p>
      </div>
    </Fragment>
  );
};

export default withRouter(Burger);
