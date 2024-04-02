import React from "react";
import "./index.css";

export default function header() {
  return (
    <div className="header-container">
      <div className="container">
        <div className="bar-container">
          <div className="logo">
            <span className="quick">Quick</span>
            <span className="funds">Funds</span>
          </div>
          <div className="home">
            <div className="home-ch">Home</div>
            <div className="about-ch">About Us</div>
          </div>
          <div className="sign">Sign In</div>
        </div>
        <div className="header-content">
          <div className="header-content-left">
            <div className="description">
              Quick and Easy Loans for Your Financial Needs.
            </div>
            <div className="detail">
              Our loan services offer a hassle-free and streamlined borrowing
              experience, providing you with the funds you need in a timely
              manner to meet your financial requirements.
            </div>
            <div className="sign-btn">Sign In</div>
          </div>
          <div className="header-content-right"></div>
        </div>
      </div>
    </div>
  );
}
