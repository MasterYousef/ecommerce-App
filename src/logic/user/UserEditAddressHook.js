import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {useNavigate, useParams} from 'react-router-dom'
import { GetAddress, UpdateAddress } from '../../redux/slices/user/Address';

function UserEditAddressHook() {
    const dis = useDispatch()
    const {id} =useParams()
    const res = useSelector((state)=>state.AddressSlice.GetData)
    const [Loading,setLoading] = useState('')
    const [alias,setAlias] = useState('')
    const [details,setDetails] = useState('')
    const [city,setCity] = useState('')
    const [postal,setPostal] = useState('')
    const nav = useNavigate()
    const onSubmit = async()=>{
        if(alias === ''){
            toast.error("من فضلك ادخل تسمية العنوان")
            return;
        }else if(details === ''){
            toast.error("من فضلك ادخل العنوان بالتفصيل")
            return;
        }else if(postal === ''){
            toast.error("من فضلك ادخل رقم هاتف مصري صحيح")
            return;
        }else{
            setLoading(true)
            const obj ={
                id,
                data:{
                    alias,
                    details,
                    city,
                    postalCode:postal
                }
            }
            await dis(UpdateAddress(obj))
            setLoading(false)
        }
    }
    useEffect(() => {
        dis(GetAddress(`/api/v1/user/userAddresses/${id}`))
    }, [])
    
    useEffect(() => {
        if(res?.data?.data){
            setAlias(res?.data?.data?.alias)
            setDetails(res?.data?.data?.details)
            setPostal(res?.data?.data?.postalCode)
            setCity(res?.data?.data?.city)
        }
    }, [res])
    useEffect(() => {
        if (Loading === false) {
            if (res?.data?.status === "success") {
                toast.success("تم تعديل العنوان بنجاح")
                setTimeout(()=>{
                    nav("/user/address")
                },1500)
            }else{
                toast.error("حدث خطاء ما لم يتم تعديل العنوان")
            }
        }
    }, [Loading])
    return [alias,setAlias,details,setDetails,city,setCity,postal,setPostal,onSubmit,Loading]
}

export default UserEditAddressHook