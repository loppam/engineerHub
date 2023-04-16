import { useState, React } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../img/logo2.png";
import "./navbar.css";
import { Avatar } from "@mui/material";


const navbar = () => {
  const [Mobile, setMobile] = useState(false);
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src={Logo} className="logo-img" alt="image" />
        </div>
        <ul
          className={Mobile ? "mobile-link" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <li>
            <Link to="/">Domain</Link>
          </li>
          <li>
            <Link to="#services">Courses</Link>
          </li>
          <li>
            <Link to="#pricing">Internship</Link>
          </li>
          <li>
            <Link to="#contact">Magazine</Link>
          </li>
          <li>
            <Link to="#contact">Campus</Link>
          </li>
          <li>
            <Link to="#contact">Hiring</Link>
          </li>
          <li>
            <Link to="#contact">Industry</Link>
          </li>
          <li>
            <Link to="#contact">Team</Link>
          </li>
<li><Avatar className="center" src="/broken-image.jpg" /></li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
};

export default navbar;
