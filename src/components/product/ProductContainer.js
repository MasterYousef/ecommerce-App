import React from 'react'
import ProductCard from './ProductCard'
import Dis from '../utilty/Dis'
import { Row } from 'react-bootstrap'
import ProductContainerHook from '../../logic/product/ProductContainerHook'
import GetFavProductHook from '../../logic/product/GetFavProductHook'
 function ProductContainer({im,path,titleButton,title}) {
  const [items] = ProductContainerHook()
  const [favId] = GetFavProductHook()
  return (
    <div className='py-3'>
      {
        items.length ? (<Dis title={title} titleButton={titleButton} link={path}/>) : null
      }
      
      <Row>
        
        {
          items ? (items.map((i,index)=>{
              return <ProductCard key={index} item={i} favId={favId}/>
          })) : null
        }
        </Row>
    </div>
  )
}
export default ProductContainer