import React from "react";

const SecondRow = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div
          className="card  shadow rounded-4"
          style={{ height: "9rem", background: "#FFF" }}
        >
          <div className="card-body">
            <div className="d-flex flex-row gap-4">
              <div
                className=" rounded-circle d-flex flex-column justify-content-center shadow-sm"
                style={{
                  height: "7rem",
                  width: "7rem",
                  placeItems: "center",
                  background: "#edf5f5",
                }}
              >
                <img
                  src="src\assets\D36C6D09-C60A-4C3B-BC5C-876208C8B64D.jpeg"
                  alt=""
                  style={{ width: "7rem", height: "7rem" }}
                  className="rounded-circle"
                />
              </div>
              <div className="row" style={{ width: "22rem" }}>
                <h4
                  className="p-0"
                  style={{
                    color: "#2B3674",
                    fontFamily: "DM Sans",
                    fontSize: "1.5rem",
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "1.5rem",
                  }}
                >
                  ANANDA MUHAMMAD ZAHIR
                </h4>
                <hr
                  style={{
                    height: "5px",
                    background: "#A3AED0",
                    border: "none",
                  }}
                  className="rounded-5"
                />
                <p
                  className="p-0"
                  style={{
                    color: "#A3AED0",
                    fontFamily: "DM Sans",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "1.5rem",
                  }}
                >
                  NIP: 21120120140115 | Direktur
                </p>
              </div>
              <div className="ms-auto">
                <div
                  className="rounded-3 d-flex flex-row justify-content-center"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    placeItems: "center",
                    background: "#edf5f5",
                  }}
                >
                  <a href="#">
                    <img
                      src="src\assets\more_horiz (1).svg"
                      alt=""
                      style={{ width: "1.5rem", height: "1.5rem" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondRow;
