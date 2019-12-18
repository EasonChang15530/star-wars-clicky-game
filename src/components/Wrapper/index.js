import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
