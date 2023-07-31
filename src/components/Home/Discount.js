import React from 'react'
import labtops from "../../images/laptops.png"
 function Discount() {
  return (
    <div className='d-flex bg-dark text-light w-100 rounded flex-row-reverse my-3 align-items-center justify-content-between' style={{height:"150px"}}> 
        <img src={labtops} alt='' className='w-50 h-100'/>
        <p className='me-5 fs-3'>خصم يصل حتى 50% على اجهزة الاب توب</p>
    </div>
  )
}
export default Discount
