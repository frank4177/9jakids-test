import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./heroBanner.css";
import heroBanner from "./../../heroBanner.png";
import Timer from "./../../Timer.png";

const HeroBanner = () => {
  const animation = {
    offscreen: { opacity: 0, y: "-10%" },
    onscreen: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 3,
      },
    },
  };

  return (
    <div className="heroBanner-container">
      <motion.div
        className="heroBanner-wrapper"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        variants={animation}
      >
        <img className="side-image" src={heroBanner} />

        <div className="HeroBanner-desc-wrapper">
          <div className="heroBanner-desc">
            <div className="heroBanner-text-small">Larning is Fun</div>
            <div className="heroBanner-text">Learn New Skills Online</div>
            <div className="heroBanner-text">Find Best Courses</div>
          </div>
          <div className="heroBanner-buttons">
            <button className="register">Register</button>
            <button className="login">Login</button>
          </div>
        </div>

        <img className="bottom-image" src={Timer} alt="" />
      </motion.div>
    </div>
  );
};

export default HeroBanner;
