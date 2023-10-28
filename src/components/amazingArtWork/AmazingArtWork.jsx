import React from "react";
import './AmazingArtWork.css';
import Element from "./element/Element";
import MaskMan from "../../assets/mask-man.png";
import RoboMan from "../../assets/robo-man.png";
import Robot1 from "../../assets/robot1.png";

const AmazingArtWork = () =>{
    return(
        <div className="AmazingArtWork">
            <div className="heading">
                <div className="heading1">                
                <h1><span>Amazing</span> and Super</h1>
                <h1>Unique Art of This <span>Week</span></h1>
                </div>
                <div>
                    <div>
                        <button className="btbn">See All</button>
                    </div>
                </div>
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