import React from "react";
import CreamRobo from "../../assets/group6.png";
import ThreeRobo from "../../assets/group7.png";
import DroneGirl from "../../assets/group8.png";
import CyberPunk from "../../assets/group9.png";
import FlyRobo from "../../assets/group10.png";
import "./Popular.css";

const Popular =() =>{
    return(
        <div className="popular">
            <div className="head-btn">
                <div className="heading4">  
                    <h1>Popular <span>Artists</span></h1>              
                    <h1>On This Week</h1>
                </div>
                <button className="btbn">See All</button>
            </div>
            <div className="pics3">
                <div className="pics4">
                    <img className="creamrobo" alt="creamrobo" src={CreamRobo} />
                    <img className="3robot" alt="3robots" src={ThreeRobo} />
                    <img className="dronegirl" alt="dronegirl" src={DroneGirl} />
                    <img className="cyberpunk" alt="cyberpunk" src={CyberPunk} />
                </div>
                <div>
                    <img className="flyrobo" alt="flyrobo" src={FlyRobo} />
                </div>
            </div>
        </div>
    );
};

export default Popular;