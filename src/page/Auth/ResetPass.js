import React from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import ResetPassHook from '../../logic/Auth/ResetPassHook'
function ResetPass() {
    const [newPassword,conPassword,onChangePassword,onChangeConPassword,onesubmit,Loading] = ResetPassHook()
  return (
    <div style={{minHeight:"80vh"}}>
    <Form className='mform'>
      <h3>ادخل كلمة السر الجديدة</h3>
    <Form.Group className="my-3" >
      <Form.Control type="text" placeholder="كلمة السر" className='mb-2 no-arrow' value={newPassword} onChange={onChangePassword}/>
      <Form.Control type="text" placeholder="تأكيد كلمة السر" className='mb-2 no-arrow' value={conPassword} onChange={onChangeConPassword}/>
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

export default ResetPass