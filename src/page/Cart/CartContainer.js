import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import CartItem from "../../components/Cart/CartItem";
import CartCheckout from "../../components/Cart/CartCheackOut";
import CartContainerHook from "../../logic/cart/CartContainerHook";
import { ToastContainer } from "react-toastify";

function CartContainer() {
  const [
    items,
    loading,
    couponName,
    setCouponName,
  ] = CartContainerHook();
  return (
    <div style={{ minHeight: "90vh" }}>
      <Container>
        <Row className="mt-2">
          <Col lg="8" xs="12">
            {loading === false ? (
              items?.data?.productItems ? (
                items?.data?.productItems?.map((i, index) => {
                  return <CartItem key={index} item={i} setCoupon={setCouponName} />;
                })
              ) : (
                <h3>لا توجد منتجات</h3>
              )
            ) : (
              <h3>
                جاري التحميل...
                <Spinner animation="grow" />
              </h3>
            )}
          </Col>
          <Col lg="4" xs="12">
            <CartCheckout
              price={items?.data?.totalPrice}
              couponName={couponName}
              setCouponName={setCouponName}
              totalPriceAfterCo={
                items?.data?.totalPriceAfterDiscount
              }
              load={loading}
            />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default CartContainer;
