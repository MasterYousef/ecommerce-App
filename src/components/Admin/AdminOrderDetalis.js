import React from 'react'
import { Row,Col, Spinner, Modal } from 'react-bootstrap'
import AdminOrderDetalisHook from '../../logic/admin/AdminOrderDetalisHook'
import UserAllOrderCard from "../User/UserAllOrderCard"
import { ToastContainer } from 'react-toastify'
const AdminOrderDetalis = () => {
const [item,Loading,onPay,load,onDiv] = AdminOrderDetalisHook()
console.log(item);
    return (
        <Row className='mt-2 flex-row'>
            {
                Loading === true ? (<h3>جاري التحميل...<Spinner animation="grow" /> </h3>):(
                    <Row>
            <h3>تفاصيل الطلب رقم#{item?.data?.id}</h3>
            <Row className="justify-content-center mt-4 bg-white p-3 rounded w-100 mx-0">
            {
                        item?.data?.cartItems ? (item?.data?.cartItems?.map((i,index)=><UserAllOrderCard key={index} item={i}/>)) : null
                    }
                <Col xs="12" className=" d-flex">
                    <div className="fw-bold py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item?.data?.user?.name}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item?.data?.user?.phone}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {item?.data?.user?.email}
                    </div>
                </Col>
                <div className=" d-inline px-4 border text-center py-2">
                    المجموع {item?.data?.totalOrderPrice} جنيه
                </div>
                <div className='d-flex justify-content-between flex-row'>
            <div>الحالة :<span className='text-black-50 mx-2'>{item?.data?.isDelivered === true & item?.data?.isDelivered === true ? ("تم الانتهاء "):("قيد التنفيذ")}</span></div>
            <div>التوصيل :<span className='text-black-50 mx-2'>{item?.data?.isDelivered === true ? ("تم "):("لم يتم")}</span></div>
            <div>الدفع :<span className='text-black-50 mx-2'>{item?.data?.isPaid === true ? ("تم "):("لم يتم")}</span></div>
        </div>
                <div className="d-flex mt-2 justify-content-center w-25">
                    <button className="my-btn bg-dark text-white h-100 px-3 w-100 mx-2 " onClick={onPay}>تم دفع المنتج </button>
                </div>
                <div className="d-flex mt-2 justify-content-center w-25">
                    <button className="my-btn bg-dark text-white h-100 px-3 w-100 mx-2" onClick={onDiv}>تم توصيل المنتج </button>
                </div>
            </Row>
                    </Row>
                )
            }
        <Modal
        show={load}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
            <ToastContainer/>
        </Row>
    )
}

export default AdminOrderDetalis