import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

import Banner from "../../modules/banner";

const Home = () => {
  return (
    <Fragment>
      <div className="home-section">
        <Header />
        <Banner/>
        <Footer />
      </div>
    </Fragment>
  );
};

export default withRouter(Home);
