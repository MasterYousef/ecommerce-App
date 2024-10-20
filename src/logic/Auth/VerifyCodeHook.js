import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SendCode } from '../../redux/slices/Auth'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
function VerifyCodeHook() {
    const res = useSelector(state=>state.Authentication.verifyData)
    const Loading = useSelector(state=>state.Authentication.Loading)
    const [code,setCode] = useState('')
    const dis = useDispatch()
    const navti = useNavigate()
    const onChangeCode =(e)=>{
        setCode(e.target.value)
    }
    const onesubmit = async()=>{
        if(code === ''){
            toast.error('من فضلك ادخل بريد الكتروني')
        }else{
            await dis(SendCode({
                resetCode:code
            }))
        }
    }
useEffect(() => {
if(Loading === false){
    if(res === 'fail' || res === 'error'){
        toast.error('الرمز الذي ادخلته غير صحيح او انتهت صلاحيته')
    }else if(res.data?.status === 'success'){
        toast.success('تمت العملية بنجاح')
        setTimeout(()=>navti('/reset-password'),3000)
    }
}
}, [Loading])
    return [code,onChangeCode,onesubmit,Loading]
}

export default VerifyCodeHook