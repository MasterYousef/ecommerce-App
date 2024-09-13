import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllProduct from '../../components/Admin/AdminAllProduct'
import Pagination from '../../components/utilty/Pagination'
import AdminAllProductHook from '../../logic/admin/AdminAllProductHook'
import { ToastContainer } from 'react-toastify'

function AdminAllProductPage() {
  const [items,Loading,SetPage,page] = AdminAllProductHook(3)
  return (
    <div style={{minHeight:"100vh"}}>
        <Container className='mt-3'>
            <Row >
                <Col sm='3' xs='2'>
                <AdminSideBar/>
                </Col>
                <Col  sm='9' xs='10'>
                <AdminAllProduct items={items?.data} Loading={Loading} />
                {
                  items?.paginationResult?.numberOfPages > 1 ?  (<Pagination numberOfPages={items?.paginationResult?.numberOfPages} SetPage={SetPage}page={page}/>) : null
                }
                </Col>
            </Row>
            <ToastContainer/>
        </Container>
    </div>
  )
}

export default AdminAllProductPage