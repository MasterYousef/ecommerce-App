import React from 'react'
import CatagoryHeader from '../Category/CatagoryHeader'
import Details from '../utilty/Details'
import { Col, Container, Row } from 'react-bootstrap'
import Subtitle from '../utilty/Subtitle'
import Pagination from '../utilty/Pagination'
import SearchProductHook from '../../logic/product/SearchProductHook'
import ProductCard from './ProductCard'
import GetFavProductHook from '../../logic/product/GetFavProductHook'
const SearchProduct = () => {
  const [items,,,num,PaginationNum,SetPage,page,Sorting] = SearchProductHook()
  const [favId] = GetFavProductHook()
  return (
    <div style={{minHeight:"90vh"}} className=' pb-5 overflow-hidden'>
        <CatagoryHeader/>
        <Container>
        <Details title={num} Sorting={Sorting}/>
        <Row className=''>
            <Col sm='3' xs='4' md='2'>
                <Subtitle/>
            </Col>
            <Col sm='9' xs='8' md='10'>
              <Row>
              {
          items?.length > 0 ? (items.map((i,index)=>{
              return <ProductCard key={index} item={i} favId={favId}/>
          })) : <h2>لا يوجد منتجات</h2>
            }
              </Row>
            </Col>
        </Row>
        <Pagination numberOfPages={PaginationNum} SetPage={SetPage}page={page}/>
        </Container>
    </div>
  )
}

export default SearchProduct