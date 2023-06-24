import React, { useContext } from "react";
import "./Intro.css";
import { Link } from "react-scroll";
import th from "../../Images/th.png"
import boy from "../../Images/boy.jpg"
const Intro = () => {
  // Transition

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span>BEST DESTINATION AROUND THE WORLD</span>
          </div>
          <div className="i-title1">
          Our Stories Have </div>
          <div className="i-title2">Adventures</div>
          <div className="i-discrip1">
          We are experienced in bringing Adventures to stay their
          </div>
          <div className="i-discrip2"> journey, with all outdoor destinations in the world 
        </div>
        <div className="i-discrip3">as our specialties. Start your adenture now! Nature has </div>
        <div className="i-discrip4"> already called you!</div>
        <div className="i-bot"> <button className="i-button">Explore</button>
        <img src={th} alt="" /><div className="i-play">Play Video</div></div>
        <div>
        </div>
        {/* social icons */}
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt=""/></div>
    </div>
  );
};

export default Intro;
