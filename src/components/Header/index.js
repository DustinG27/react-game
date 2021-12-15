import React from "react";
import "./style.css";

function Header(props) {
  return <div className="header">
      <div className="title">
          <p>mmm beer</p>
      </div>
      <div className="info">
        <p>Click each beer only once</p>
      </div>
      <div className="counter">
        <p>Current Score: 0</p>
        <p>High Score: 0</p>
      </div>
  </div>;
}

export default Header;
