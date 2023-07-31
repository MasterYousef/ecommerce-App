import React from 'react'
import { Button, Card, Col, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import offh from "../../images/fav-off.png"
import star from "../../images/rate.png"
import AdminProductCardHook from "../../logic/admin/AdminProductCardHook"
import { ToastContainer } from 'react-toastify'
function AdminProductCard({item}) {
const [show,handleClose,handleShow,handelRemove] = AdminProductCardHook()
  return (
    <Col xs='6' sm='6' md='4' lg='4' className='mb-2'>
    <Card className='w-100'>
    <div className='d-flex justify-content-between  text-black-50'>
        <p onClick={handleShow} style={{cursor:'pointer'}}>ازالة</p>
        <Link to={`/admin/editproduct/${item._id}`} style={{textDecoration:'none'}} className='text-black-50'> 
        <p>تعديل</p>
        </Link>
    </div>
    <Link to={`/Products/${item._id}`}>
      <Card.Img variant="top" src={item.imageCover} className='card-h' />
      </Link>
      <Card.Body className='pb-0'>
        <Card.Title>
            <div className='w-100 d-flex justify-content-end'>
                <img src={offh} alt='' className='fav-off'></img>
            </div>
            <p className='fs-6'>{item.title}</p>
        </Card.Title>
        <Card.Text className='d-flex justify-content-between flex-row-reverse mt-4 mb-0 align-items-center'>
        <p>{item.price} جنيه</p>
        <p className='text-warning'> <img src={star} alt='' className='my-w'/> {item.ratingsQuantity}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> ازالة المنتج ؟</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متأكد من انك تريد ازالة هذا المنتج !؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="danger" onClick={()=> handelRemove(item._id)}>
            تأكيد 
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </Col>
  )
}

export default AdminProductCard