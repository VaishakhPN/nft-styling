import React from "react";
import CatMask from "../../assets/catmask.png";
import Terminator from "../../assets/terminator.png";
import "./CreateAndSell.css";

const CreateAndSell = () =>{
    return(
        <div className="createandsell">
            <div className="main-content2">
                <div className="heading3">                
                    <h1>Create And Sell</h1>
                    <h1>Your <span>Best NFTs</span></h1>
                </div>
                <div className="ptag">
                    <p>Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!</p>
                </div>
                <div className="btn-set">
                    <button className="buttn">Create Now</button>
                    <div>
                        <p className="ptag2">Learn More</p>
                    </div>
                </div>
            </div>
            <div className="pics2">
                <img className="catmask" alt="catmask" src={CatMask} />
                <img className="terminator" alt="terminator" src={Terminator} />
            </div>
        </div>
    );
};

export default CreateAndSell;