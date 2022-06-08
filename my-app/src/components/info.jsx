import React from "react";
import "./info.scss";

const Info = () => {
  return (
    <div className="Info-section">
      <div className="main-Info">
        <div className="person-Info">
          Personal Information <span className="text-private">(Private)</span>
        </div>
        <div className="button-editing">edit</div>
      </div>  
      <div className="main-work">
        <div className="user-logo">
          <span className="hyphens">---</span>
          <span>---</span>
        </div>
        <span className="hyphen">---</span>
        <div className="user-email">nabeel.ahmad@southvillesol.com</div>
        <div className="user-phone">
          <span>---</span>
        </div>
        <div className="user-house">
          <span>---</span>
        </div>
        <div className="bank-details">
          <span className="account-details">Transfer account not set</span>
        </div>
      </div>
    </div>
  );
};

export default Info;