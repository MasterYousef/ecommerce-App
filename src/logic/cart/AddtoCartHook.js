import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { PostCart } from '../../redux/slices/cart/Cart';
function AddtoCartHook(colors,id){
const dis=useDispatch()
const res = useSelector(state=>state.CartSlice.PostData)
const [loading, setLoading] = useState("")
const [color, setColor] = useState("")
const [colorIndex, setColorIndex] = useState("")
const clickColor=(index,color)=>{
    setColorIndex(index)
    setColor(color)
}
const AddCart=async()=>{
    if(localStorage.getItem('token') === null){
        toast.warn("من فضلك سجل الدخول اولا")
        return
    }else if(colors >= 1 || localStorage.getItem('token') !== null){
        if (color === "") {
            toast.warn("من فضلك قم بأختيار لون المنتج الذي تريده")
            return
        }else{
            setLoading(true)
            await dis(PostCart({
                productId:id,
                color
            }))
            setLoading(false)
        }
    }
}
useEffect(() => {
if(loading === false){
    if(res?.data?.message === "Product added successfully to your cart"){
        toast.success("تم اضافة المنتج الي العربة")
        localStorage.setItem("cart",res?.data?.numOfCartItems)
        setTimeout(() => {
            window.location.reload()
        }, 1500);
        
    }else{
        toast.error("حدث خطاء ما لم يتم اضافة المنتج")
    }
}
}, [loading])

return [clickColor,colorIndex,loading,AddCart]
}
export default AddtoCartHook