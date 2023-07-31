import{ useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
import { SighnUp } from '../../redux/slices/Auth';
import {useNavigate} from 'react-router-dom'
function RegisterHook() {
    const [name,SetName] = useState('')
    const [email,SetEmail] = useState('')
    const [password,SetPassword] = useState('')
    const [passwordConfirm,SetPasswordConfirm] = useState()
    const [phone,SetPhone] = useState('')
    const res = useSelector(state=>state.Authentication.SighnUpRes)
    const Loading = useSelector(state=>state.Authentication.Loading)
    const navti = useNavigate()
    let isVald = false
    const dis = useDispatch()
    const onChangeName =(e)=>{
        SetName(e.target.value)
    }
    const onChangeEmail =(e)=>{
        SetEmail(e.target.value)
    }
    const onChangePassword =(e)=>{
        SetPassword(e.target.value)
    }
    const onChangePasswordConfirm =(e)=>{
        SetPasswordConfirm(e.target.value)
    }
    const onChangePhone =(e)=>{
        SetPhone(e.target.value)
    }
    const valde =()=>{
        const REmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if(name === ''){
            toast.error('من افصلك ادخل الاسم')
                return isVald = false
        }if(passwordConfirm !== password){
            toast.error('كلمة السر غير مطابقة ')
            return isVald = false
        }if(phone?.length <= 10 || phone?.length === ''){
            toast.error('من فضلك ادخل رقم هاتف صحيح')
            return isVald = false
        }if(REmail.test(email) !== true){
            toast.error(' من فضلك ادخل بريدالكتروني صحيح')
                return;
        }else return isVald = true
    }
    const onesubmit = async()=>{
        valde()
        if(isVald === true){
            await dis(SighnUp({
                name,
                email,
                password,
                passwordConfirm,
                phone
            }))
        }else return;
    }
    useEffect(() => {
      if(Loading === false){
        if(res === "must be at least 3 chars"){
            toast.error('يجب ان يكون الاسم اكثر من ثلاث احرف')
        }else if(res === "E-mail already in use"){
            toast.error("البريد الالكتروني مستخدم بالفعل")
        }else if(res === "accept only egypt phone numbers"){
            toast.error("يجب ان يكون رقم الهاتف مصري ")
        }else if(res?.data){
            toast.success('تم انشاء حساب بنجاح')
            setTimeout(() => {
                navti('/login')
            }, 3000);
        }
      }
    }, [Loading])
return [name,email,password,passwordConfirm,phone,onChangeName,onChangeEmail,onChangePassword,onChangePasswordConfirm,onChangePhone,onesubmit,Loading]
}

export default RegisterHook