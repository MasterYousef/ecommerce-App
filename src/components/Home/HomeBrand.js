import React from 'react'
import Dis from '../utilty/Dis'
import {Row, Spinner} from 'react-bootstrap'
import BrandCard from '../brand/BrandCard'
import HomeBrandHook from '../../logic/brand/HomeBrandHook'
 function HomeBrand() {
  const [isLoading,brand] = HomeBrandHook()
  return (
    <div>
        <Dis title='اشهر الماركات' titleButton='المزيد' link='/Brands'/>
        <Row className='justify-content-evenly align-items-end'>
      {
        isLoading === false ? (
          brand?.data?.length ? (brand.data.map((e,index)=>{
            return (<BrandCard key={index} id={e._id} im={e.image}  title={e.name}/>)
          })) : <h2>لا يوجد اقسام</h2>
        ) : <h1>جاري التحميل...<Spinner animation="grow" /></h1>
      }
      </Row>
    </div>
  )
}
export default HomeBrand
