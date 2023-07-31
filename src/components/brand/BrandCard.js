import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BrandCard({im,title,id}) {
  return (
    <Col xs='6' sm='6' md='4' lg='2' className='text-center'>
    <Link style={{textDecoration:'none',color:"black"}} to={`/brand/${id}`}>
    <div className='mb-2 p-3 px-1 h-100'>
        <img src={im} alt='cat' className='img-fluid h-75 w-100'/>
        <h3>{title}</h3>
    </div>
    </Link>
    </Col>
  )
}
