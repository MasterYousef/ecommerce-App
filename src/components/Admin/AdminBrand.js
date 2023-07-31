import React from 'react'
import { Row,Col, Modal, Spinner } from 'react-bootstrap'
import AdminAddBrandHook from '../../logic/brand/AdminAddBrandHook'
import { ToastContainer } from 'react-toastify'
function AdminBrand(){
const [img,name,imgChange,NameChange,Loading,SendData] = AdminAddBrandHook()
      return (
        <div>
        <Row className="justify-content-start ">
            <h3 className=" pb-4">اضف ماركة جديدة</h3>
            <Col sm="8">
                <div className="text-black-50 pb-2">صوره الماركة</div>
                <div>
                <label  for='upload-img' style={{cursor:"pointer"}}><img src={img} alt="add-cat" height="100px" width="120px"/></label>
                <input type='file' id='upload-img' onChange={imgChange}/>
                <input
                    type="text"
                    className="w-100 in-con border-1 mt-3 px-3"
                    placeholder="اسم الماركة"
                    value={name}
                    onChange={(e)=>NameChange(e.target.value)}
                />
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button onClick={SendData} className="my-btn h-100 bg-dark text-white mt-2 ">حفظ التعديلات</button>
            </Col>
        </Row>
        <Modal
            show={Loading}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
          </Modal>
          <ToastContainer />
    </div>
      )
}
export default AdminBrand