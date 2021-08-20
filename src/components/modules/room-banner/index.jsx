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

const RoomBanner = () => {
  return (
    <Fragment>
      <div className="room-banner-section">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="card">
              <div class="card-body slide-0">
                <h5 class="card-title">Regular Room</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Start from IDR 3.000.000/month
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="card-body slide-1">
                <h5 class="card-title">VVIP</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                Extensive care and first class privilege for IDR 20.000.000/month
                </h6>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="card">
              <div class="card-body slide-2">
                <h5 class="card-title">Deluxe</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Dialy basis monitoring, unlimited private consule for IDR 45.000.000/month
                </h6>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Fragment>
  );
};

export default withRouter(RoomBanner);
