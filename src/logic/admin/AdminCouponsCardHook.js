import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteCoupons, EditCoupons, GetCoupons } from '../../redux/slices/Coupons/Coupons'
import { toast } from "react-toastify";
function AdminCouponsCardHook(item) {
    const dis = useDispatch()
    const res = useSelector((state)=>state.CouponsSlice.DeleteCop)
    const Editerr = useSelector((state)=>state.CouponsSlice.error)
    const [Loading ,setLoading]=useState('')
    const [Loading2 ,setLoading2]=useState('')
    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const [name,setName] = useState(item?.name)
    const [expire,setExpire] = useState(item?.expire)
    const [discount,setDiscount] = useState(item?.discount)
    const onSubmit = async(id)=>{
        if(name === '' || expire === '' || discount <= 0 || discount === ''){
            toast.error('من فضلك ادخل بيانات الكوبون بالكامل')
            return
        }else{
            setLoading2(true)
            const obj ={
                id,
                data:{
                    name,
                    expire:expire.replace('T00:00:00.000Z',""),
                    discount
                }
            }
           await dis(EditCoupons(obj))
           setLoading2(false)
           setShow2(false)
        }
    }
    const onDelete =async(id)=>{
        setLoading(true)
        await dis(DeleteCoupons(id))
        setLoading(false)
        setShow(false)
    }
    useEffect(() => {
        setName(item.name)
        setDiscount(item.discount)
    }, [])
    
    useEffect(() => {
        if (Loading === false) {
            if(res?.status === 'error' || res?.status === 'fail'){
                toast.error('حدث خطاء اثناء حذف المنتج حاول مرة اخرى لاحقا')
            }else if(res?.status === 204){
                toast.success('تم حذف المنتج بنجاح')
                dis(GetCoupons())
            }
        }
    }, [Loading])
    useEffect(() => {
        if (Loading2 === false) {
            if(Editerr === true){
                toast.error('حدث خطاء اثناء تعديل المنتج حاول مرة اخرى لاحقا')
                setName(item?.name)
                setExpire(item?.expire)
                setDiscount(item?.discount)
            }else if(Editerr === false){
                toast.success('تم تعديل المنتج بنجاح')
                dis(GetCoupons())
            }
        }
    }, [Loading2])
    
    return [Loading,show,setShow,onDelete,show2,setShow2,Loading2,name,setName,expire,setExpire,discount,setDiscount,onSubmit]
}

export default AdminCouponsCardHook