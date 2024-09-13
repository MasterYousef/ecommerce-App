import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetCoupons} from '../../redux/slices/Coupons/Coupons'
function AdminShowCouponsHook() {
    const dis = useDispatch()
    const res = useSelector((state)=>state.CouponsSlice.GetRes)
    const [Loading ,setLoading]=useState('')
    const [page,SetPage] = useState('')
    const val =async()=>{
        setLoading(true)
        await dis(GetCoupons(page))
        setLoading(false)
    }
    useEffect(() => {
        val()
    }, [page])
    return [res?.data,SetPage,page,Loading]
}

export default AdminShowCouponsHook