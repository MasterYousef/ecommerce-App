import React from "react";
import { Button, Col, Form, Modal, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../logic/Auth/loginHook";
import { ToastContainer } from "react-toastify";
function Login() {
  const [email, onChangeEmail, password, onChangePassword, onesubmit, Loading] =
    LoginHook();
  return (
    <div style={{ minHeight: "80vh" }}>
      <Row className="w-100 text-center mt-5 mx-auto">
        <Col className="p-0 mx-auto" xs="10" md="4">
          <Form>
            <h2>تسجيل الدخول</h2>
            <Form.Group className="mb-2">
              <Form.Control
                type="email"
                autoComplete="email"
                placeholder="البريد الالكتروني "
                className="mb-2"
                value={email}
                onChange={onChangeEmail}
              />
              <Form.Control
                type="password"
                autoComplete="password"
                placeholder="كلمة السر"
                className="mb-2"
                value={password}
                onChange={onChangePassword}
              />
            </Form.Group>
            <Link to="/forget-password" style={{ textDecoration: "none" }}>
              <div className="text-danger my-1" style={{ cursor: "pointer" }}>
                هل نسيت كلمة السر ؟
              </div>
            </Link>
            <Button variant="dark" onClick={onesubmit} className="w-100 mb-3">
              تسجيل دخول
            </Button>
            <div>
              ليس لديك حساب ؟
              <Link to="/register" style={{ textDecoration: "none" }}>
                <span className="text-danger" style={{ cursor: "pointer" }}>
                  {" "}
                  انشاء حساب جديد{" "}
                </span>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
      <Modal
        show={Loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <h1>
            جاري التحميل...
            <Spinner animation="grow" />{" "}
          </h1>{" "}
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default Login;
