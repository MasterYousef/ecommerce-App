import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

function UserAllOrderItem({item}) {
  return (
    <Row className='bg-white rounded my-2'>
        <div className='d-flex justify-content-between mt-3'>
        <h4>طلب رقم #{item?._id}</h4>
        <h5>{item?.createdAt.slice(0,10)}</h5>
        </div>
        {
          item?.cartItems ? (item?.cartItems.map((i,index)=><UserAllOrderCard key={index} item={i}/>)):null
        }
        <div className='d-flex justify-content-between flex-row'>
            <div>الحالة :<span className='text-black-50 mx-2'>{item?.isDelivered === true & item?.isDelivered === true ? ("تم الانتهاء "):("قيد التنفيذ")}</span></div>
            <div>التوصيل :<span className='text-black-50 mx-2'>{item?.isDelivered === true ? ("تم "):("لم يتم")}</span></div>
            <div>الدفع :<span className='text-black-50 mx-2'>{item?.isPaid === true ? ("تم "):("لم يتم")}</span></div>
            <p className='fw-bold'>{item?.totalOrderPrice} جنيه</p>
        </div>
    </Row>
  )
}

export default UserAllOrderItem