import React from 'react'
import { Col,Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import RatePoostHook from '../../logic/product/RatePoostHook';

const RatePost = () => {
  const [user,comment,setComment,setRate,onSubmit] = RatePoostHook()
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 1,
        a11y: true,
        isHalf: false,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setRate(newValue)
        }
    };
    return (
        <div>
        <Row className="mt-3 ">
          <Col sm="12" className="me-5  d-flex">
            <div className="rate-name  d-inline ms-3 mt-1 ">{user?.name} </div>
            <ReactStars {...setting} />
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            <textarea
              className="w-100 p-2 mt-3"
              rows="2"
              cols="20"
              placeholder="اكتب تعليقك...."
              value={comment}
              onChange={(e)=>setComment(e.target.value)}
            />
            <div className=" d-flex justify-content-end al">
              <div className="my-btn px-3  py-2 text-center d-inline" onClick={onSubmit}>اضف تعليق</div>
            </div>
          </Col>
        </Row>
      </div>
    )
}

export default RatePost