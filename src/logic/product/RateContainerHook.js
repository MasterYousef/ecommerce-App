import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { GetRate } from '../../redux/slices/Rate';

function RateContainerHook() {
const {id} = useParams();
const res = useSelector(state=>state.RateSlice.GetRes);
const dis = useDispatch()
const [page,setPage] = useState()
let user;
if(localStorage.getItem('user')!== null){
     user = JSON.parse(localStorage.getItem('user'))
}
const getrevo =async()=>{
    const obj = {
        id,
        page,
        limit:5
    }
    await dis(GetRate(obj))
}
useEffect(() => {
    getrevo()
}, [page])
return [res?.data,setPage,user]
}
export default RateContainerHook