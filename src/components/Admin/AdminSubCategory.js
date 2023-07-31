import { Col, Modal, Row, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import AdminSubCategoryHook from '../../logic/category/AdminSubCategoryHook';
function AdminSubCategory() {
const [cate,Loading,name,id,AddName,AddId,SentData] = AdminSubCategoryHook()
  return (
    <div>
    <Row className="justify-content-start mb-5">
        <h3 className="pb-4">اضافه تصنيف فرعي جديد</h3>
        <Col sm="8">
            <input
                type="text"
                className="w-100 in-con h-50 my-3 px-3"
                placeholder="اسم التصنيف الفرعي"
                onChange={(e)=>AddName(e.target.value)}
                value={name}
            />
            <select name="languages" id="lang" className="w-100 h-50 in-con" onChange={(e)=>AddId(e.target.value)} value={id}>
                <option value="0">اختر التصنيف الرئيسي</option>
                {
                    cate?.data?.length ? (cate.data.map((e,index)=>{
                        return (<option key={index} value={e._id}>{e.name}</option>)
                    })):null
                }
            </select>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="my-btn bg-dark text-white h-100 d-inline mt-2 " onClick={()=>SentData()}>حفظ التعديلات</button>
        </Col>
    </Row>
    <Modal
        show={Loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
    <ToastContainer/>
</div>
  )
}

export default AdminSubCategory