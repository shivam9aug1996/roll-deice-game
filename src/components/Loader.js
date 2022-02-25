import React from "react";
import loader from "../images/loader.gif";
import "../css/loader.css";
const Loader = () => {
  return (
    <div className="container container-margin">
      <div className="center-loader">
        {/* <img src={loader} /> */}
        <div className="lds-dual-ring"></div>
      </div>
    </div>
  );
};

export default Loader;
