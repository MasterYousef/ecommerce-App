import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserAllOrderItem from '../../components/User/UserAllOrderItem'
import UserAllOrderPageHook from '../../logic/user/UserAllOrderPageHook'
import Pagination from '../../components/utilty/Pagination'
function UserAllOrderPage() {
  const [res,Loading,setPage,pagin] =UserAllOrderPageHook()
  let show;
  pagin?.numberOfPages >=2 ? show = "block" : show = "none"
  return (
    <div style={{minHeight:"100vh"}}>
    <Container className='mt-3'>
        <Row>
            <Col sm='3' xs='2'>
            <UserSideBar/>
            </Col>
            <Col  sm='9' xs='10'>
            <h3 className="pb-2 my-2">الطلبات </h3>
            {
              Loading === true  ? (<h3>جاري التحميل...<Spinner animation="grow" /> </h3>) : (
                res?.data ? (res?.data.map((i,index)=><UserAllOrderItem key={index} item={i}/>)) : (<h3>لا يوجد طلبات </h3>)
              )
            }
            </Col>
        </Row>
        <div style={{display:show}}>
        <Pagination numberOfPages={pagin?.numberOfPages} SetPage={setPage}/>
        </div>
    </Container>
</div>
  )
}

export default UserAllOrderPage