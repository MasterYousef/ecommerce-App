import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteFav, PostFav } from '../../redux/slices/Fav'
import {toast} from 'react-toastify'
function ProductCardHook(id,favId) {
    const dis = useDispatch()
    const res = useSelector(state=>state.Favslice.PostData)
    const DelRes = useSelector(state=>state.Favslice.DelData)
    const [loading,setLoading] = useState('')
    const [loading2,setLoading2] = useState('')
    const [heart,setHeart] = useState('')
    let isFav = favId?.some(e=>e===id)
const heartOff = async()=>{
    setLoading(true)
    await dis(PostFav({
        productId:id
    }))
    setLoading(false)
}
const heartOn = async()=>{
    setLoading2(true)
    await dis(DeleteFav(id))
    setLoading2(false)
}
useEffect(() => {
if(favId?.some(e=>e===id) === true){
    setHeart(true)
}else if(favId?.some(e=>e===id) === false){
    setHeart(false)
}
}, [isFav])

useEffect(() => {
    if (loading === false){
        if(res?.data?.status === "success"){
            toast.success('تم اضافة المنتج بنجاح')
        }else{
            toast.error('حدث خطاء ما لم يتم اضافة المنتج')
        }
    }
}, [loading])
useEffect(() => {
    if (loading2 === false){
        if(DelRes?.data?.status === "success") {
            toast.success('تم حذف المنتج بنجاح')
        }else{
            toast.error('حدث خطاء ما لم يتم حذف المنتج')
        }
    }
}, [loading2])

return [heart,heartOff,heartOn]
}

export default ProductCardHook