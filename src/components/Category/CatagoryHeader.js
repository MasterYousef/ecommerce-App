import React from 'react'
import {Container,Navbar ,Nav} from 'react-bootstrap'
import SubTitleHook from '../../logic/product/SubTitleHook'
function CatagoryHeader() {
  const [cateegorys,,,,,] = SubTitleHook()
  return (
    <Navbar className=' bg-white' >
        <Container>
          <Nav>
            {
              cateegorys?.length ? (cateegorys.map((e)=><Nav.Link href={`/Category/${e._id}`}>{e.name}</Nav.Link>)) : <h5>لا توجد تصنيفات</h5>
            }
          </Nav>
        </Container>
      </Navbar>
  )
}

export default CatagoryHeader