import React from "react";
import "./Footer.css";
import Facebook from "../../assets/facebook.svg";
import Telegram from "../../assets/telegram.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/linkedin.svg";

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="primary-footer">
                <div className="set1">
                    <p className="p-tag">Discover NFTs by category, track the latest drop, and follow the collections you love. Enjoy it!</p>
                    <div className="icons">
                        <img className="facebook" alt="facebook" src={Facebook}/>
                        <img className="telegram" alt="telegrm" src={Telegram} />
                        <img className="twitter" alt="twitter" src={Twitter} />
                        <img className="linkedin" alt="linkedin" src={Linkedin} />
                    </div>
                </div>
                <div className="prim-footer">
                    <div className="set">
                        <h3>Explore</h3>
                        <p>Art Sign In</p>
                        <p>Collectibles</p>
                        <p>Domain Name</p>
                        <p>Utility</p>
                    </div>
                    <div className="set">
                        <h3>Statistic</h3>
                        <p>Ranking</p>
                        <p>Collectibles</p>
                        <p>Activity</p>
                    </div>
                    <div className="set">
                        <h3>Company</h3>
                        <p>About Us</p>
                        <p>Career</p>
                        <p>Support</p>
                        <p>Partners</p>
                    </div>
                    <div className="set">
                        <h3>Resources</h3>
                        <p>Help Center</p>
                        <p>Platform Status</p>
                        <p>Blog</p>
                    </div>
                </div>
            </div>
            <div className="secondary-footer">
                <div>
                    <p>© Copyright 2023 - davixq</p>
                </div>
                <div className="sub-secondary">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;