import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import AdminCouponsCard from './AdminCouponsCard'
import AdminShowCouponsHook from '../../logic/admin/AdminShowCouponsHook';
import Pagination from '../utilty/Pagination'
function AdminShowCoupons() {
    const [res,SetPage,Loading] = AdminShowCouponsHook()
  return (
    <Row className='justify-content-start mt-2'>
            {
              Loading === true ? (<h3>جاري التحميل...<Spinner animation="grow" /> </h3>) : (res?.data ? (res?.data.map((e,index)=><AdminCouponsCard key={index} item={e}/>)) : <h3>لا يوجد كوبونات</h3>)
                
            }
        {
            res ? (res?.paginationResult?.numberOfPages <=1 ? null :
                 (<Pagination numberOfPages={res?.paginationResult?.numberOfPages }SetPage={SetPage}/>)) : null
        }
    </Row>
  )
}

export default AdminShowCoupons