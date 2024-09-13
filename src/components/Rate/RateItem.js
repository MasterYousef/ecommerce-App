import React from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap'
import rate from '../../images/rate.png'
import ReactStars from "react-rating-stars-component";
import RateItemHook from '../../logic/product/RateItemHook'
const RateItem = ({rev,user}) => {
    const [show,setShow,onsubmit,setting,show2,setShow2,NewCom,setNewCom,onEdit] =RateItemHook(rev)
    return (
        <div>
            <Row className="mt-1">
                <Col className="d-felx me-5 justify-content-start d-flex align-items-center">
                    <div className="rate-name d-inline ms-2">{rev.user.name}</div>
                    <img className="" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline text-warning p-1 pt-1">{rev.rating}</div>
                </Col>
            </Row>
            <Row className="border-bottom mx-2 justify-content-between">
                <Col className="d-felx me-4 pb-4" md={10}>
                    <div className="rate-description  d-inline ms-2">{rev.comment}</div>
                </Col>
                {
                    user === true ? (<Col className='d-flex justify-content-end'>
                    <i className="fa-solid fa-trash mx-2 cur" onClick={()=>setShow(true)}></i>
                    <i className="fa-regular fa-pen-to-square cur" onClick={()=>setShow2(true)}></i>
                    </Col>):(null)
                }
            </Row>
            <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header>
          <Modal.Title> ازالة التقييم ؟</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متأكد من انك تريد ازالة هذا التقييم !؟</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            تراجع
          </Button>
          <Button variant="danger" onClick={()=>onsubmit(rev?._id)}>
            تأكيد 
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={()=>setShow2(false)}>
        <Modal.Header>
          <Modal.Title> تعديل التقييم ؟</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <ReactStars {...setting} />
            <textarea
              className="w-100 p-2 mt-3"
              rows="2"
              cols="20"
              placeholder="اكتب تعليقك...."
              value={NewCom}
              onChange={(e)=>setNewCom(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow2(false)}>
            تراجع
          </Button>
          <Button variant="success" onClick={()=>onEdit(rev?._id)}>
            تعديل 
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default RateItem