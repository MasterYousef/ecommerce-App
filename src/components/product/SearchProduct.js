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
  const [items,,,num,PaginationNum,SetPage,Sorting] = SearchProductHook()
  const [favId] = GetFavProductHook()
  return (
    <div style={{minHeight:"80vh"}} className=' pb-5'>
        <CatagoryHeader/>
        <Container>
        <Details title={num} Sorting={Sorting}/>
        <Row className=''>
            <Col sm='3' xs='3' md='2'>
                <Subtitle/>
            </Col>
            <Col sm='9' xs='9' md='10'>
              <Row>
              {
          items ? (items.map((i,index)=>{
              return <ProductCard key={index} item={i} favId={favId}/>
          })) : null
            }
              </Row>
            </Col>
        </Row>
        <Pagination numberOfPages={PaginationNum} SetPage={SetPage}/>
        </Container>
    </div>
  )
}

export default SearchProduct