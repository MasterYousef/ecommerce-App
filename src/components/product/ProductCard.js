import { Card, Col } from "react-bootstrap";
import offh from "../../images/fav-off.png";
import star from "../../images/rate.png";
import { Link } from "react-router-dom";
import ProductCardHook from "../../logic/product/ProductCardHook";
import { ToastContainer } from "react-toastify";
function ProductCard({ item, favId }) {
  const [heart, heartOff, heartOn] = ProductCardHook(item.id, favId);
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="mb-2">
      <Card className="w-100 h-100">
        <Link to={`/Products/${item._id}`}>
          <Card.Img variant="top" src={item.imageCover} className="card-h" />
        </Link>
        <Card.Body className="pb-0">
          <Card.Title>
            <div className="w-100 d-flex justify-content-end">
              {heart === true ? (
                <i
                  class="fa-solid fa-heart text-danger cur"
                  onClick={heartOff}
                ></i>
              ) : (
                <i class="fa-regular fa-heart cur" onClick={heartOn}></i>
              )}
            </div>
            <p className="fs-6">{item.title}</p>
          </Card.Title>
          <Card.Text className="d-flex justify-content-between flex-row-reverse mt-4 mb-0 align-items-center pb-1">
            <div>
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
              <span className="text-warning ms-2">
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
