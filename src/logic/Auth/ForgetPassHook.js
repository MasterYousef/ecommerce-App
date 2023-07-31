import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SendEmail } from '../../redux/slices/Auth'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
function ForgetPassHook() {
    const res = useSelector(state=>state.Authentication.emailData)
    const Loading = useSelector(state=>state.Authentication.Loading)
    const [email,SetEmail] = useState('')
    const dis = useDispatch()
    const navti = useNavigate()
    const onChangeEmail =(e)=>{
        SetEmail(e.target.value)
    }
    const onesubmit = async()=>{
        if(email === ''){
            toast.error('من فضلك ادخل بريد الكتروني')
        }else{
            await dis(SendEmail({
                email
            }))
        }
    }
useEffect(() => {
if(Loading === false){
    if(res === 'fail' || res === 'error'){
        toast.error('من فضلك اعد كتابة بريد الكتروني صحيح')
    }else if(res.data?.status === 'Success'){
        toast.success('تم ارسال الرمز بنجاح')
        localStorage.setItem('reset-email',email)
        setTimeout(()=>navti('/verify-code'),3000)
    }
}
}, [Loading])
    return [email,onChangeEmail,onesubmit,Loading]
}
export default ForgetPassHook