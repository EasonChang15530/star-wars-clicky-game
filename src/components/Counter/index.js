import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
function Counter(props) {
  return (
    <div>
      <div className="counter-body">
        <p className="counter-text">Click Count: {props.count}
          <span>
            Top Score: {props.topScore}
            </span>
        </p>
      </div>
    </div>
  );
}


export default Counter;
