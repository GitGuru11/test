import React from "react";
import "./index.css";

export default function body() {
  return (
    <div className="body-container">
      <div className="container body-wrap">
        <div className="body-left">
          <div className="about-us">About us</div>
          <div className="about-content">
            QuickFunds- Your trusted financial partner for loans. Quick
            approvals, competitive rates, and personalized solutions to meet
            your unique needs. Empowering you to achieve your financial goals.
            Apply online today!
          </div>
        </div>
        <div className="body-right">
          <div>
            <div className="label">Your Name</div>
            <input></input>
            <div className="label">Phone number</div>
            <input></input>
            <div className="label">Email address</div>
            <input></input>
            <div className="send-btn">SEND</div>
          </div>
        </div>
      </div>
    </div>
  );
}
