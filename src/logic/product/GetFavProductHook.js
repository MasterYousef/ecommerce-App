import React, { useEffect } from 'react'
import { GetFav } from '../../redux/slices/Fav'
import { useDispatch, useSelector } from 'react-redux'

function GetFavProductHook() {
    const fav = useSelector((state)=>state.Favslice?.data?.data)
    const dis = useDispatch()
    let favId = fav?.data?.map((e)=>e._id)
    useEffect(()=>{
        dis(GetFav())
    },[favId])
    return [favId]
}

export default GetFavProductHook