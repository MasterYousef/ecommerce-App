import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import AdminOrderCard from './AdminOrderCard'
import UserAllOrderPageHook from '../../logic/user/UserAllOrderPageHook';
import Pagination from '../utilty/Pagination';
function AdminAllorder() {
  const [res,Loading,setPage,pagin] =UserAllOrderPageHook()
  let show;
  pagin?.numberOfPages >=2 ? show = "block" : show = "none"
  return (
    <Row className='mt-2 flex-row'>
        <h2>ادارة الطلبات</h2>
        {
              Loading === true  ? (<h3>جاري التحميل...<Spinner animation="grow" /> </h3>) : (
                res?.data.length ? (res?.data?.map((i,index)=><AdminOrderCard key={index} item={i}/>)) : (<h3>لا يوجد طلبات </h3>)
              )
        }
        <div style={{display:show}}>
        <Pagination numberOfPages={pagin?.numberOfPages} SetPage={setPage}/>
        </div>
    </Row>
  )
}

export default AdminAllorder