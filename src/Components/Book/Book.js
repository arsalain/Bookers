import React from "react";
import "./Book.css"
import leh from "../../Images/leh.jpg"
import {RiLeafFill} from "react-icons/ri"
import {GiPaperPlane} from "react-icons/gi"
import {GiFoldedPaper} from "react-icons/gi"
import {BsFillBuildingsFill} from "react-icons/bs"
import {AiOutlineHeart} from "react-icons/ai"
const Book = () =>{
    return (
        <div className="b-body">
            <div className="b-left">
        <div className="b-left1">
            <div className="b-left-head">
            <div className="b-name">Easy and Fast</div>
            <div className="b-title">Book Your Next Trip</div>
            <div className="b-title1">In 3 Easy Steps</div>
            </div>
            </div>
            <div className="b-left-body">
                <div className="b-box"></div>
                <div className="b-box-des"> 
                <div className="b-box-name">Choose Destination</div>
                <div>Discover your next adventure with</div>
                <div>our expertly curated destination selection</div>
                </div>
            </div>
            <div className="b-left-body">
                <div className="b-box1"></div>
                <div className="b-box-des"> 
                <div className="b-box-name">Make Payment</div>
                <div>Securely and conveniently make payments</div>
                <div>for your booking with just a few clicks.</div>
                </div>
            </div>
            <div className="b-left-body">
                <div className="b-box2"></div>
                <div className="b-box-des"> 
                <div className="b-box-name">Reach Pick Up point on Selected Date</div>
                <div>Arrive at your designated pick-up point</div>
                <div>on your selected date hassle-free with</div>
                <div>our detailed instructions and support</div>
                </div>
            </div>
            </div>
            <div className="b-right">
                <div className="b-card">
                    <img src={leh} />
                    <div className="b-card-name">Trip to Leh - ladakh  </div>
                    <div className="b-card-name1">19 - 21 April    |    by Habeeb </div>
                    <div className="b-card-dot"><RiLeafFill size= '30px' color= 'black' style={{paddingTop: "10px"}}/></div>
                    <div className="b-card-dot1"><GiFoldedPaper size= '30px' color= 'black' style={{paddingTop: "10px"}}/></div>
                    <div className="b-card-dot2"><GiPaperPlane size= '30px' color= 'black' style={{paddingTop: "10px"}}/></div>
                    <div className="b-card-build"><BsFillBuildingsFill size= '30px' color= 'black' style={{paddingTop: "10px", paddingRight: "20px"}}/>24 people going 
                    <AiOutlineHeart size= '30px' color= 'black' style={{paddingTop: "15px", paddingLeft: "120px"}}/></div>
                </div>
            </div>
            
        </div>
    
    )
}
export default Book