import React from "react";
import "./Element.css"
import ETH from "../../../assets/ethereum.svg";
import Clock from "../../../assets/clock.svg";

const Element = ({Name, Image}) =>{
    return(
        <div className="element">
            <img className="img" alt="" src={Image} />
            <div className="element-1">
                <div className="div">
                    <div className="name">{Name}</div>
                    <div className="element-2">
                        <img className="icon" alt="eth-icon" src={ETH} />
                        <div className="amount-time">490ETH</div>
                    </div>
                </div>
                <div className="element-3">
                    <div className="element-4">
                        <div className="end">Ending In</div>
                        <div className="element-5">
                            <img className="icon" alt="timer-clock" src={Clock} />
                            <div className="amount-time">03:24:56</div>
                        </div>
                        </div>
<div>                    <button className="btnn">
                        <div className="bid">Place A Bid</div>
                    </button></div>
                </div>
            </div>
        </div>
    );
};

export default Element;