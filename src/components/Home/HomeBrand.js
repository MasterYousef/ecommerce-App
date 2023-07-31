import React from 'react'
import Dis from '../utilty/Dis'
import {Row, Spinner} from 'react-bootstrap'
import BrandCard from '../brand/BrandCard'
import HomeBrandHook from '../../logic/brand/HomeBrandHook'
 function HomeBrand() {
  const [isLoading,brand] = HomeBrandHook()
  return (
    <div>
        <Dis title='اشهر الاقسام' titleButton='المزيد' link='/Brands'/>
        <Row className='justify-content-evenly'>
      {
        isLoading === false ? (
          brand?.data?.length ? (brand.data.slice(0,5).map((e,index)=>{
            return (<BrandCard key={index} id={e._id} im={e.image}  title={e.name}/>)
          })) : <h2>لا يوجد بيانات</h2>
        ) : <h1>جاري التحميل...<Spinner animation="grow" /></h1>
      }
      </Row>
    </div>
  )
}
export default HomeBrand
