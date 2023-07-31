import React from 'react'
import { Col, Modal, Row, Spinner } from 'react-bootstrap'
import PaymentChooseHook from '../../logic/Payment/PaymentChooseHook'
import { ToastContainer } from 'react-toastify'

function PymentChoose() {
    const [price,res,setPay,option,setOption,onSubmit,loading,loading2]=PaymentChooseHook()
  return (
    <div>
    <div className="fw-bold fs-3 pt-5">اختر طريقة الدفع</div>
    <div className="bg-white my-3 px-3 py-2 rounded shadow">
        <Row className="d-flex justify-content-between ">
            <Col xs="12" className="my-3">
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="الدفع عن طريق الفيزا"
                    className="mt-2"
                    onChange={(e)=>setPay(e.target.value)}
                />
                <label className="mx-2" for="group1">
                    الدفع عن طريق البطاقه الائتمانية
                </label>
            </Col>
        </Row>

        <Row className="my-3">
            <Col xs="12" className="d-flex">
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="الدفع عند الاستلام"
                    className="mt-2"
                    onChange={(e)=>setPay(e.target.value)}
                />
                <label className="mx-2" for="group1">
                    الدفع عند الاستلام
                </label>
            </Col>
        </Row>
        <Row>
            <select className='w-25' placeholder='اختر العنوان' name='Adrress' value={option} onChange={(e)=>setOption(e.target.value)}>
            <option value="0">اختر العنوان  </option>
            {
                res?.data ? (res?.data.map((e,index)=><option key={index} value={index+1}>{e?.alias}</option>)):null
            }
            </select>
        </Row>
    </div>

    <Row>
        <Col xs="12" className="d-flex justify-content-end">
            <div className="p-2 bg-white px-4 rounded border">{
                price === undefined? ("...") : (`${price} جنية`)
            }</div>
            <div className="my-btn px-3 pt-2 h-100 bg-dark text-white me-2" onClick={onSubmit}> اتمام الشراء</div>
        </Col>
    </Row>
    <Modal
        show={loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
      <Modal
        show={loading2}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
    <ToastContainer/>
</div>
  )
}

export default PymentChoose