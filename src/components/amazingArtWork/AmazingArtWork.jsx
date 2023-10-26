import React from "react";
import './AmazingArtWork.css';
import Element from "./element/Element";
import MaskMan from "../../assets/mask-man.png";
import RoboMan from "../../assets/robo-man.png";
import Robot1 from "../../assets/robot1.png";

const AmazingArtWork = () =>{
    return(
        <div className="AmazingArtWork">
            <div className="head">
                <p className="title">
                    <span className="amazing-week">Amazing</span>
                    <span className="span"> {" "}
                    and Super <br />
                    Unique Art of this {""}
                    </span>
                    <span className="amazing-week">Week</span>
                </p>
                <button className="btn">
                    <div className="div">See All</div>
                </button>
            </div>
            <div className="cards">
                <Element Name="Cyberpunk Cocomo" Image={MaskMan}></Element>
                <Element Name="Charge, Qi tiao yu" Image={RoboMan}></Element>
                <Element Name="Surgeon, Josh Rife" Image={Robot1}></Element>
            </div>
        </div>
    );  
};

export default AmazingArtWork;