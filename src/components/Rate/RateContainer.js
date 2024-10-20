import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../images/rate.png'
import RateItem from './RateItem'
import Pagination from '../utilty/Pagination'
import RatePost from './RatePost'
import RateContainerHook from '../../logic/product/RateContainerHook'
function RateContainer({item}) {
  const [res,setPage,page,user] = RateContainerHook()
  return (
    <Container className='bg-white rounded overflow-hidden'>
        <Row>
            <Col className="d-flex">
                <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="text-warning  d-inline  p-1 pt-2">{item?.ratingsAverage}</div>
                    <div className="text-black-50 d-inline p-1 pt-2">({`${item?.ratingsQuantity} تقييم`})
                </div>
            </Col>
        </Row>
        {
          user !== null ? (user?.role === "user" ? <RatePost/> : <h3 className='border-bottom pb-3 me-2 px-4'>غير مسموح للمشرفين بالتعليق</h3>) : (<h3 className='border-bottom pb-3 me-2 px-4'>سجل دخولك لاضافة تقييم للمنتج</h3>)
        }
        {
          res?.data ? (res.data.map((e)=>
          e?.user?._id === user?._id ? (<RateItem rev={e} user={true}/>)
          :(<RateItem rev={e} user={false}/>))) : (<h4 className='mt-4'>لا يوجد تعليقات</h4>)
        }
        {
          res?.paginationResult ? (res.paginationResult.numberOfPages <= 1 ? null : (
          <Pagination SetPage={setPage} numberOfPages={res.paginationResult.numberOfPages}page={page}/>)) : null
        }
        
    </Container>
  )
}
export default RateContainer