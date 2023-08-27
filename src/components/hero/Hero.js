import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion'

import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth hero-container flexCenter">
        {/* left */}
        <div className=" flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:"2rem",  opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:3,
              type:"spring",
            }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          {/* Desc */}
          <div className=" flexColStart hero-desc">
            <span className="secondaryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          {/* search Bar */}
          <div className=" flexCenter rsearch search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" placeholder="Type here..." />
            <button className="button sbutton ">Search</button>
          </div>

          {/* Stats */}
          <div className="flexCenter status">
            {/* status -1 */}
            <div className="flexColCenter ">
              <span className="statusSize">
                <CountUp start={8888} end={9999} duration={4} />
                <span className="plusIcon">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            {/* Status - 2 */}
            <div className="flexColCenter ">
              <span className="statusSize">
                <CountUp start={1111} end={3333} duration={4} />
                <span className="plusIcon">+</span>
              </span>
              <span className="secondaryText">Happy Customber</span>
            </div>
            {/* Status -3  */}
            <div className="flexColCenter ">
              <span className="statusSize">
                <CountUp start={0} end={99} duration={4} />
                <span className="plusIcon">+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right */}
        <div className=" flexCenter hero-right">
          <motion.div
          initial={{x:"7rem", opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
            duration:3,
            type:"spring",
          }}
          className="image-container">
            <img src="./image/asset 1.png" alt="Hero" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
