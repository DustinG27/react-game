import React from "react";
import "./style.css";

function Header(props) {
  return <div className="header">
      <div className="title">
          <p>mmm beer</p>
      </div>
      <div className="info">
        <p>{props.title}</p>
      </div>
      <div className="counter">
        <p>Current Score: {props.currentScore}</p>
        <p>High Score: {props.highScore}</p>
      </div>
  </div>;
}

export default Header;
