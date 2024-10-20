import React from 'react'
import { Link } from 'react-router-dom'

function UserSideBar() {
  return (
    <div className="bg-white my-3 rounded ha w-100">
    <div className="d-flex flex-column">
        <Link to="/user/allorders" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text py-2 border-bottom p-2 mx-auto text-center">
                اداره الطلبات
            </div>
        </Link>
        <Link to="/user/fav" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text py-2 border-bottom p-2 mx-auto text-center">
                المنتجات المفضلة
            </div>
        </Link>
        <Link to="/user/address" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text py-2 border-bottom p-2 mx-auto text-center">
                العناوين الشخصية
            </div>
        </Link>

        <Link to="/user/profile" style={{ textDecoration: 'none' }}>
            <div className="admin-side-text py-2 border-bottom p-2 mx-auto text-center">
                الملف الشخصي
            </div>
        </Link>
    </div>
</div>
  )
}

export default UserSideBar