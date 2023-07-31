import React from 'react'
import HomeSlider from '../../components/Home/Slider'
import { Container } from 'react-bootstrap'
import HomeCategory from '../../components/Home/HomeCategory'
import ProductContainer from '../../components/product/ProductContainer'
import Discount from '../../components/Home/Discount'
import HomeBrand from '../../components/Home/HomeBrand'
 function HomePage() {
  return (
    <>
      <HomeSlider/>
      <Container>
        <HomeCategory/>
        <ProductContainer  path="Search" title='المنتجات' titleButton='المزيد'/>
        <Discount/>
        <ProductContainer  path="Search" title='العروض' titleButton='المزيد'/>
        <HomeBrand/>
      </Container>
    </>
  )
}
export default HomePage