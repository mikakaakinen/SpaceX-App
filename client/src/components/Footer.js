import React from "react";

const footer = {
  color: "#fff",
  backgroundColor: "#005566",
};

const red = {
  color: "#ff0000",
};

const Footer = () => {
  return (
    <div className="container-fluid pt-3 pb-2 mt-4" style={footer}>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h5>
            Made with
            <span style={red}> &hearts;</span> in Riihim&auml;ki, Finland
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h5>According to tutorial by Brad Traversy</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
