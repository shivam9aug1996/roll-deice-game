import React from "react";

const NotifyModal = ({ message }) => {
  return (
    <div>
      <p
        style={{
          color: "green",
          fontSize: "20px",
          padding: "20px",
          border: "1px solid green",
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default NotifyModal;
