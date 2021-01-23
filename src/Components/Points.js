import React from "react";
import img from "../Assets/icon-check.svg";
import "./Points.scss";

const Points = ({ children }) => {
  return (
    <div className="points">
      <img
        src={img}
        alt="icon-check"
        style={{ height: 15, width: 15, marginTop: 3 }}
      />
      <p className="points-items">{children}</p>
    </div>
  );
};
export default Points;
