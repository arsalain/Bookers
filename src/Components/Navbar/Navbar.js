import React from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">BACKPACKERS</div><div className="n-name1"><h5>UNITED</h5></div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Destination 
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Treks
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Tours
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Blogs
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Contact Us
              </Link>
            </li>
            
            <div className="n-login"> 
            <Link to="contact" spy={true} smooth={true}>
                Login
        </Link>
        </div>
         <div className="n-signup"> 
            <Link to="contact" spy={true} smooth={true}>
               <button>Sign up</button>
        </Link>
        </div>
        </ul>
        </div>
          
        </div>
       
      </div>
    
  );
};

export default Navbar;
