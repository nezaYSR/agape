import React, { useState, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

const Banner = () => {
  return (
    <Fragment>
      <div className="banner-section">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="card">
              <div class="card-body slide-0">
                <h5 class="card-title">Fasilitas Terbaik</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Nature Healing Method
                </h6>
                <p class="card-text">
                  Lingkungan yang hijau dan udara yang sejuk dapat membantu proses penyembuhan
                </p>
                <a href="#" class="card-link">
                  <button type="button" class="btn btn-primary container">
                    More info
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="card-body slide-1">
                <h5 class="card-title">Kebaktian Rutin</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Agape Praying Session
                </h6>
                <p class="card-text">
                  Tuhan Yesus adalah dokter dari segala dokter, datanglah
                  kepadanya maka engkau akan disembuhkan
                </p>
                <a href="#" class="card-link">
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="card-body slide-2">
                <h5 class="card-title">Seminar Online</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  How to be an effective leader
                </h6>
                <p class="card-text">
                  Seminar leadership bagi semua kalangan, narasumber telah terbukti memimpin perusahaan sukses
                </p>
                <a href="#" class="card-link">
                  <button type="button" class="btn btn-primary container">
                    Daftar
                  </button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default withRouter(Banner);
