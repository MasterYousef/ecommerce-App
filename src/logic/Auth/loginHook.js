import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { login } from '../../redux/slices/Auth'
function LoginHook() {
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const res = useSelector(state=>state.Authentication.LoginRes)
    const Loading = useSelector(state=>state.Authentication.Loading)
    let isVald = false
    const dis = useDispatch()
    const onChangeEmail =(e)=>{
        SetEmail(e.target.value)
    }
    const onChangePassword =(e)=>{
        SetPassword(e.target.value)
    }
    const valde =()=>{
        const REmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if(REmail.test(email) !== true){
            toast.error(' من فضلك ادخل بريدالكتروني صحيح')
                return isVald;
        }if(password.length <=0 ){
            toast.error('من فضلك ادخل كلمة السر')
            return isVald;
        }else return isVald = true
    }
    const onesubmit = async()=>{
        valde()
        if(isVald === true){
            await dis(login({
                email,
                password,
            }))
        }else return;
    }
    useEffect(() => {
      if(Loading === false){
        if(res === "Incorrect email or password"){
            localStorage.removeItem('token')
            toast.error('خطاء في كلمة السر او البريد الالكتروني')
        }else if(res?.data){
            toast.success('تم تسجيل الدخول بنجاح')
            if(res?.data?.token){
                localStorage.setItem('token',res?.data?.token)
                setTimeout(() => {
                    window.location.href = '/'
                }, 3000);
            }if(res?.data?.data){
                localStorage.setItem('user',JSON.stringify(res?.data?.data))
            }
            else{
                localStorage.removeItem('token')
            }
        }
      }
    }, [Loading])
    return [email,onChangeEmail,password,onChangePassword,onesubmit,Loading]
}

export default LoginHook