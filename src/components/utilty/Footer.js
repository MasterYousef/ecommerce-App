import React from 'react'
import {Container} from 'react-bootstrap'
function Footer() {
  return (
    <div className='bg-dark text-light'>
        <Container className='d-flex py-3 align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <span className='mx-2'>الشروط والاحكام</span>
                <span className='mx-2'>سياسة الخصوصية</span>
                <span className='mx-2'>اتصل بنا</span>
            </div>
            <div>
            <i className="fa-brands fa-facebook fa-xl mx-2"></i>
            <i className="fa-brands fa-instagram fa-xl mx-2"></i>
            <i className="fa-brands fa-twitter fa-xl mx-2"></i>
            </div>
        </Container>
    </div>
  )
}

export default Footer