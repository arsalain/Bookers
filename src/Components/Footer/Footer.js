import React from "react";
import "./Footer.css"
import {FaFacebookF, FaCameraRetro} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
const Footer = () => {
return (
    <div className="f-body">

        <div className="f-head">
            <div className="f-left">
            <div className="f-left1">
            <div className="f-name">BACKPACKERS</div>
            <div className="f-name1"><h5>UNITED</h5></div>
            </div>
       
           
            </div>
            <div className="f-mid">
                <div className="f-mid-name">Company</div>
                <div className="f-mid-sub">About</div>
                <div className="f-mid-sub">Careers</div>
                <div className="f-mid-sub">Mobile</div>
                </div>
                <div className="f-mid">
                <div className="f-mid-name">Contact</div>
                <div className="f-mid-sub">Hekp/FAQ</div>
                <div className="f-mid-sub">Press</div>
                <div className="f-mid-sub">Affilates</div>
                </div>
                <div className="f-mid">
                <div className="f-mid-name">More</div>
                <div className="f-mid-sub">Blogs</div>
                <div className="f-mid-sub">Careers</div>
                <div className="f-mid-sub">About Us</div>
                </div>
                <div className="f-dot"><FaFacebookF size= '30px' color= 'black' style={{paddingTop: "20px"}}/></div>
                <div className="f-dot1"><FaCameraRetro size= '30px' color= 'black' style={{paddingTop: "20px"}}/></div>
                <div className="f-dot1"><AiOutlineTwitter size= '30px' color= 'black' style={{paddingTop: "20px"}}/></div>

      </div>
      <div className="f-end"> All rights reserved@backpackersunited.in</div>
        </div>

)
    
}

export default Footer;