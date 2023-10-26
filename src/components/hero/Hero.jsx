import React from "react";
import './Hero.css';
import Goggle from "../../assets/goggle-man.png";
import Star from "../../assets/artwork-star.svg"



const Hero = () => {
    return (
        <div className="hero">
            <div className="content">
                <div className="main-content">
                    <div className="title">
                        <p className="main-title">
                            <span className="span-1">
                                Discover and
                                <br />
                                Collect The Best NFTs {""}
                            </span>
                            <span className="span-2">Digital Art.</span>
                        </p>
                        <p className="div">
                            Get started with the easiest and most secure platform to buy and trade digital Art and NFT's. Start 
                            exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
                        </p>
                    </div>
                    <div className="sub-content">
                        <button className="button-1">
                            <div className="div-2">Explore Now</div>
                        </button>
                        <div className="div-3">Learn More</div>
                    </div>
                </div>
                <div className="data">
                    <div className="set-1">
                        <p>
                            <span className="div-4">8.9</span>
                            <span className="div-5">K</span>
                        </p>
                        <div className="div-6">Art Work</div>
                    </div>
                    <div className="set-2">
                        <p>
                            <span className="div-4">65</span>
                            <span className="div-5">K</span>
                        </p>
                        <div className="div-6">Artist</div>
                    </div>
                    <div className="set-3">
                        <p>
                            <span className="div-4">87</span>
                            <span className="div-5">K</span>
                        </p>
                        <div className="div-6">Collection</div>
                    </div>
                </div>
            </div>
            <div>
                <div className="pic">
                    <img className="goggle" alt="goggle man" src={Goggle} />
                    <img className="star" alt="star-alpha" src={Star} />
                    <div className="bid-box">
                        <div className="box-content">
                            <div className="content-1">
                                <p className="end">Ends in</p>
                                <p>05:45:47</p>
                            </div>
                            <div className="content-2">
                                <p className="current-bid">Current bid</p>
                                <p>0.24ETH</p>
                            </div>
                        </div>
                        <div className="button-2">
                            <button className="btn">Place A Bid</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;