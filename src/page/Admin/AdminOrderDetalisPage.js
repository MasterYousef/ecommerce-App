import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminOrderDetalis from '../../components/Admin/AdminOrderDetalis'
function AdminOrderDetalisPage(){
    return (
        <Container >
            <Row className='py-3'>
                <Col sm='3' xs='2'>
                    <AdminSideBar />
                </Col>
                <Col sm='9' xs='10'>
                    <AdminOrderDetalis />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminOrderDetalisPage