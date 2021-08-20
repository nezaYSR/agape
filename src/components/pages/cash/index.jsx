import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const Cash = () => {
  return (
    <Fragment>
      <Header />
      <div className="cash-section">CASSSH</div>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Cash);
