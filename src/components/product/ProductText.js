import React from 'react'
import { Row,Col, Button, Modal, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import ProdcutInfoHook from '../../logic/product/ProdcutInfoHook';
import AddtoCartHook from '../../logic/cart/AddtoCartHook';
const ProductText = () => {
  const {id} = useParams();
  const [item ,itemCate,itemBrand] = ProdcutInfoHook(id)
  const [clickColor,colorIndex,loading,AddCart] = AddtoCartHook(item?.availableColors,id)
    return (
        <div>
      <Row className="mt-2">
        <div className="cat-text">{itemCate.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline"> {item.title}  <div className="text-warning d-inline mx-3">{item.ratingsQuantity}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{itemBrand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {
            item?.availableColors ? (item.availableColors.map((c,index)=>{
              return (<div
              key={index}
                  className="color ms-2 cur"
                  onClick={()=>clickColor(index,c)}
                  style={{ backgroundColor: c , outline:index === colorIndex ? "3px solid black":"none"}}></div>)
            })) : <h2>لا توجد الوان</h2>
          }
         
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="8">
          <div className="product-description d-inline"> {item.description} </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="d-inline px-3 py-3 border bg-white">{
          item?.priceAfterDiscount >=1 ? (<span><span style={{textDecorationLine:"line-through"}}>{item.price}</span>  {item.priceAfterDiscount}</span>):`${item.price}`
          } جنية</div>
          <Button variant="success" onClick={AddCart} className="px-3 py-2 d-inline mx-3"> اضف للعربه</Button>
        </Col>
      </Row>
      <Modal
        show={loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
    </div>
    )
}

export default ProductText