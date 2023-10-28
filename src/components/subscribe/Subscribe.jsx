import React from "react";
import RoboSamurai from "../../assets/robo-samurai.png";
import Crogirl from "../../assets/cro-girl.png";
import Esubscribe from "../../assets/email-subscribe.png";
import './Subscribe.css';

const Subscribe = () =>{
    return(
        <div className="subscribe">
            <div className="images">
                <img className="cro-girl" alt="cro-girl" src={Crogirl} />
                <img className="robo-sam" alt="samurai-robo" src={RoboSamurai} />
            </div>
            <div className="subs-content">
                <div className="heading2">                
                    <h1>Subscribe And <span>get our</span></h1>
                    <h1><span>Updates</span> Every Week</h1>
                </div>
                <div>
                    <p>We have a blog related to NFT so we can share thoughts and <br /> routines on our blog which is updated weekly</p>
                </div>
                <div>
                    <img className="email-subs" alt="subscribe" src={Esubscribe} />
                </div>
            </div>
        </div>
    )
}

export default Subscribe;
