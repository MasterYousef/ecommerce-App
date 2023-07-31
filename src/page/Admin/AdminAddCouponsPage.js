import React from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import { Col, Container, Row } from 'react-bootstrap'
import AdminAddCoupons from '../../components/Admin/AdminAddCoupons'
import AdminShowCoupons from '../../components/Admin/AdminShowCoupons'

function AdminAddCouponsPage() {
  return (
    <div style={{minHeight:"100vh"}}>
    <Container className='mt-3'>
        <Row>
            <Col sm='3' xs='2'>
            <AdminSideBar/>
            </Col>
            <Col  sm='9' xs='10'>
                <AdminAddCoupons/>
                <AdminShowCoupons/>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default AdminAddCouponsPage