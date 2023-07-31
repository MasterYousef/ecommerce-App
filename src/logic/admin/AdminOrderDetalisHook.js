import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetAdminOrder, UpdateAdminOrder } from '../../redux/slices/payment/Order'
import { toast } from "react-toastify";
function AdminOrderDetalisHook() {
const {id} =useParams()
const dis = useDispatch()
const res = useSelector(state=>state.OrderSlice.GetData?.data)
const Loading = useSelector(state=>state.OrderSlice.Loading)
const EditRes = useSelector(state=>state.OrderSlice.EditData?.data)
const [load, setLoad] = useState("")
const onPay=async()=>{
        setLoad(true)
        await dis(UpdateAdminOrder(`/api/v1/orders/${id}/pay`))
        setLoad(false)
}
const onDiv=async()=>{
    setLoad(true)
    await dis(UpdateAdminOrder(`/api/v1/orders/${id}/deliver`))
    setLoad(false)
}
useEffect(() => {
dis(GetAdminOrder(id))
}, [])
useEffect(() => {
    if(load === false){
        if(EditRes?.status==="Success"){
            toast.success("تم تعديل الطلب بنجاح")
            setTimeout(() => {
                window.location.reload()
            }, 1500);
        }else{
            toast.error("حدث خطاء ما لم يتم تحديث الطلب")
        }
    }
}, [load])
return [res,Loading,onPay,load,onDiv]
}
export default AdminOrderDetalisHook