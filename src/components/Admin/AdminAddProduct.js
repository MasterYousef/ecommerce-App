import add from '../../images/add.png'
import { Col, Modal, Row, Spinner } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color'
import { ToastContainer } from "react-toastify";
import AddProductHook from "../../logic/product/AddProductHook";
function AdminAddProduct() {
const  [images , setImages ,name ,setname , disc ,setDisc , salBefore 
    ,setSalBefore , salAfter , setSalAfter ,qty ,setQty ,catId ,SubCategory,
    cate,options ,onSelect,onRemove,BrandId,setBrandId,brand,Colors,DelateColors
    ,ShowColor,handelColor,setShowColor,sendData,loading
] = AddProductHook()
  return (
    <div>
    <Row className="justify-content-start ">
        <h3 className="pb-4"> اضافه منتج جديد</h3>
        <Col sm="8">
            <div className="text-black-50 pb-2"> صور للمنتج</div>
            <MultiImageInput
                images={images}
                setImages={setImages}
                max={5}
                allowCrop={false}
                theme={'light'}
            />
            <input
                type="text"
                className="w-100 in-con d-block mt-3 px-3"
                placeholder="اسم المنتج"
                value={name}
                onChange={(e)=>setname(e.target.value)}
            />
            <textarea
                className="w-100 in-con p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="وصف المنتج"
                value={disc}
                onChange={(e)=>setDisc(e.target.value)}
            />
            <input
                type="number"
                className="w-100 in-con d-block mt-3 px-3"
                placeholder="السعر قبل الخصم"
                value={salBefore}
                onChange={(e)=>setSalBefore(e.target.value)}
            />
            <input
                type="number"
                className="w-100 in-con d-block mt-3 px-3"
                placeholder="سعر المنتج بعد الخصم" 
                value={salAfter}
                onChange={(e)=>setSalAfter(e.target.value)}
            />
             <input
                type="number"
                className="w-100 in-con d-block mt-3 px-3"
                placeholder="الكمية المتاحة "
                value={qty}
                onChange={(e)=>setQty(e.target.value)}
            />
            <select
                name="category"
                id="lang"
                className="w-100 in-con mt-3 px-2 "
                value={catId}
                onChange={(e)=>SubCategory(e.target.value)}>
                <option value="0">اختر التصنيف الرئيسي </option>
                {
                    cate.data ? (cate.data.map((e,index)=>{
                        return (<option key={index} value={e._id}> {e.name}</option>)
                    })):null
                }
            </select>
            <Multiselect
                        className="mt-2 in-con text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
            <select
                name="brand"
                id="brand"
                className="w-100 in-con mt-3 px-2 "
                value={BrandId}
                onChange={(e)=>setBrandId(e.target.value)}>
                <option value="0">اختر الماركه</option>
                {
                    brand.data ? (brand.data.map((e,index)=>{
                        return (<option key={index} value={e._id}> {e.name}</option>)
                    })):null
                }
            </select>
            <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
            <div className="mt-1 d-flex">
                {
                    Colors.length >=1 ? (Colors.slice(0,5).map((e,index)=>{
                        return (<div key={index}
                             className="color ms-2 border  mt-1" 
                             style={{ backgroundColor: e ,cursor:'pointer'}} 
                             onClick={()=>DelateColors(e)}></div>)
                    })):null 
                }
                
                <img src={add} alt="" width="30px" height="35px" className="mx-1" onClick={()=>setShowColor(!ShowColor)} style={{cursor:'pointer'}} />
                {
                    ShowColor === true ? <CompactPicker onChangeComplete={handelColor} /> : null
                }
                
            </div>
        </Col>
    </Row>
    <Row className='mb-5'>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={()=>sendData()} className="my-btn bg-dark text-white h-100  mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
    <Modal
        show={loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
    <ToastContainer />
</div>
  )
}

export default AdminAddProduct