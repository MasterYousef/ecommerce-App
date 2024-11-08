import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GetCoupons, PostCoupons, resetAll } from '../../redux/slices/Coupons/Coupons';
function AdminAddCouponsHook() {
    const dis = useDispatch()
    const res = useSelector((state)=>state.CouponsSlice.error)
    const Loading = useSelector((state)=>state.CouponsSlice.Loading)
    const [name,setName] = useState('')
    const [expire,setExpire] = useState('')
    const [discount,setDiscount] = useState('')
    const onSubmit = async()=>{
        if(name === '' || expire === '' || discount <= 0 || discount === ''){
            toast.error('من فضلك ادخل بيانات الكوبون بالكامل')
            return
        }else{
            await dis(PostCoupons({
                name,
                expire,
                discount
            }))
        }
    }
    useEffect(() => {
        if (Loading === false){
            if (res === false) {
                toast.success('تم اضافة الكوبون بنجاح')
                setName('')
                setExpire('')
                setDiscount('')
                dis(resetAll())
                dis(GetCoupons())
            }else if (res === true){
                toast.error('خطاء تأكد من بيانات الكوبون ')
                dis(resetAll())
            }
        }
    }, [Loading,res])
    
    return [name,expire,discount,setName,setExpire,setDiscount,onSubmit,Loading]
}

export default AdminAddCouponsHook