import React from "react";

const FourthRow = () => {
  return (
    <div className="row  mb-2">
      <div className="col-md-6 mt-4">
        <a href="#" className="text-decoration-none ">
          <div
            className="card  shadow rounded-4 "
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
                    src="src\assets\Frame (10).svg"
                    alt=""
                    style={{ width: "5rem", height: "5rem" }}
                  />
                </div>
                <div className="row" style={{ width: "13rem" }}>
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
                    USAHA
                  </h4>
                  <hr
                    style={{
                      height: "2px",
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
                    Halaman Usaha
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div className="col-md-6 mt-4 ">
        <a href="#" className="text-decoration-none ">
          <div
            className="card  shadow rounded-4 "
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
                    src="src\assets\Frame (9).svg"
                    alt=""
                    style={{ width: "5rem", height: "5rem" }}
                  />
                </div>
                <div className="row" style={{ width: "13rem" }}>
                  <h4
                    className="p-0"
                    style={{
                      color: "#2B3674",
                      fontFamily: "DM Sans",
                      fontSize: "1.5rem",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "2rem",
                    }}
                  >
                    PERBAIKAN
                  </h4>
                  <hr
                    style={{
                      height: "2px",
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
                    Halaman Perbaikan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FourthRow;
