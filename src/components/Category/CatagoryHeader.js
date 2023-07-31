import React from 'react'
import {Container,Navbar ,Nav} from 'react-bootstrap'
import SubTitleHook from '../../logic/product/SubTitleHook'
function CatagoryHeader() {
  const [cateegorys,brands,opHandllerCate,opHandllerBrands,priceFrom,priceto] = SubTitleHook()
  return (
    <Navbar className=' bg-white' >
        <Container>
          <Nav>
            {
              cateegorys?.length ? (cateegorys.map((e)=><Nav.Link href="">{e.name}</Nav.Link>)) : <h5>لا توجد تصنيفات</h5>
            }
          </Nav>
        </Container>
      </Navbar>
  )
}

export default CatagoryHeader