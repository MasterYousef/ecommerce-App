import React from "react";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddCoupons from "../../components/Admin/AdminAddCoupons";
import AdminShowCoupons from "../../components/Admin/AdminShowCoupons";

function AdminAddCouponsPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container className="mt-3">
        <Row>
          <Col xs="4" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="8" md="10">
            <AdminAddCoupons />
            <AdminShowCoupons />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminAddCouponsPage;
