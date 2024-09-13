import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetAddress } from '../../redux/slices/user/Address';
function UserAddressHook() {
    const dis = useDispatch()
    const res = useSelector((state)=>state.AddressSlice.GetData)
    const [Loading,setLoading] = useState('')
    const get =async()=>{
        setLoading(true)
        await dis(GetAddress("/api/v1/user/userAddresses"))
        setLoading(false)
    }
    useEffect(() => {
        get()
    },[])
    return [res?.data,Loading]
}

export default UserAddressHook