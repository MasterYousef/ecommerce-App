import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminAllorder from "../../components/Admin/AdminAllorder";
function AdminAllOrderPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container className="mt-3">
        <Row>
          <Col xs="4" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="8" md="10">
            <AdminAllorder />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminAllOrderPage;
