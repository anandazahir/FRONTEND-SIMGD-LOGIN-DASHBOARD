import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-2 justify-content-between">
            <img src="src\assets\Frame (8).svg" alt="" width="70" height="70" />
            <span
              style={{
                color: "#4318FF",
                fontFamily: "DM Sans",
                fontSize: "3rem",
                fontStyle: "normal",
                fontWeight: "700",
              }}
            >
              SIMGD
            </span>
          </div>
          <hr
            style={{
              height: "5px",
              background: "#A3AED0",
              border: "none",
              padding: 0,
              margin: 0,
            }}
          />
          <p
            style={{
              color: "#2B3674",
              fontFamily: "DM Sans",
              fontSize: "0.6875rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "2.625rem",
              padding: 0,
              margin: 0,
            }}
          >
            Sistem Informasi Manajemen Garbantara Depo
          </p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="d-flex flex-row gap-4">
          <NavItem style={{ marginTop: "5px" }}>
            <a href="#">
              <img
                src="src\assets\notifications_none (1).svg"
                alt=""
                width="50"
                height="50"
              />
            </a>
          </NavItem>
          <NavDropdown
            title={
              <img
                src="src\assets\D36C6D09-C60A-4C3B-BC5C-876208C8B64D.jpeg"
                alt=""
                width="50"
                height="50"
                className="rounded-circle"
              />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#">
              <img
                src="src\assets\Frame (5).svg"
                alt=""
                style={{ width: "1rem", height: "1rem", margin: "0.3rem" }}
              />
              <span>Profile</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="/login">
              <img
                src="src\assets\logout-8.svg"
                alt=""
                style={{
                  width: "1rem",
                  height: "1rem",
                  margin: "0.3rem",
                }}
              />
              Log Out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
