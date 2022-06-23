import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <footer className="footer">
          <div className="col">
            <a href="/" className=""></a>
            <p className="text-muted">&copy; 9jakids</p>
          </div>

          <div className="col"></div>

          <div className="col">
            <h5>Section</h5>
            <ul className="bo">
              <li className="li">
                <a href="#" className="yu">
                  Home
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  Features
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  Pricing
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  FAQs
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Section</h5>
            <ul className="bo">
              <li className="li">
                <a href="#" className="yu">
                  Home
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  Features
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  Pricing
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  FAQs
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>Section</h5>
            <ul className="bo">
              <li className="li">
                <a href="#" className="yu">
                  Home
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  Features
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  Pricing
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  FAQs
                </a>
              </li>
              <li className="li">
                <a href="#" className="yu">
                  About
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      <div className="footer-socials">
        <div className="footer-socials-wrap">
          <div>test test test</div>
          <div>
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
      </div>
    </div>
  );
};

export default Footer;
