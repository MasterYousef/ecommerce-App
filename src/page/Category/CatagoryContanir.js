import CategoryCard from '../../components/Category/CategoryCard'
import { Container, Row, Spinner } from 'react-bootstrap'
import Pagination from '../../components/utilty/Pagination'
import CatagoryContanirHook from '../../logic/category/CatagoryContanirHook'
function CatagoryContanir() {
const [isLoading,cate,colors,page,SetPage] = CatagoryContanirHook()
  return (
    <Container style={{minHeight:"90vh"}}>
        <h1 className='my-4'>التصنيفات</h1>
        <Row className='mb-5 justify-content-evenly'>
        {
        isLoading === false ? (
          cate.data.length ? (cate.data.map((e,index)=>{
            return (<CategoryCard key={index} title={e.name} im={e.image} id={e._id} background={colors[Math.floor(Math.random() * 5 +1)]}/>)
          })) : null
        ) : <h1>جاري التحميل...<Spinner animation="grow" /> </h1>
      }
        </Row>
        {
          page > 1 ? (<Pagination numberOfPages={page} SetPage={SetPage}page={page}/>):null
        }
        
    </Container>
  )
}

export default CatagoryContanir