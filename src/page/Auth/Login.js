import React from 'react'
import { Button, Form, Modal, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../logic/Auth/loginHook'
import { ToastContainer } from 'react-toastify'
function Login() {
  const [email,onChangeEmail,password,onChangePassword,onesubmit,Loading] = LoginHook()
  return (
    <div style={{minHeight:"80vh"}}>
      <Form className='mform'>
        <h2>تسجيل الدخول</h2>
      <Form.Group className="mb-2" >
        <Form.Control type="email" placeholder="البريد الالكتروني " className='mb-2' value={email} onChange={onChangeEmail}/>
        <Form.Control type="password" placeholder="كلمة السر"  className='mb-2' value={password} onChange={onChangePassword}/>
      </Form.Group>
        <Link to='/forget-password' style={{textDecoration:'none'}}>
        <div className='text-danger my-1' style={{cursor:"pointer"}}>هل نسيت كلمة السر ؟</div>
        </Link>
      <Button variant="dark" onClick={onesubmit} className='w-100 mb-3'>
        تسجيل دخول
      </Button>
      <div>ليس لديك حساب ؟ 
        <Link to='/register' style={{textDecoration:'none'}}>
        <span className='text-danger' style={{cursor:"pointer"}}> انشاء حساب جديد </span>
        </Link>
        </div>
    </Form>
    <Link to='/admin/allProducts' style={{textDecoration:'none'}}>
        <span className='text-danger' style={{cursor:"pointer"}}> دخول ادمن</span>
        </Link>
        <Link to='/user/allProducts' style={{textDecoration:'none'}}>
        <span className='text-danger' style={{cursor:"pointer"}}> دخول شخصي</span>
        </Link>
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

export default Login