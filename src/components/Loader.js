import React from "react";
import loader from "../images/loader.gif";
const Loader = () => {
  return (
    <div className="container container-margin">
      <div className="center-loader">
        <img src={loader} />
      </div>
    </div>
  );
};

export default Loader;
