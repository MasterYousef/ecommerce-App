import { Container, Row, Spinner } from 'react-bootstrap'
import Pagination from '../../components/utilty/Pagination'
import GetFavProductHook from '../../logic/product/GetFavProductHook'
import ProductCard from '../../components/product/ProductCard'
import ProductByBrandHook from '../../logic/product/ProductByBrandHook '
function ProductByBrand() {
  const [res,Loading,setPage,page] = ProductByBrandHook()
  const [favId] = GetFavProductHook()
  return (
    <Container style={{minHeight:"90vh"}}>
        <h1 className='my-4'>المنتجات داخل الماركة</h1>
        <Row className='mb-5 justify-content-start'>
          {
            Loading === true ? (<h3>جاري التحميل...<Spinner animation="grow" /></h3>):
            (res?.data?.length ? (res?.data?.map((e,index)=><ProductCard key={index} item={e} favId={favId}/>)):<h3>لا يوجد منتجات داخل الماركة</h3>)
          }
        </Row>
        {
          res?.paginationResult?.numberOfPages ? (res?.paginationResult?.numberOfPages <=1 ? null
            :(<Pagination numberOfPages={res?.paginationResult?.numberOfPages} SetPage={setPage}page={page}/>)):null
        }
    </Container>
  )
}

export default ProductByBrand