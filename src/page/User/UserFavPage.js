import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/User/UserSideBar";
import UserFav from "../../components/User/UserFav";
import { ToastContainer } from "react-toastify";

function UserFavPage() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Container className="mt-3">
        <Row>
          <Col xs="4" md="2">
            <UserSideBar />
          </Col>
          <Col xs="8" md="10">
            <UserFav />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default UserFavPage;
