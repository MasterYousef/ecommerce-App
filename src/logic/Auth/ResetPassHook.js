import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResetCode } from '../../redux/slices/Auth'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
function ResetPassHook() {
    const res = useSelector(state=>state.Authentication.updateData)
    const Loading = useSelector(state=>state.Authentication.Loading)
    const [newPassword,setNewPassword] = useState('')
    const [conPassword,setConpassword] = useState()
    const dis = useDispatch()
    const navti = useNavigate()
    const onChangePassword =(e)=>{
        setNewPassword(e.target.value)
    }
    const onChangeConPassword =(e)=>{
        setConpassword(e.target.value)
    }
    const onesubmit = async()=>{
        if(newPassword === ''){
            toast.error('من فضلك ادخل كلمة سر جديدة')
            return
        }else if(newPassword !== conPassword){
            toast.error('كلمة السر غير متطابقة')
            return
        }else{
            await dis(ResetCode({
                email:localStorage.getItem('reset-email'),
                newPassword,
                newPasswordConfirm:conPassword
            }))
        }
    }
useEffect(() => {
if(Loading === false){
    if(res === 'fail' || res === 'error'){
        toast.error('حدث خطاء ما الرجاء المحاولة مرة اخرى لاحقا')
    }else if(res?.data){
        toast.success('تم تغيير كلمة السر بنجاح')
        setTimeout(()=>navti('/login'),3000)
    }
}
}, [Loading])
    return [newPassword ,conPassword,onChangePassword,onChangeConPassword,onesubmit,Loading]
}

export default ResetPassHook