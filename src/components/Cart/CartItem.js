import React from 'react'
import { Col,Modal,Row, Spinner } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import CartItemHook from '../../logic/cart/CartItemHook'
function CartItem({item}) {
  const[count,setCount,Loading,onEdit,loading2,onDeleteItem] = CartItemHook(item)
    return (
        <Col xs="12" className="bg-white rounded p-3 my-2 d-flex px-2">
        <img width="160px" height="197px" className='m-1 ms-3 rounded' src={`http://localhost:8000/products/${item?.product?.imageCover}`} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 text-black-50">{item?.product?.category?.name}</div>
              <div className="d-flex pt-2 cur"onClick={onDeleteItem} >
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">{item?.product?.title}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
              <div className="fw-bold fs-4 d-inline mx-1">{item?.product?.brand?.name} </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
              <div
                className="color ms-2 border"
                style={{ backgroundColor: item.color }}></div>
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="text-black-50  d-inline">الكميه</div>
                <input
                  value={count}
                  onChange={(e)=>{setCount(e.target.value)}}
                  className="mx-2 text-center"
                  type="number"
                  style={{ width: "40px", height: "25px" }}
                />
                <button className="bg-dark text-white py-1 my-btn h-100 border-0 rounded w-100 px-2" onClick={onEdit}>تطبيق</button>
              </div>
              <div className="d-inline pt-2 fw-bold fs-5">{item?.price} جنية</div>
            </Col>
          </Row>
        </div>
        <Modal
        show={Loading}
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
      </Col>
    )
}

export default CartItem