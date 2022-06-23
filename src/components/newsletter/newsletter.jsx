import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./newsletter.css";
import Newsletter_img from "./../../Newsletter_img.png";
import { AiFillMail } from "react-icons/ai";

const Newsletter = () => {
  const animation = {
    offscreen: { opacity: 0, y: "25%" },
    onscreen: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2,
      },
    },
  };

  return (
    <div className="Newsletter-container">
      <motion.div
        className="newsletter-wrapper"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.5 }}
        variants={animation}
      >
        <img className="newsletter-img" src={Newsletter_img} alt="" />
        <div className="newsletter-desc-wrapper">
          <div className="newsletter-small-text">Subscribe now</div>
          <div className="newsletter-large-text">Be in the know</div>
          <form action="">
            <AiFillMail />
            <input type="search" className="search-input" name="" id="" />
            <button className="search-button">Subscribe</button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Newsletter;
