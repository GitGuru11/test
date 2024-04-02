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
        </div>
        <div className="footer-right">
          <div className="contact-us">CONTACT US</div>
          <div className="icon-wrap">
            <span>+91 99999 99999</span>
          </div>
          <div className="icon-wrap">
            <span>xyzfh5@gmail.com</span>
          </div>
          <div className="icon-wrap">
            <div>Address line-1</div>
            <div>Address line-2</div>
            <div>city, state-pin code.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
