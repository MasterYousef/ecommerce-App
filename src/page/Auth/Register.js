import React from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "../../logic/Auth/RegisterHook";
import { ToastContainer } from "react-toastify";
function Register() {
  const [
    name,
    email,
    password,
    newPasswordConfirm,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangenewPasswordConfirm,
    onChangePhone,
    onesubmit,
    Loading,
  ] = RegisterHook();
  return (
    <div style={{ minHeight: "80vh" }}>
      <Form className="mform">
        <h2> انشاء حساب جديد</h2>
        <Form.Group>
          <Form.Control
            value={name}
            onChange={onChangeName}
            type="text"
            placeholder="اسم المستخدم"
            className="mb-2"
          />
          <Form.Control
            value={email}
            autoComplete="email"
            onChange={onChangeEmail}
            type="email"
            placeholder="البريد الالكتروني"
            className="mb-2"
          />
          <Form.Control
            value={password}
            onChange={onChangePassword}
            type="password"
            placeholder="كلمة السر"
            className="mb-2"
          />
          <Form.Control
            value={newPasswordConfirm}
            onChange={onChangenewPasswordConfirm}
            type="password"
            placeholder=" تأكيد كلمة السر "
            className="mb-2"
          />
          <Form.Control
            value={phone}
            onChange={onChangePhone}
            type="tel"
            placeholder="رقم الهاتف"
            className="mb-2"
          />
        </Form.Group>
        <Button variant="dark" className="w-100 mb-3" onClick={onesubmit}>
          انشاء حساب
        </Button>
        <div>
          لديك حساب بالفعل ؟
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="text-danger" style={{ cursor: "pointer" }}>
              تسجيل الدخول
            </span>
          </Link>
        </div>
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
    </div>
  );
}

export default Register;
