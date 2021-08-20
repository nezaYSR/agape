import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import twitter from "../../../assets/icon/twitter.svg";
import facebook from "../../../assets/icon/facebook.svg";
import instagram from "../../../assets/icon/instagram.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-section">
        <div className="footer-section-row">
          <div className="right">
            <h2>Agape</h2>
            <address>
              Jl. Alternatif Tapos-Ciawi No.6, Citeko, Kec. Cisarua, Bogor, Jawa
              Barat 16750
            </address>
          </div>
          <div className="left">
            <p>Our Social Media</p>
            <div className="socmed-logos">
              <a href="/" className="socmed-img">
                <img src={twitter} />
              </a>
              <a href="/" className="socmed-img">
                <img src={facebook} />
              </a>
              <a href="/" className="socmed-img">
                <img src={instagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Footer);
