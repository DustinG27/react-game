import React from "react";
import "./style.css";

function Header(props) {
  return <div className="header">
      <div className="title">
          <p>Remember to click each beer only once. mmm beer</p>
      </div>
      <div className="info">
        <h3>{props.title}</h3>
      </div>
      <div className="counter">
        <p>Current Score: {props.currentScore}</p>
        <p>High Score: {props.highScore}</p>
      </div>
  </div>;
}

export default Header;
