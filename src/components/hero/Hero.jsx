import React from "react";
import './Hero.css';
import goggle from "../../assets/goggle-man.png";
import star from "../../assets/star.svg"



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
            <div className="group">
        <div className="overlap">
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src={goggle} />
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <img className="star" alt="Star" src={star} />
                  <div className="group-2">
                    <div className="overlap-3">
                      <div className="text-wrapper-7">A</div>
                      <div className="text-wrapper-8">{""}</div>
                    </div>
                    <div className="text-wrapper-9">r</div>
                    <div className="text-wrapper-10">t</div>
                    <div className="overlap-4">
                      <div className="text-wrapper-11">w</div>
                      <div className="overlap-5">
                        <div className="text-wrapper-12">o</div>
                        <div className="overlap-group-2">
                          <div className="text-wrapper-13">r</div>
                          <div className="text-wrapper-14">k</div>
                          <div className="text-wrapper-15">o</div>
                          <div className="text-wrapper-16">f</div>
                          <div className="text-wrapper-17">t</div>
                          <div className="text-wrapper-18">h</div>
                          <div className="text-wrapper-19">e</div>
                          <div className="text-wrapper-20">w</div>
                        </div>
                        <div className="text-wrapper-21">e</div>
                      </div>
                      <div className="text-wrapper-22">e</div>
                    </div>
                    <div className="text-wrapper-23">k</div>
                    <div className="text-wrapper-24">A</div>
                    <div className="text-wrapper-25">r</div>
                    <div className="text-wrapper-26">t</div>
                    <div className="overlap-6">
                      <div className="text-wrapper-27">w</div>
                      <div className="overlap-7">
                        <div className="text-wrapper-28">o</div>
                        <div className="overlap-8">
                          <div className="text-wrapper-29">r</div>
                          <div className="text-wrapper-30">k</div>
                          <div className="text-wrapper-31">o</div>
                          <div className="text-wrapper-32">f</div>
                          <div className="text-wrapper-33">t</div>
                          <div className="text-wrapper-34">h</div>
                          <div className="text-wrapper-35">e</div>
                          <div className="text-wrapper-36">w</div>
                        </div>
                        <div className="text-wrapper-37">e</div>
                      </div>
                      <div className="text-wrapper-38">e</div>
                    </div>
                    <div className="text-wrapper-39">k</div>
                    <div className="text-wrapper-40">{""}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-5">
            <div className="frame-6">
              <div className="frame-7">
                <div className="text-wrapper-41">Ends in</div>
                <div className="text-wrapper-3">05:45:47</div>
              </div>
              <div className="frame-7">
                <div className="text-wrapper-41">Current bid</div>
                <div className="text-wrapper-3">0.24ETH</div>
              </div>
            </div>
            <button className="CTA">
              <div className="text-wrapper-42">Place A Bid</div>
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Hero;



{/* <div className="group">
                <div className="overlap-receiver">
                    <img className="goggle" alt="goggle man" src={goggle} />
                </div>
                <div className="overlappers">
                    <div className="rounder">
                        <div className="star-overlapper">
                            <img className="star" alt="Star" src={star} />
                        </div>
                        <div className="over-alpha-1">A</div>
                        <div className="over-alpha-2">{""}</div>
                        <div className="over-alpha-3">r</div>
                        <div className="over-alpha-4">t</div>
                        <div className="over-alpha-5">w</div>
                        <div className="over-alpha-6">o</div>
                        <div className="over-alpha-7">r</div>
                        <div className="over-alpha-8">k</div>
                        <div className="over-alpha-9">o</div>
                        <div className="over-alpha-10">f</div>
                        <div className="over-alpha-11">t</div>
                        <div className="over-alpha-12">h</div>
                        <div className="over-alpha-13">e</div>
                        <div className="over-alpha-14">w</div>
                        <div className="over-alpha-15">e</div>
                        <div className="over-alpha-16">e</div>
                        <div className="over-alpha-17">k</div>
                        <div className="over-alpha-18">A</div>
                        <div className="over-alpha-19">r</div>
                        <div className="over-alpha-20">t</div>
                        <div className="over-alpha-21">w</div>
                        <div className="over-alpha-22">o</div>
                        <div className="over-alpha-23">r</div>
                        <div className="over-alpha-24">k</div>
                        <div className="over-alpha-25">o</div>
                        <div className="over-alpha-26">f</div>
                        <div className="over-alpha-27">t</div>
                        <div className="over-alpha-28">h</div>
                        <div className="over-alpha-29">e</div>
                        <div className="over-alpha-30">w</div>
                        <div className="over-alpha-31">e</div>
                        <div className="over-alpha-32">e</div>
                        <div className="over-alpha-33">k</div>
                        <div className="over-alpha-34">{""}</div>
                    </div>
                    <div className="timer-bid">
                        <div className="time-eth">
                            <div className="timer">
                                <div className="timer-2">Ends in</div>
                                <div className="timer-3">05:45:47</div>
                            </div>
                            <div className="eth">
                                <div className="eth-2">Current bid</div>
                                <div className="eth-3">0.24ETH</div>
                            </div>
                        </div>
                        <button className="bidding">
                            <div className="place-bid">Place A Bid</div>
                        </button>
                    </div>
                </div>
            </div> */}