import React from 'react'
import Dis from '../utilty/Dis'
import { Row, Spinner } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import HomeCategoryHook from '../../logic/category/HomeCategoryHook'
 function HomeCategory() {
const [isLoading,cate,colors] = HomeCategoryHook()
  return (
    <>
    <Dis title="التصنيفات" titleButton='المزيد' link='/Categorys'/>
    <Row className='justify-content-evenly'>
      {
        isLoading === false ? (
          cate?.data?.length ? (cate.data.slice(0,5).map((e,index)=>{
            return (<CategoryCard key={index} title={e.name} im={e.image} id={e._id} background={colors[index]}/>)
          })) : <h2>لا توجد اقسام</h2>
        ) : <h1>جاري التحميل...<Spinner animation="grow" /></h1>
      }
    </Row>
    </>
  )
}
export default HomeCategory