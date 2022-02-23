import React from "react";

const NotifyModal = ({ message }) => {
  return (
    <div className="container">
      <h1 style={{ color: "green" }}>{message}</h1>
    </div>
  );
};

export default NotifyModal;
