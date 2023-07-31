import React, { useRef } from 'react'
import { Button, Form, Modal, Row, Spinner } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import AdminCouponsCardHook from '../../logic/admin/AdminCouponsCardHook';
function AdminCouponsCard({item}) {
    const [Loading1,show,setShow,onDelete,show2,setShow2,Loading2,name,setName,setExpire,discount,setDiscount,onSubmit] =AdminCouponsCardHook(item)
  return (
    <div>
    <Zoom>
    <div className='bg-white my-2 w-100 p-2 rounded d-flex justify-content-between'>
        <div>
            <p>الاسم :  {item.name} </p>
            <p>نسبة الخصم : {item.discount}%</p>
            <p className='my-dir'>تاريخ الانتهاء : {item.expire.replace('T00:00:00.000Z',"")}</p>
        </div>
        <div>
        <i className="fa-solid fa-trash mx-2 cur" onClick={()=>setShow(true)}></i>
        <i className="fa-regular fa-pen-to-square cur" onClick={()=>setShow2(true)}></i>
        </div>
    </div>
    </Zoom>
    <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header>
          <Modal.Title> ازالة الكوبون ؟</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متأكد من انك تريد ازالة هذا الكوبون !؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            تراجع
          </Button>
          <Button variant="danger" onClick={()=>onDelete(item._id)}>
            تأكيد 
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={Loading1}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={()=>setShow2(false)}>
        <Modal.Header>
          <Modal.Title> تعديل الكوبون ؟</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='bg-white p-2 rounded justify-content-center'>
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="الاسم" className='my-2 text-center' value={name} onChange={(e)=>setName(e.target.value)}/>
        <Form.Control type="date" placeholder="تاريخ الانتهاء" className='my-2 text-center'
                  onChange={(e)=>setExpire(e.target.value)}/>
        <Form.Control type="number" placeholder="نسبة الخصم" className='my-2 text-center' value={discount} onChange={(e)=>setDiscount(e.target.value)}/>
        </Form.Group>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow2(false)}>
            تراجع
          </Button>
          <Button variant="success" onClick={()=>onSubmit(item?._id)}>
            تعديل 
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={Loading2}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
    </div>
  )
}

export default AdminCouponsCard