import React from "react";
import "./topbar.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-wrapper">
        <div className="streetAndEmail-wrapper">
          <div className="topbarLocationAndMailText">
            <MdLocationOn /> 9jakids Lane, Lagos
          </div>
          <div className="topbarLocationAndMailText">
            <AiFillMail /> 9ijakids@test.com
          </div>
        </div>
        <div className="topbar-socials">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <ImPinterest2 />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
