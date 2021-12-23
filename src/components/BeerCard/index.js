import React from "react";
import "./style.css";

function BeerCard(props) {
  return (
    <div className="card" onClick={() => props.clickedBeer(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Style:</strong> {props.style}
          </li>
          <li>
            <strong>Notes:</strong> {props.notes}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BeerCard;
