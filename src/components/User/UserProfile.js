import React from 'react'
import { Row, Col, Modal, Form, Button, Spinner } from 'react-bootstrap'
import UserProfileHook from '../../logic/user/UserProfileHook'
import { ToastContainer } from 'react-toastify'
function UserProfile() {
    const [user,show,setShow,Loading,name,phone,email,setName,setPhone,setEmail,onEdit
      ,currentPassword,password,passwordConfirm,setCurrentPassword,setPassword,
      setPasswordConfirm,onSubmit,Loading2] = UserProfileHook()
  return (
    <div>
    <h3 className="my-2">الصفحه الشخصية</h3>
    
      <div className=" card  my-3 px-2 w-100">
        <Row className="d-flex justify-content-between pt-2">
            <Col xs="6" className="d-flex align-items-center">
                <div className="p-2">الاسم:</div>
                <div className="p-1 item-delete-edit">{user?.name}</div>
            </Col>
            <Col xs="6" className="d-flex justify-content-end">
                <div className="d-flex mx-2">
                    <p className="item-delete-edit cur" onClick={()=>setShow(true)}> تعديل <i className="fa-regular fa-pen-to-square" ></i></p>
                </div>
            </Col>
        </Row>

        <Row className="">
            <Col xs="12" className="d-flex align-items-center">
                <div className="p-2">رقم الهاتف:</div>
                <div className="p-1 item-delete-edit">{user?.phone}</div>
            </Col>
        </Row>
        <Row className="">
            <Col xs="12" className="d-flex align-items-center">
                <div className="p-2">الايميل:</div>
                <div className="p-1 item-delete-edit">{user?.email}</div>
            </Col>
        </Row>
         </div>
    

        <Row className="mt-5">
            <Col xs="10" sm="8" md="6" className="">
                <h4 className="admin-content-text">تغير كملة المرور</h4>
                <input
                    value={currentPassword}
                    onChange={(e)=>setCurrentPassword(e.target.value)}
                    type="password"
                    className="in-con w-100 mt-1 px-3"
                    placeholder="ادخل كلمة المرور القديمة"
                />
                <input
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    type="password"
                    className="in-con w-100 mt-3 px-3"
                    placeholder="ادخل كلمة المرور الجديده"
                />
                <input
                    value={passwordConfirm}
                    onChange={(e)=>setPasswordConfirm(e.target.value)}
                    type="password"
                    className="in-con w-100 mt-3 px-3"
                    placeholder="تأكيد كلمة المرور الجديده"
            />
            </Col>
        </Row>

        <Row>
            <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                <button className="my-btn bg-dark text-white h-100 mt-2" onClick={onSubmit}>حفظ كلمة السر</button>
            </Col>
        </Row>
        <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header>
          <Modal.Title> تعديل البيانات ؟</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='bg-white p-2 rounded justify-content-center'>
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail2">
        <Form.Control type="text" placeholder="الاسم" className='my-2 text-end' value={name} onChange={(e)=>setName(e.target.value)}/>
        <Form.Control type="number" placeholder="رقم الهاتف" className='my-2 text-end'value={phone} onChange={(e)=>setPhone(e.target.value)}/>
        <Form.Control type="email" placeholder="البريد" className='my-2 text-end' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </Form.Group>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            تراجع
          </Button>
          <Button variant="success" onClick={()=>onEdit()}>
            تعديل 
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={Loading}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
      <Modal
        show={Loading2}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body><h1>جاري التحميل...<Spinner animation="grow" /> </h1> </Modal.Body>
      </Modal>
      <ToastContainer/>
</div>
  )
}

export default UserProfile