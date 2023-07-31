import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import UserAddressCard from './UserAddressCard'
import { Link } from 'react-router-dom'
import UserAddressHook from '../../logic/user/UserAddressHook'

function UserAddress() {
  const [items,Loading] = UserAddressHook()
  return (
    <Row>
      <h3 className="pb-2 my-2">العناوين</h3>
      {
        Loading === true ? (<h3>جاري التحميل...<Spinner animation="grow" /> </h3> ) : (
          items?.data?.length ? (items?.data?.map((e,index)=><UserAddressCard key={index} item={e}/>)):<h3>لا يوجد عناوين</h3>
        )
      }
        <Link to='/user/add-address' style={{ textDecoration: "none",color:'black' }}>
        <Row className='justify-content-center'>
            <button className='my-btn w-25 h-100 bg-dark text-white my-2'>اضافة عنوان جديد</button>
        </Row>
        </Link>
    </Row>
  )
}

export default UserAddress