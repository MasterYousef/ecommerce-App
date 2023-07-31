import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoute({Auth,children}) {
if(Auth === false){
    return <Navigate to="/login" replace/>
}else if(Auth === true){
    return children ? children : <Outlet/>
}
}

export default ProtectRoute