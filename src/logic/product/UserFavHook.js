import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetFav } from '../../redux/slices/Fav'

function UserFavHook() {
    const dis = useDispatch()
    const res = useSelector(state=>state.Favslice.data)
    const [Loading,setLoading] = useState()
    const Getwhitlist = async()=>{
        setLoading(true)
        await dis(GetFav())
        setLoading(false)
    }
    useEffect(() => {
        Getwhitlist()
    }, [])
    let favArray;
    if(res?.data){
        favArray = JSON.parse(JSON.stringify(res?.data.data))
        favArray.map((e)=>{
            return e.imageCover  = `http://localhost:8000/products/${e.imageCover}`
        })
        }
    return [favArray,Loading]
}

export default UserFavHook