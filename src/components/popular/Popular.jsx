import React from "react";
import CreamRobo from "../../assets/robocream.png";
import ThreeRobo from "../../assets/3men.png";
import DroneGirl from "../../assets/drone-girl.png";
import CyberPunk from "../../assets/cyberpunk.png";
import FlyRobo from "../../assets/robot2.png";

const Popular =() =>{
    return(
        <div>
            <div>
                <div>
                    <div className="heading4">  
                        <h1>Popular <span>Artists</span></h1>              
                        <h1>On This Week</h1>
                    </div>
                    <button className="btbn">See All</button>
                </div>
                <div className="pics3">
                    <img className="creamrobo" alt="creamrobo" src={CreamRobo} />
                    <img className="3robot" alt="3robots" src={ThreeRobo} />
                    <img className="dronegirl" alt="dronegirl" src={DroneGirl} />
                    <img className="cyberpunk" alt="cyberpunk" src={CyberPunk} />
                    <img className="flyrobo" alt="flyrobo" src={FlyRobo} />
                </div>
            </div>
        </div>
    );
};

export default Popular;