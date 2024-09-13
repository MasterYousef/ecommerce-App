import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function AdminOrderCard({item}) {
  return (
    <Link to={`/admin/order/details/${item?._id}`} style={{ textDecoration: 'none',color:'black' }}>
    <Col xs="12" className="bg-white rounded p-3 my-2 d-flex px-2">
        
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-1 text-black-50">الطلب رقم #{item?._id}</div>
              <div className="d-flex pt-1 ">
              <div className="text-black-50">التاريخ : </div>
                <span className='mt-1 mx-1'> {item?.createdAt.slice(0,10)} </span>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className="">
            <div>الحالة :<span className='text-black-50 mx-2'>{item?.isDelivered === true & item?.isDelivered === true ? ("تم الانتهاء "):("قيد التنفيذ")}</span></div>
            <div>التوصيل :<span className='text-black-50 mx-2'>{item?.isDelivered === true ? ("تم "):("لم يتم")}</span></div>
            <div>الدفع :<span className='text-black-50 mx-2'>{item?.isPaid === true ? ("تم "):("لم يتم")}</span></div>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="pt-1 d-flex justfiy-content-center align-items-center">
              <div className="d-flex pt-1 ">
              <div className="">العميل : </div>
                <span className=' mx-1 text-black-50'> {item?.user?.name} </span>
              </div>
              </div>
              <div className="d-inline pt-2 fw-bold fs-5">{item?.totalOrderPrice} جنية</div>
            </Col>
          </Row>
        </div>
        
      </Col>
      </Link>
  )
}

export default AdminOrderCard