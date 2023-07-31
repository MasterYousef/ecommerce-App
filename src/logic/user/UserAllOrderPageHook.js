import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserOrder } from '../../redux/slices/user/UserOrder'
function UserAllOrderPageHook() {
const dis = useDispatch()
const res = useSelector((state)=>state.UserOrderSlice.GetData?.data)
const Loading = useSelector((state)=>state.UserOrderSlice.Loading)
const setPage = async(page)=>{
    dis(GetUserOrder(page))
}
useEffect(() => {
    dis(GetUserOrder())
}, [])
return[res,Loading,setPage,res?.paginationResult]
}

export default UserAllOrderPageHook