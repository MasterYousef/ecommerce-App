import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { GetAddress } from '../../redux/slices/user/Address';
function UserAddressHook() {
    const dis = useDispatch()
    const res = useSelector((state)=>state.AddressSlice.GetData)
    const [Loading,setLoading] = useState('')
    const get =async()=>{
        setLoading(true)
        await dis(GetAddress("/api/v1/addresses"))
        setLoading(false)
    }
    useEffect(() => {
        get()
    }, [res])
    return [res?.data,Loading]
}

export default UserAddressHook