import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import { DeleteOneCart, UpdateCart } from '../../redux/slices/cart/Cart';
function CartItemHook(item) {
const dis =useDispatch()
const resEdit = useSelector(state=>state.CartSlice.UpdateData)
const [count, setCount] = useState(item?.count)
const [Loading, setLoading] = useState(false)
const DeleteRes = useSelector(state=>state.CartSlice.DeleteOneData)
const [loading2, setLoading2] = useState("")
const onDeleteItem = async()=>{
    setLoading2(true)
    await dis(DeleteOneCart(item?._id))
    setLoading2(false)
}
const onEdit=async()=>{
    if(count === item?.count){
        toast.warn("من فضلك غير الكمية ")
        return
    }else{
        setLoading(true)
        const obj ={
            id:item?._id,
            count:{count}
        }
        await dis(UpdateCart(obj))
        setLoading(false)
    }
}
useEffect(() => {
if(Loading === false){
    if(resEdit?.status === "error" || resEdit?.status === "fail"){
        toast.error("حدث خطاء ما لم يتم تعديل الكمية")
    }else if(resEdit?.data?.status === "success"){
        toast.success("تم تعديل الكمية بنجاح")
        setTimeout(() => {
            window.location.reload(false)
        }, 2000);
    }
}
}, [Loading])
useEffect(() => {
    if(loading2 === false){
        if(DeleteRes?.data?.status === "success"){
            toast.success("تم حذف المنتج بنجاح")
            localStorage.setItem('cart',DeleteRes?.data?.numOfCartItems)
            setTimeout(() => {
                window.location.reload()
            }, 1500);
        }else{
            toast.error("لم يتم حذف المنتج من العربة")
        }
    }
    }, [loading2])
return [count,setCount,Loading,onEdit,loading2,onDeleteItem]
}

export default CartItemHook