import React from 'react'
import AdminProductCard from './AdminProductCard'
import { Row, Spinner } from 'react-bootstrap'
function AdminAllProduct({items,Loading}) {
  return (
    <Row className='mt-2 flex-row justify-content-evenly'>
        <h2>ادارة المنتجات</h2>
        {
          Loading === false ? (
            items?.length >= 1 ? (items?.map((i,index)=>{
              return (<AdminProductCard key={index} item={i}/>)
            })) : <h3>لا توجد منتجات</h3>
          ) : <h3>جاري التحميل...<Spinner animation="grow" /></h3>
        }
    </Row>
  )
}

export default AdminAllProduct