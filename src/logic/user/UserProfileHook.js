import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UpdatePassword, UpdateProfile } from '../../redux/slices/user/Profile';
import {useNavigate} from 'react-router-dom'
function UserProfileHook() {
    const dis = useDispatch()
    let user,data
    if (localStorage.getItem('user') !== null) {
        user = JSON.parse(localStorage.getItem('user'))
    }else{
        user=[]
    }
    const Navigate = useNavigate()
    const res = useSelector((state)=>state.ProfileSlice.UpdateData)
    const res2 = useSelector((state)=>state.ProfileSlice.UpdatePass)
    const [name,setName] = useState(user?.name)
    const [phone,setPhone] = useState(user?.phone)
    const [email,setEmail] = useState(user?.email)
    const [currentPassword,setCurrentPassword] = useState('')
    const [password,setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')
    const [show,setShow] = useState(false)
    const [done,setDone] = useState(false)
    const [Loading,setLoading] = useState('')
    const [Loading2,setLoading2] = useState('')
    const onSubmit =async()=>{
        if(currentPassword === ''){
            toast.error("من فضلك ادخل كلمة السر القديمة")
            return
        }else if(password === ''){
            toast.error("من فضلك ادخل كلمة السر الجديدة")
            return
        }else if(password !== passwordConfirm){
            toast.error("الرجاء تأكيد كلمة السر بشكل صحيح")
            return
        }else{
            setLoading2(true)
            const passData ={
                currentPassword,password,passwordConfirm
            }
            await dis(UpdatePassword(passData))
            setLoading2(false)
        }
    }
    const onEdit =async()=>{
        if(email === user?.email && name !== user?.name || phone !== user?.phone){
            data ={
                name,
                phone
            }
            setLoading(true)
            await dis(UpdateProfile(data))
            setLoading(false)
            setShow(false)
            setDone(true)
        }else if(name === user?.name && email === user?.email && phone === user?.phone){
            setDone(false)
            toast.warn("من فضلك ادخل بيانات جديدة لتعديلها")
            return;
        }else{
            data={
                name,
                phone,
                email
            }
            setLoading(true)
            await dis(UpdateProfile(data))
            setLoading(false)
            setShow(false)
            setDone(true)
        }
    }
    useEffect(() => {
        if(Loading === false){
            if(res?.status === "error" || res?.status === "fail" ){
                toast.error('حدث خطاء ما لم يتم تعديل البيانات')
            }else if(done===true){
                toast.success('تم تعديل البيانات بنجاح')
                localStorage.setItem('user',JSON.stringify(res?.data?.data?.user))
                setTimeout(() => {
                    window.location.reload()
                }, 3000);
            }
        }
    }, [Loading])
    useEffect(() => {
        if(Loading2 === false){
            if(res2?.errors || res2?.status === "fail" || res2?.status === "error"){
                    toast.error('كلمة السر غير صحيحة')
            }else if(res2?.data?.token){
                toast.success('تم تعديل كلمة السر بنجاح')
                setTimeout(() => {
                    localStorage.removeItem("token")
                    Navigate("/login")
                }, 2000);
            }
        }
    }, [Loading2])
    console.log(res2);
    return [user,show,setShow,Loading,name,phone,email,setName,setPhone,setEmail,onEdit,currentPassword,password,passwordConfirm,setCurrentPassword,setPassword,setPasswordConfirm,onSubmit,Loading2]
}

export default UserProfileHook