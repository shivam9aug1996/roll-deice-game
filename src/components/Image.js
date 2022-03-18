import React from "react";

const Image = ({ image }) => {
  return (
    <img
      src={image}
      className="card-img img-fluid"
      style={{ height: "200px" }}
      alt=""
    ></img>
  );
};

export default Image;
