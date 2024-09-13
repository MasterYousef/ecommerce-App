import React from 'react'
import { Button, Col, Modal, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import UserAddressCardHook from '../../logic/user/UserAddressCardHook';
import { ToastContainer } from 'react-toastify';
function UserAddressCard({item}) {
    const [Loading,show,setShow,onDelete] = UserAddressCardHook()
  return (
<div className="card my-3 py-1 px-2">
            <Row className="justify-content-between">
                    <div className="p-2 w-50">{item.alias}</div>
                    <div className="p-2 w-50 d-flex justify-content-end align-items-center">
                            <i className="fa-solid fa-trash mx-2 cur" onClick={()=>setShow(true)}></i>
                            <Link to={`/user/edit-address/${item._id}`} style={{ textDecoration: "none",color:'black' }}>
                            <i className="fa-regular fa-pen-to-square cur"></i>
                            </Link>
                            
                    </div>
            </Row>
            <Row>
                <Col xs="12">
                    <div className='text-black-50'>{item.details}</div>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col xs="12">
                    <div className='text-black-50'>{item.city}</div>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div>الرمز البريدي :</div>
                    <div className="mx-2 text-black-50">{item.postalCode}</div>
                </Col>
            </Row>
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

export default UserAddressCard