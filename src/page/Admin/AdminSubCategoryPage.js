import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminSubCategory from "../../components/Admin/AdminSubCategory";

function AdminSubCategoryPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container className="mt-3">
        <Row>
          <Col xs="4" md="2">
            <AdminSideBar />
          </Col>
          <Col xs="8" md="10">
            <AdminSubCategory />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminSubCategoryPage;
