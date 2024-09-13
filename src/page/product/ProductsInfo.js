import React from "react";
import CatagoryHeader from "../../components/Category/CatagoryHeader";
import ProductDetails from "../../components/product/ProductDetails";
import { Container, Row } from "react-bootstrap";
import RateContainer from "../../components/Rate/RateContainer";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import ProductInfoConHook from "../../logic/product/ProductInfoConHook";
import { ToastContainer } from "react-toastify";
function ProductsInfo() {
  const { id } = useParams();
  const [CateProducts, items] = ProductInfoConHook(id);
  return (
    <div style={{ minHeight: "80vh" }}>
      <CatagoryHeader />
      <Container>
        <ProductDetails item={items} />
        {items !== undefined ? <RateContainer item={items} /> : null}
        <Row className="justify-content-around my-3">
          {CateProducts !== undefined ? (
            CateProducts?.map((c, index) => {
              return <ProductCard key={index} item={c} />;
            })
          ) : (
            <h2>لا توجد منتجات</h2>
          )}
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default ProductsInfo;
