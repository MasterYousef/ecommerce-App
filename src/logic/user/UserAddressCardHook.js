import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DeleteAddress } from '../../redux/slices/user/Address';
function UserAddressCardHook() {
    const dis = useDispatch()
    const res = useSelector((state)=>state.AddressSlice.DeleteData)
    const [Loading,setLoading] = useState('')
    const [show,setShow] = useState(false)
    const onDelete =async(id)=>{
        setLoading(true)
        await dis(DeleteAddress(id))
        setLoading(false)
        setShow(false)
    }
    useEffect(() => {
        if (Loading === false){
            if (res?.data?.message === "Address removed successfully"){
                toast.success("تم حذف المنتج بنجاح")
                console.log(res);
            }else if(res?.status === "error" || res?.status === "fail"){
                toast.error("حدث خطاء ما لم يتم حذف المنتج")
            }
        }
        
    }, [Loading])
    return [Loading,show,setShow,onDelete]
}

export default UserAddressCardHook