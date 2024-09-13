import React from 'react'
import { Row, Col, Button, Modal, Spinner } from 'react-bootstrap'
import CartCheackOutHook from '../../logic/cart/CartCheackOutHook'

function CartCheckout({price,couponName,setCouponName,totalPriceAfterCo,load}){
    const [onDelete,loading,loading2,onCoupon,paymint] =CartCheackOutHook(couponName,price,setCouponName)
    return (
        <Row className="my-2 d-flex justify-content-center bg-white p-2 rounded pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex">
                    <input
                        value={couponName}
                        onChange={(e)=>setCouponName(e.target.value)}
                        className="w-100 d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <Button className="bg-dark border-0 rounded-0" onClick={onCoupon}>تطبيق</Button>
                </div>
                <div className="text-center py-2 w-100 my-3 border">{
                    load === true ? (<h4>...</h4>):(totalPriceAfterCo >= 1 ? (`  قبل الخصم ${price}   بعد الخصم ${totalPriceAfterCo}`) :
                     (price >=1 ? (`${price} جنيه`):(0) ))
                    
                }</div>
                    <button className="bg-dark text-white py-2 border-0 rounded w-100 px-2" onClick={paymint}> اتمام الشراء</button>
                <button className="bg-dark text-white py-2 border-0 rounded w-100 px-2 mt-2" onClick={onDelete}>حذف العربة</button>
            </Col>
            <Modal
                show={loading}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
            <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
            </Modal>
            <Modal
                show={loading2}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
            <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
            </Modal>
        </Row>
    )
}

export default CartCheckout