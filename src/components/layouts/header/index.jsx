import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import logo from "../../../assets/images/logo.png";
import menu from "../../../assets/icon/menu.svg";

const Header = () => {
  return (
    <Fragment>
      <div className="header-section">
        <a href="/" className="logo-img">
          <img src={logo} />
        </a>
        <a href="burger" className="menu-img">
          <img src={menu} />
        </a>
      </div>
    </Fragment>
  );
};

export default withRouter(Header);
