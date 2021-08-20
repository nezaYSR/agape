import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";

const Monitor = () => {
  return (
    <Fragment>
      <Header />
      <div className="monitor-section">
        <div className="monitor-title">
          <h3>Patient Monitoring</h3>
          <p>Silahkan masukan kata kunci untuk memonitor kondisi pasien</p>
        </div>

        <div class="mb-3 form-monitor">
          <label for="exampleFormControlInput1" class="form-label">
            Cari Nama Pasien atau ID Pasien
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="contoh:Kumalasari / DELUXE0999838"
          />
        </div>
        <div className="top-part">
          <img src="https://images.pexels.com/photos/2839371/pexels-photo-2839371.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <ul className="pat-info">
            <li>
              <p>Nomor Pasien :</p>
              <p>VVIP00982990</p>
            </li>
            <li>
              <p>Nama :</p>
              <p>Rudi Hartiono</p>
            </li>
            <li>
              <p>Tanggal Lahir :</p>
              <p>29 Oct 1957</p>
            </li>
            <li>
              <p>Keluarga :</p>
              <p>Octarina S (Istri)</p>
            </li>
            <li>
              <p>Kamar :</p>
              <p>VVIP - 8</p>
            </li>
            <li>
              <p>Problem :</p>
              <p>Ketergantungan Narkotika</p>
            </li>
            <li>
              <p>Masuk :</p>
              <p>28 Dec 2019</p>
            </li>
          </ul>
        </div>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Today Medical report</Accordion.Header>
            <Accordion.Body>
              <a href="#" className="today">
                <p>Friday 28 Oct 2021</p>
                <p>Dr. Sitompul</p>
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Medical Record</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <a href="#" className="record">
                    <p>Friday 28 Oct 2021</p>
                    <p>Dr. Sitompul</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="record">
                    <p>Thursday 20 Oct 2021</p>
                    <p>Dr. Maria</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="record">
                    <p>Monday 18 Oct 2021</p>
                    <p>Dr. Sitompul</p>
                  </a>
                </li>
                <li>
                  <a href="#" className="record">
                    <p>Monday 1 Oct 2021</p>
                    <p>Dr. Maria</p>
                  </a>
                </li>
              </ul>
              <button type="button" class="btn btn-info container">See Full list</button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <Footer />
    </Fragment>
  );
};

export default withRouter(Monitor);
