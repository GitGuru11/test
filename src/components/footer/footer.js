import React from "react";
import "./index.css";

export default function footer() {
  return (
    <div className="footer-container">
      <div className="container footer-wrap">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="quick">Quick</span>
            <span className="funds">Funds</span>
          </div>
          <div className="footer-content">
            Our mission is to empower individuals and businesses by providing
            them with the financial resources they need to achieve their goals.
          </div>
          <div className="icon-group">
            <img src="../../../static/images/facebook.png"></img>
            <img src="../../../static/images/whatsapp.png"></img>
            <img src="../../../static/images/linkedin.png"></img>
            <img src="../../../static/images/instagram.png"></img>
          </div>
        </div>
        <div className="footer-right">
          <div className="contact-us">CONTACT US</div>
          <div className="icon-wrap">
            <img src="../../../static/images/phone.png"></img>
            <span>+91 99999 99999</span>
          </div>
          <div className="icon-wrap">
            <img src="../../../static/images/mail.png"></img>
            <span>xyzfh5@gmail.com</span>
          </div>
          <div className="icon-wrap location-container">
            <img src="../../../static/images/location.png"></img>
            <div>
              <div>Address line-1</div>
              <div>Address line-2</div>
              <div>city, state-pin code.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
