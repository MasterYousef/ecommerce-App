import React from 'react'
import { Col, Modal, Row, Spinner } from 'react-bootstrap'
import UserEditAddressHook from '../../logic/user/UserEditAddressHook'
import { ToastContainer } from 'react-toastify';

function UserEditAddress(){
    const [alias,setAlias,details,setDetails,phone,setPhone,onSubmit,Loading] = UserEditAddressHook()
    console.log(alias);
  return (
    <div>
    <Row className="justify-content-start ">
        <h3 className="pb-2">تعديل العنوان</h3>
        <Col sm="8">
            <input
                type="text"
                value={alias}
                onChange={(e)=>setAlias(e.target.value)}
                className="in-con w-100 mt-3 px-3"
            />
            <textarea
                className="in-con w-100 p-2 mt-3"
                rows="4"
                cols="50"
                value={details}
                onChange={(e)=>setDetails(e.target.value)}
            />
            <input
                type="number"
                className="in-con w-100 mt-3 px-3"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="my-btn bg-dark h-100 text-white mt-2" onClick={onSubmit}>حفظ تعديل العنوان</button>
        </Col>
    </Row>
    <Modal
        show={Loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
    <ToastContainer/>
</div>
  )
}

export default UserEditAddress