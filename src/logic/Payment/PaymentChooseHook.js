import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAddress } from '../../redux/slices/user/Address';
import { toast } from "react-toastify";
import { GetCart } from '../../redux/slices/cart/Cart';
import { PostOrder ,GetCardOrder} from '../../redux/slices/payment/Order';
import {useNavigate} from 'react-router-dom'
function PaymentChooseHook() {
const navti = useNavigate()
const dis=useDispatch()
const res = useSelector(state=>state.AddressSlice.GetData?.data)
const cart = useSelector(state=>state.CartSlice.GetData?.data)
const order = useSelector(state=>state.OrderSlice.PostData)
const Card = useSelector(state=>state.OrderSlice.CardData?.data)
const [Pay, setPay] = useState("")
const [loading, setLoading] = useState("")
const [loading2, setLoading2] = useState("")
const [option, setOption] = useState("0")
let price;
if(cart?.data?.totalAfterDiscount){
    price = cart?.data?.totalAfterDiscount
}else{
    price = cart?.data?.totalCartPrice
}
const onSubmit =async()=>{
    if(Pay === ""){
        toast.warn("من فضلك اختر طريقة الدفع")
        return;
    }else if(option === "0"){
        toast.warn("من فضلك اختر عنوان")
        return;
    }else if(Pay === "الدفع عند الاستلام"){
        setLoading(true)
        const obj = {
            id:cart?.data?._id,
            data:{
                shippingAddress:res.data[option-1]
            }
        }
        await dis(PostOrder(obj)) 
        setLoading(false)
    }else if(Pay === "الدفع عن طريق الفيزا"){
        setLoading2(true)
        await dis(GetCardOrder(cart?.data?._id))
        setLoading2(false)
    }
}
useEffect(() => {
dis(GetAddress("/api/v1/addresses"))
dis(GetCart())
}, [])
useEffect(() => {
if(loading === false){
    if(order?.status === "error" || order?.status === "fail"){
        toast.error("حدث خطاء ما الرجاء المحاولة مرة اخرى لاحقا")
    }else if(order?.data?.status === "success"){
        toast.success("تم عمل الطلب بنجاح")
        localStorage.removeItem("cart")
        setTimeout(() => {
            navti("/user/allorders")
        }, 2000);
    }
}
}, [loading])
useEffect(() => {
    if(loading2 === false){
        if(Card?.status=== 'success'){
            if(Card?.session?.url){
                window.open(Card?.session?.url)
            }
        }else{
            toast.error("حدث خطاء ما الرجاء المحاولة لاحقا")
        }
        }
    }, [loading2])
    console.log(Card);
return [price,res,setPay,option,setOption,onSubmit,loading,loading2]
}

export default PaymentChooseHook