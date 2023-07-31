import React from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import VerifyCodeHook from '../../logic/Auth/VerifyCodeHook'
function VerifyCode() {
    const [code,onChangeCode,onesubmit,Loading] = VerifyCodeHook()
  return (
    <div style={{minHeight:"80vh"}}>
    <Form className='mform'>
      <h3>ادخل الرمز المرسل الي بريدك الالكتروني</h3>
    <Form.Group className="my-3" >
      <Form.Control type="number" placeholder="الرمز" className='mb-2 no-arrow' value={code} onChange={onChangeCode}/>
    </Form.Group>
    <Button variant="dark" onClick={onesubmit} className='w-100 mb-3'>
      متابعة
    </Button>
  </Form>
      <Modal
      show={Loading}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title">
      <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
    </Modal>
      <ToastContainer/>
  </div>
  )
}
export default VerifyCode