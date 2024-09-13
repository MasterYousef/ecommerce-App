import React, { useRef } from 'react'
import {Button, Form, Modal, Row, Spinner} from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AdminAddCouponsHook from '../../logic/admin/AdminAddCouponsHook';
function AdminAddCoupons() {
    const ref = useRef();
    const [name,expire,discount,setName,setExpire,setDiscount,onSubmit,Loading] = AdminAddCouponsHook()
  return (
    <div className='mt-2'>
        <h3>اضافة كوبون</h3>
        <Row className='bg-white p-4 rounded justify-content-center'>
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="الاسم" className='my-2 text-center' value={name} onChange={(e)=>setName(e.target.value)}/>
        <Form.Control type="text" placeholder="تاريخ الانتهاء" className='my-2 text-center my-dir'
                 ref={ref}
                 value={expire}
                  onChange={(e)=>setExpire(e.target.value)}
                 onFocus={() => (ref.current.type = "date")}/>
        <Form.Control type="number" max={100} min={1} placeholder="نسبة الخصم" className='my-2 text-center' value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
        <Button className='w-100' variant='dark' onClick={onSubmit}>اضافة الكوبون</Button>
        </Form.Group>
        </Row>
        <ToastContainer/>
        <Modal
        show={Loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
    </div>
  )
}
export default AdminAddCoupons