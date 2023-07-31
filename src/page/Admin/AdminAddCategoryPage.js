import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddCategory from '../../components/Admin/AdminAddCategory'
function AdminAddCategoryPage() {
  return (
    <div style={{minHeight:"100vh"}}>
    <Container className='mt-3'>
        <Row>
            <Col sm='3' xs='2'>
            <AdminSideBar/>
            </Col>
            <Col  sm='9' xs='10'>
            <AdminAddCategory/>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
export default AdminAddCategoryPage