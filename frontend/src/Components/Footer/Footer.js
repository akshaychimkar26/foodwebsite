import React from "react";
import { Link } from "react-router-dom";
import instaIcon from "../../Assets/Footer Icons/instagram.png";
import fbIcon from "../../Assets/Footer Icons/facebook.png";
import pintrestIcon from "../../Assets/Footer Icons/pinterest.png";
import mailIcon from "../../Assets/Footer Icons/email.png";
import twitterIcon from "../../Assets/Footer Icons/twitter.png";
import ytIcon from "../../Assets/Footer Icons/youtube.png";
import arrow from "../../Assets/Footer Icons/up-arrow.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main-container">
        <div className="footer-left-section">
          <div className="left-upper-section">
            <div className="socials-icons">
              <Link>
                <img src={fbIcon} alt="insta-icon" className="icons" />
              </Link>
              <Link>
                {" "}
                <img src={instaIcon} alt="insta-icon" className="icons" />
              </Link>
              <Link>
                {" "}
                <img src={pintrestIcon} alt="insta-icon" className="icons" />
              </Link>
              <Link>
                {" "}
                <img src={twitterIcon} alt="insta-icon" className="icons" />
              </Link>
              <Link>
                <img src={ytIcon} alt="insta-icon" className="icons" />
              </Link>
              <Link>
                {" "}
                <img src={mailIcon} alt="insta-icon" className="icons" />
              </Link>
            </div>
            <div className="back-to-top-container">
              <div className="back-to-top-wrapper">
                <Link>
                  <img src={arrow} className="top-arrow" />
                  <p className="back-to-top-txt">Back to Top</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="left-bottom-section">
            <Link>All Categories</Link>
            <Link>Site Map</Link>
            <Link>About Us</Link>
            <Link>Help</Link>
          </div>
        </div>
        <div className="footer-right-section">
          <div className="channels-container">
            <p>
              <Link>HGTV</Link>
            </p>
            <p>
              <Link>DIY Network</Link>
            </p>

            <p>
              <Link>Food Network</Link>
            </p>
            <p>
              <Link>Cookng Channel</Link>
            </p>
            <p>
              <Link>Travel Channel</Link>
            </p>
            <p>
              <Link>HGTV Poland</Link>
            </p>
          </div>
          <div className="top-right-section">
            <p className="top-right-networks">
              The Discovery Family of Networks
            </p>
            <p className="copyrights">
              2023 warner Bros Discovery , Inc. or its subsidiries and
              affiliates. All rights reserved
            </p>
          </div>
          <div className="bottom-right-section">
            <div className="advertise-section">
              <p>
                <Link>Advetise</Link>
              </p>
              <p>
                <Link>AdChoices</Link>
              </p>
              <p>
                <Link>Privacy Notice</Link>
              </p>
              <p>
                <Link>Visitor Agreement</Link>
              </p>
            </div>

            <div className="privacy-section">
              {" "}
              <p>
                <Link>California Privacy Nottice</Link>
              </p>
              <p>
                <Link>Do Not Sell or Share My Personal Information</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;