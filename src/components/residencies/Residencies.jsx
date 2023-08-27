import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../utils/Slider.json";
import { sliderSettings } from "../utils/Common";

const Residencies = () => {
  return (
    <div className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText best">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        {/* Swipper */}
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <div className=" flexColStart r-card">
                  <img src={card.image} alt="Home" />
                  <span className="secondryText r-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText"> {card.name} </span>
                  <span className="secondaryText"> {card.detail} </span>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter r-buttons">
      <button  onClick={()=> swiper.slidePrev()} >&lt;</button>
      <button  onClick={()=> swiper.slideNext()} >&gt;</button>
    </div>
  );
};

