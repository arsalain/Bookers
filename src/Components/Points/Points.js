import React from "react";
import "./Points.css"
import  dest from "../../Images/dest.jpg"
import {BiPlusMedical} from "react-icons/bi"

const Points = () => {
    return (
        <div className="p">
        <div className="p-right">
            <img src={dest} /> 
        </div>
        <div className="p-left">
            <div className="p-head">
            <div className="p-name">Destination Points</div>
            <div className="p-title1">Our Stories Have</div>
            <div className="p-title2">Adventures</div>
            <div className="p-para1">We are experienced in bringing adventures to stay their</div>
            <div className="p-para1">joutny with all outdoor destinations in the world as our</div>
            <div className="p-para1">specialities. Start  your adventure now! Nature has already</div>
            <div className="p-para1">called you!</div>
            </div>
            <div className="p-body">
                <div className="p-card">
                    <div className="p-num">10<BiPlusMedical size='20px'  color="rgb(214, 162, 48)" style={{
                paddingRight: "10px",
                color: "rgb(214, 162, 48)"
    }} /></div>
    <div className="p-card-name">Travel</div>
    <div className="p-card-name1">Destination</div>
                </div>
                <div className="p-card">
                    <div className="p-num">40<BiPlusMedical size='20px'  color="rgb(214, 162, 48)" style={{
                paddingRight: "10px",
                color: "rgb(214, 162, 48)"
    }} /></div>
    <div className="p-card-name">Trek</div>
    <div className="p-card-name2">Guides</div>
                </div>
                <div className="p-card">
                    <div className="p-num">20K<BiPlusMedical size='20px'  color="rgb(214, 162, 48)" style={{
                paddingRight: "10px",
                color: "rgb(214, 162, 48)"
    }} /></div>
    <div className="p-card-name3">Happy</div>
    <div className="p-card-name4">Customers</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Points;