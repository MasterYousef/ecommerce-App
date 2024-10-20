import { Card, Col } from "react-bootstrap";
import star from "../../images/rate.png";
import { Link } from "react-router-dom";
import ProductCardHook from "../../logic/product/ProductCardHook";
import { ToastContainer } from "react-toastify";
function ProductCard({ item, favId }) {
  const [heart, heartOff, heartOn] = ProductCardHook(item.id, favId);
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="mb-2">
      <Card className="w-100 h-100">
        <Link to={`/Products/${item._id}`}>
          <Card.Img variant="top" src={item.imageCover} className="card-h" />
        </Link>
        <Card.Body className="pb-0 d-flex flex-column px-2">
          <Card.Title>
            <div className="w-100 d-flex flex-row-reverse justify-content-between mb-auto">
              {heart === true ? (
                <i
                  className="fa-solid fa-heart text-danger cur"
                  onClick={heartOff}
                ></i>
              ) : (
                <i className="fa-regular fa-heart cur" onClick={heartOn}></i>
              )}
              <p className="fs-6">{item.title}</p>
            </div>
          </Card.Title>
          <Card.Text className="d-flex justify-content-between flex-column-reverse flex-md-row-reverse mt-md-auto mb-0 align-items-center pb-1 fs-6">
            <div className="text-center">
              {item?.priceAfterDiscount >= 1 ? (
                <span>
                  <span style={{ textDecorationLine: "line-through" }}>
                    {item.price}
                  </span>{" "}
                  {item.priceAfterDiscount}
                </span>
              ) : (
                item.price
              )}{" "}
              جنيه
            </div>
            <div>
              <span className="text-warning ms-md-2 ms-1">
                <img src={star} alt="" className="my-w" />{" "}
                {item.ratingsAverage || 0}
              </span>
              <span className="text-balck">({item.ratingsQuantity})</span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
}

export default ProductCard;
