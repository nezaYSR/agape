import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

import Bank1 from "../../../assets/icon/bank.svg";
import Bank2 from "../../../assets/icon/banking.svg";
import Bank3 from "../../../assets/icon/banks.svg";

const Cash = () => {
  return (
    <Fragment>
      <Header />
      <div className="cash-section">
        <div className="cash-title">
          <h3>Manage Budget</h3>
          <p>Income, Expenditure, Funding proposal Management</p>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Proposal to review</Accordion.Header>
            <Accordion.Body>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Cari Proposal berdasarkan ID
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="contoh:BNN-34323"
                />
              </div>
              <ul className="proposal-list">
                <li className="proposal-list-content">
                  <a href="#">
                    <p>Kemensos-0922 Funding</p>
                    <p>Theodora</p>
                  </a>
                </li>
                <li className="proposal-list-content">
                  <a href="#">
                    <p>BNN-0312 Funding</p>
                    <p>Theodora</p>
                  </a>
                </li>
                <li className="proposal-list-content">
                  <a href="#">
                    <p>Kemensos-03232 Funding</p>
                    <p>Theodora</p>
                  </a>
                </li>
                <li className="proposal-list-content">
                  <a href="#">
                    <p>Kemensos-01232 Funding</p>
                    <p>Theodora</p>
                  </a>
                </li>
                <li className="proposal-list-content">
                  <a href="#">Lihat Selengkapnya</a>
                </li>
              </ul>

              <div className="btn-group container">
                <button type="button" class="btn btn-success">
                  Tambah
                </button>
                <button type="button" class="btn btn-danger">
                  Hapus
                </button>
                <button type="button" class="btn btn-info">
                  Edit
                </button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Income Log</Accordion.Header>
            <Accordion.Body>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Cari Income berdasarkan ID atau nama Pengirim
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="contoh:BNN-34323"
                />
              </div>
              <ul className="proposal-list">
              
                <li className="proposal-list-content">
                  <img src={Bank1} />
                  <a href="#">
                    <p>Kemensos-0922</p>
                    <p>Rp.30.000.000</p>
                  </a>
                </li>

                <li className="proposal-list-content">
                  <img src={Bank2} />
                  <a href="#">
                    <p>Sudrajat-0922</p>
                    <p>Rp.20.000.000</p>
                  </a>
                </li>

                <li className="proposal-list-content">
                  <img src={Bank3} />
                  <a href="#">
                    <p>BNN-0922</p>
                    <p>Rp.50.000.000</p>
                  </a>
                </li>

                <li className="proposal-list-content">
                  <img src={Bank1} />
                  <a href="#">
                    <p>Kemensos-0922</p>
                    <p>Rp.330.000.000</p>
                  </a>
                </li>
               
                <li className="proposal-list-content">
                  <a href="#">Lihat Selengkapnya</a>
                </li>
              </ul>

              {/* <div className="btn-group container">
                <button type="button" class="btn btn-success">
                  Tambah
                </button>
                <button type="button" class="btn btn-danger">
                  Hapus
                </button>
                <button type="button" class="btn btn-info">
                  Edit
                </button>
              </div> */}

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Expenditure Log</Accordion.Header>
            <Accordion.Body>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Cari Pengeluaran berdasarkan ID atau nama Penarik/Keperluan
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="contoh:Drug-34323"
                />
              </div>
              <ul className="proposal-list">
              
                <li className="proposal-list-content">
                  <img src={Bank1} />
                  <a href="#">
                    <p>Drug-0922</p>
                    <p>Rp.270.000.000</p>
                  </a>
                </li>

                <li className="proposal-list-content">
                  <img src={Bank2} />
                  <a href="#">
                    <p>Reni-0922</p>
                    <p>Rp.10.000.000</p>
                  </a>
                </li>

                <li className="proposal-list-content">
                  <img src={Bank3} />
                  <a href="#">
                    <p>Rent-0922</p>
                    <p>Rp.70.000.000</p>
                  </a>
                </li>

                <li className="proposal-list-content">
                  <img src={Bank1} />
                  <a href="#">
                    <p>Renov-0922</p>
                    <p>Rp.210.000.000</p>
                  </a>
                </li>
               
                <li className="proposal-list-content">
                  <a href="#">Lihat Selengkapnya</a>
                </li>
              </ul>

              {/* <div className="btn-group container">
                <button type="button" class="btn btn-success">
                  Tambah
                </button>
                <button type="button" class="btn btn-danger">
                  Hapus
                </button>
                <button type="button" class="btn btn-info">
                  Edit
                </button>
              </div> */}

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Cash);
