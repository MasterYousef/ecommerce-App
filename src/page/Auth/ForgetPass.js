import React from "react";
import { Button, Col, Form, Modal, Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ForgetPassHook from "../../logic/Auth/ForgetPassHook";
function ForgetPass() {
  const [email, onChangeEmail, onesubmit, Loading] = ForgetPassHook();
  return (
    <div st le={{ minHeight: "80vh" }}>
      <Col xs="6" md="4" className="mx-auto">
        <Form className="mform">
          <h2>نسيت كلمة السر ؟</h2>
          <Form.Group className="my-3">
            <Form.Control
              type="email"
              placeholder="البريد الالكتروني "
              className="mb-2"
              autoComplete="email"
              value={email}
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Button variant="dark" onClick={onesubmit} className="w-100 mb-3">
            ارسال الرمز
          </Button>
        </Form>
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
      </Col>
    </div>
  );
}
export default ForgetPass;
