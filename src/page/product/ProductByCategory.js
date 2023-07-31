import { Container, Row, Spinner } from 'react-bootstrap'
import Pagination from '../../components/utilty/Pagination'
import ProductByCategoryHook from '../../logic/product/ProductByCategoryHook'
import GetFavProductHook from '../../logic/product/GetFavProductHook'
import ProductCard from '../../components/product/ProductCard'
function ProductByCategory() {
  const [res,Loading,setPage] = ProductByCategoryHook()
  const [favId] = GetFavProductHook()
  return (
    <Container style={{minHeight:"90vh"}}>
        <h1 className='my-4'>المنتجات داخل التصنيف</h1>
        <Row className='mb-5 justify-content-start'>
          {
            Loading === true ? (<h3>جاري التحميل...<Spinner animation="grow" /></h3>):
            (res?.data?.length ? (res?.data?.map((e,index)=><ProductCard key={index} item={e} favId={favId}/>)):<h3>لا يوجد منتجات داخل التصنيف</h3>)
          }
        </Row>
        {
          res?.paginationResult?.numberOfPages ? (res?.paginationResult?.numberOfPages <=1 ? null
            :(<Pagination numberOfPages={res?.paginationResult?.numberOfPages} SetPage={setPage}/>)):null
        }
    </Container>
  )
}

export default ProductByCategory