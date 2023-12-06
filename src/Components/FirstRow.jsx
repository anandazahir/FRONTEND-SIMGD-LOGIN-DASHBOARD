import React from "react";

const FirstRow = () => {
  return (
    <div className="d-flex flex-row mt-4 justify-content-between">
      <h3
        style={{
          color: "#2B3674",
          fontFamily: "DM Sans",
          fontSize: "1.3rem",
          fontStyle: "normal",
          fontWeight: 500,
        }}
      >
        Dashboard
      </h3>

      <a
        href="#"
        className="d-flex flex-row gap-1 text-decoration-none text-reset"
      >
        <img
          src="src\assets\home-icon-silhouette-svgrepo-com 1 (1).svg"
          alt=""
          style={{ width: "1.08rem", height: "1.08rem" }}
        />

        <p
          style={{
            fontFamily: "DM Sans",
            fontSize: "0.875rem",
            fontStyle: "normal",
            color: "#707EAE",
            fontWeight: 500,
          }}
        >
          / Dashboard
        </p>
      </a>
    </div>
  );
};

export default FirstRow;
