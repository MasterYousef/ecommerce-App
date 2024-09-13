import React from "react";
import { Row, Col } from "react-bootstrap";
import UserAddAddressHook from "../../logic/user/UserAddAddressHook";
import { ToastContainer } from "react-toastify";

function UserAddAddress() {
  const [
    alias,
    setAlias,
    details,
    setDetails,
    onSubmit,
    city,
    setCity,
    postal,
    setPostal,
  ] = UserAddAddressHook();
  return (
    <div>
      <Row className="justify-content-start ">
        <h3 className="pb-2">اضافة عنوان جديد</h3>
        <Col sm="8">
          <input
            type="text"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            className="in-con w-100 mt-3 px-3"
            placeholder="تسمية العنوان مثلا(المنزل - العمل)"
          />
          <textarea
            className="in-con w-100 p-2 mt-3"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows="4"
            cols="50"
            placeholder="العنوان بالتفصيل"
          />
          <input
            type=""
            className="in-con w-100 mt-3 px-3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="المدينة"
          />
          <input
            type="number"
            className="in-con w-100 mt-3 px-3"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            placeholder="الرمز البريدي"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            className="my-btn bg-dark h-100 text-white mt-2"
            onClick={onSubmit}
          >
            اضافة عنوان
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
}

export default UserAddAddress;
