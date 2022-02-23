import React from "react";
import loader from "../images/loader.gif";
const Loader = () => {
  return (
    <>
      <div className="center-loader">
        <img src={loader} />
      </div>
    </>
  );
};

export default Loader;
