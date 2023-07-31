import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

 function CategoryCard ({title,im,background,id}){
  return (
    <Col xs='6' sm='6' md='4' lg='2' className='text-center'>
      <Link style={{textDecoration:'none',color:"black"}} to={`/Category/${id}`}>
        <div className='mb-2 rounded-circle py-4 px-1' style={{backgroundColor:`${background}`}}>
            <img src={im} alt='cat' className='cat-img'/>
        </div>
        <h4>{title}</h4>
        </Link>
    </Col>
  )
}
export default CategoryCard
