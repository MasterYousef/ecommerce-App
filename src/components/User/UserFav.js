import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import ProductCard from '../product/ProductCard'
import im from '../../images/prod1.png'
import UserFavHook from '../../logic/product/UserFavHook'
import GetFavProductHook from '../../logic/product/GetFavProductHook'
function UserFav() {
  const [favArray,Loading] = UserFavHook()
  const [favId] = GetFavProductHook()
  return (
    <Row>
        <h3 className="pb-2 my-2">المنتجات المفضلة</h3>
        {
        Loading === false ? (
          favArray.length >=1 ? (favArray?.map((e,index)=> <ProductCard item={e} favId={favId}/>)) : <h2>لا توجد منتجات مفضلة</h2>
        ) : <h1>جاري التحميل...<Spinner animation="grow" /></h1>
      }
    </Row>
  )
}

export default UserFav