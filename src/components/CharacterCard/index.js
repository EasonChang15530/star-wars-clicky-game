import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="card">
        <div className="img-container">
          <img
            alt={props.name}
            src={props.image}
            onClick={props.randomizeImages} />
        </div>
        <div className="content">
          <strong>
            {props.name}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
