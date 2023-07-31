import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import BrandCard from '../../components/brand/BrandCard'
import Pagination from '../../components/utilty/Pagination'
import BrandContanirHook from '../../logic/brand/BrandContainerHook'
function BrandContanir() {
  const [isLoading,brand,page,SetPage] = BrandContanirHook()
  return (
    <Container style={{minHeight:"80vh"}}>
        <h1 className='my-4'>الاقسام</h1>
        <Row className='mb-5 justify-content-evenly'>
        {
        isLoading === false ? (
          brand?.data?.length ? (brand.data.map((e,index)=>{
            return (<BrandCard key={index}  im={e.image} title={e.name}/>)
          })) : <h2>لا توجد بيانات</h2>
        ) : <h1>جاري التحميل...<Spinner animation="grow" /> </h1>
      }
        </Row>
        {
          page > 1 ? (<Pagination numberOfPages={page} SetPage={SetPage}/>):null
        }
        
    </Container>
  )
}

export default BrandContanir