import React, { Fragment } from "react";
import "../App.css";

const header = {
  color: "#fff",
};

const inLine = {
  display: "inline",
};

const Header = () => {
  return (
    <Fragment>
      <div className="container-fluid pt-2 pb-3 apollo" style={header}>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <h2>
              SPACE<h1 style={inLine}>X</h1>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex flex-wrap justify-content-center">
            <h4>ROCKET AND LAUNCH DATA</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
