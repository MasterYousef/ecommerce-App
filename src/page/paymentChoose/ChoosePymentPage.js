import React from 'react'
import { Container } from 'react-bootstrap'
import PymentChoose from '../../components/paymentChoose/PymentChoose'

function ChoosePymentPage() {
  return (
    <div style={{minHeight:"90vh"}}>
        <Container>
            <PymentChoose/>
        </Container>
    </div>
  )
}

export default ChoosePymentPage