import React from 'react'
import { Link } from 'react-router-dom'

 function Dis({title,titleButton,link}) {
  return (
    <div className='d-flex justify-content-between mb-3'>
        <h2>{title}</h2>
        {
            titleButton ? <Link to={link} className='my-btn py-1 px-3'>{titleButton}</Link> : null
        }
    </div>
  )
}
export default Dis
