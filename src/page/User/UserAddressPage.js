import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserAddress from '../../components/User/UserAddress'

function UserAdrressPage() {
  return (
    <div style={{minHeight:"100vh"}}>
    <Container className='mt-3'>
        <Row>
            <Col xs='4' md="2">
            <UserSideBar/>
            </Col>
            <Col xs='8' md="10">
            <UserAddress/>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default UserAdrressPage