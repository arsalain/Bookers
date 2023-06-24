import React from "react";
import "./Destination.css"
import hampi from "../../Images/hampi.jpg"
import wayanad from "../../Images/wayanad.jpg"
import kumara from "../../Images/kumara.jpg"
// import { BiDollar } from "react-icons/bi" ; 
import { BiDollar } from "react-icons/bi";
import {IoNavigateSharp} from "react-icons/io5"
const Destination = () => {
    return (
<div className="i-dest">
    <div className="i-dest1">
        <div className="i-dest-t1">Top Selling</div>
        <br></br><div className="i-dest-t2">Top Destination</div>
    </div>
    <div className="i-dest2">
        <div className="i-dest-card">
            <img src={hampi}></img>
            <div className="card-name">
                <div className="card-name1">Hampi</div>
                <div className="card-name2"><BiDollar size='13px'  color="black"  />6,000</div>
    {/* <br /> */}
    </div>
            <div className="card-name3"><IoNavigateSharp  size='13px'  color="black" style={{
                paddingRight: "10px"
    }} />April 2023</div>
        </div>
        </div>
        <div className="i-dest-card1">
            <img src={wayanad}></img>
            <div className="card-name">
                <div className="card-name1">Wayanad</div>
                <div className="card-name2"><BiDollar size='13px'  color="black"  />3600</div>
    {/* <br /> */}
    </div>
            <div className="card-name3"><IoNavigateSharp  size='13px'  color="black" style={{
                paddingRight: "10px"
    }} />April 2023</div>
        </div>
        <div className="i-dest-card2">
            <img src={kumara}></img>
            <div className="card-name">
                <div className="card-name1">Kumaraparvatha</div>
                <div className="card-name2"><BiDollar size='13px'  color="black"  />3200</div>
    {/* <br /> */}
    </div>
            <div className="card-name3"><IoNavigateSharp  size='13px'  color="black" style={{
                paddingRight: "10px"
    }} />April 2023</div>
        </div>
    </div>
    );
}

export default Destination;