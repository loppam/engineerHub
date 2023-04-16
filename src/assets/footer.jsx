import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <div className="footer-row">
        <div className="footer_nav line">
          <h3>About Us</h3>
          <p>
            EngineerHUB is INDIA's largest community of engineers where
            students(alumni) from IITs, NITs, IIITs and state colleges join
            together to develop and nurture students skills coming from all over
            India.
          </p>
        </div>
        <div className="footer_nav line">
          <h3>Links</h3>
          <ul className="footer">
            <li>Magazines</li>
            <li>Courses</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="footer_nav">
          <h3>Contact Us</h3>
          <p>info@engineerhub.in</p>
          <div className="socials">
            <BsInstagram />
            <BsLinkedin />
            <BsTwitter />
            <BsDiscord />
            <FaTelegramPlane />
          </div>
          <div className="footer-btn-flex">
            <button className="footer-btn">Log In</button>
            <button className="footer-btn">Register</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        Powered by <span>EngineerHUB</span>
      </div>
    </footer>
  );
};

export default footer;
