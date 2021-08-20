import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";

import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
import RoomBanner from "../../modules/room-banner";

const Register = () => {
  return (
    <Fragment>
      <Header />
      <div className="register-section">
        <div className="text-title">
          <h3>Pengisian Form</h3>
          <p>
            Silahkan isi data pasien, kami akan follow up beberapa hari kemudian
          </p>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="contoh:Rudi Hartanto.SPD"
          />
        </div>

        <div class="mb-3">
          <label for="formFile" class="form-label">
            Foto KTP
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Alamat
          </label>
          <textarea
            class="form-control"
            id="contoh: Komp.Lele Asam blok A, Banjarmasin, 14236, Kalimantan"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            No. HP
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="contoh:081323228883"
          />
        </div>

        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Pilihan Kamar
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Pilih jenis kamar</option>
            <option value="1">Regular</option>
            <option value="2">VVIP</option>
            <option value="3">Deluxe</option>
          </select>
        </div>
        <RoomBanner/>
        <button type="button" class="btn btn-success container submit-btn">Daftar</button>
      </div>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Register);
