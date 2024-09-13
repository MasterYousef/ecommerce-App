import React from 'react'
import { Col, Row } from 'react-bootstrap'
function UserAllOrderCard({item}) {
  return (
    <Col xs="12" className="bg-white rounded p-1  d-flex px-2">
    <img width="160px" height="197px" src={item?.product.imageCover} alt="" className='rounded mx-2'/>
    <div className="w-100">
      <Row className="justify-content-center mt-2">
        <Col sm="12" className=" d-flex flex-row justify-content-start">
          <div className="d-inline pt-2 cat-title">{item?.product?.title}</div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mt-1">
        <div className="text-warning  d-inline  p-1 pt-2">{item?.product.ratingsAverage} <i class="fa-solid fa-star"></i></div>
        <div className="text-black-50 d-inline p-1 pt-2">({`${item?.product.ratingsQuantity} تقييم`})</div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: item?.color }}></div>
        </Col>
      </Row>

      <Row className="justify-content-between">
        <Col sm="12" className=" d-flex flex-row justify-content-between">
          <div className="d-inline pt-2 d-flex">
            <div className="text-black-50 d-inline">الكميه</div>
            <input
              className="mx-2 text-center"
              type="number"
              value={item?.quantity}
              style={{ width: "40px", height: "25px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  </Col>
  )
}

export default UserAllOrderCard