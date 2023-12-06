import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#4318FF" }}>
      <Container className="h-100">
        <Row
          className="d-flex justify-content-center align-items-center h-100"
          style={{ placeItems: "center" }}
        >
          <Col xl={10}>
            <Card
              style={{
                borderRadius: "1rem",
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
              className="justify-content-center shadow"
            >
              <Row g={0}>
                <Col md={6} lg={5} className="d-none d-md-block">
                  <Card.Img
                    src="src\assets\replicate-prediction-2u2jjlbb5eobxfgstvwkcgoxmq.jpeg"
                    alt="login form"
                    className="img-fluid h-100"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </Col>
                <Col
                  md={6}
                  lg={7}
                  className="d-flex justify-content-center align-items-center"
                >
                  <Card.Body className="p-4 p-lg-5 text-black">
                    <Form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1 flex-row gap-3">
                        <img
                          src="src\assets\Frame (8).svg"
                          alt=""
                          className="animationimg"
                        />
                        <div className="vr"></div>
                        <span
                          className="h1 fw-bold mb-0"
                          style={{ color: "#4318FF" }}
                        >
                          SIMGD
                        </span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>

                      <Form.Group className="mb-4">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          id="form2Example17"
                          placeholder="Username"
                          style={{ backgroundColor: "#edf5f5" }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          id="form2Example27"
                          placeholder="Password"
                          style={{ backgroundColor: "#edf5f5" }}
                        />
                      </Form.Group>

                      <div className="mb-4 text-center">
                        <Button
                          className="w-100"
                          type="submit"
                          style={{
                            backgroundColor: "#707EAE",
                            border: "hidden",
                          }}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginPage;
