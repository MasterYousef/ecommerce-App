import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { DeleteAddress, GetAddress } from '../../redux/slices/user/Address';
function UserAddressCardHook() {
    const dis = useDispatch()
    const res = useSelector((state)=>state.AddressSlice.DeleteData)
    const [Loading,setLoading] = useState('')
    const [show,setShow] = useState(false)
    const onDelete =(id)=>{
        setLoading(true)
        dis(DeleteAddress(id))
        setLoading(false)
        setShow(false)
    }
    useEffect(() => {
        if (Loading === false){
            if (res?.data?.status === "success"){
                toast.success("تم حذف العنوان بنجاح")
                dis(GetAddress("/api/v1/user/userAddresses"))
            }else if(res?.status === "error" || res?.status === "fail"){
                toast.error("حدث خطاء ما لم يتم حذف العنوان")
            }
        }
        
    }, [res])
    return [Loading,show,setShow,onDelete]
}

export default UserAddressCardHook