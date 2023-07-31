import React from 'react'
import { Col, Row ,Carousel} from 'react-bootstrap'
import mobile from '../../images/mobile.png'
import ProductText from './ProductText'
function ProductDetails({item}) {
  return (
    <Row className='py-5'>
        <Col lg='4'>
        <Carousel className='bg-white rounded my-dir  car'>
          {
            item.images ? (item?.images?.map((e)=>{
              return (<Carousel.Item>
                <img
                  className="d-block w-100 product-img"
                  src={e}
                  alt="First slide"
                />
                      </Carousel.Item>)
            })) : (<Carousel.Item>
              <img
                className="d-block w-100 product-img"
                src={mobile}
                alt="First slide"
              />
                    </Carousel.Item>)
          }
    </Carousel>
        </Col>
        <Col lg='8'>
          <ProductText/>
        </Col>
    </Row>
  )
}

export default ProductDetails