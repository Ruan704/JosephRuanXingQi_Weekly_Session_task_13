import { instanceOf } from "prop-types";
import React from "react";
import "./Card.css";

export const Card = ({ text, ...props }) => {
  return (
    <React.Fragment>
      <div class="card border-primary mb-3" style={{ width: "18rem" }}>
        <div class="card-header">Header</div>
        <div class="card-body text-primary">
          <h5 class="card-title"></h5>
          <p class="card-text">
            {text}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
