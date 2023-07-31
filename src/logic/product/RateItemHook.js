import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteRate, GetRate, UpdateRate } from '../../redux/slices/Rate';
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import { GetProduct } from '../../redux/slices/Product/GetOneProduct';

function RateItemHook() {
const {id} = useParams();
    const res = useSelector(state=>state.RateSlice.DeleteRate);
    const dis = useDispatch()
    const [show,setShow] = useState(false)
    const [isUpdata,setIsUpdata] = useState(false)
    const [NewCom,setNewCom] = useState('')
    const [NewRate,setNewRate] = useState(0)
    const [show2,setShow2] = useState(false)
    const onsubmit=async(id)=>{
        await dis(DeleteRate(id))
            setShow(false)
    }
    useEffect(() => {
        const obj = {
            id,
            page:1,
            limit:5
        }
         dis(GetRate(obj))
         dis(GetProduct(id))
    }, [res,isUpdata])
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value:NewRate,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            setNewRate(newValue)
        }
    }
    if(NewRate < 1){
        setNewRate(1)
    }
    const onEdit = async(rateId)=>{
        if(NewCom === ''){
            toast.error('من فضلك ادخل تعليق')
            return
        }else{
            const obj = {
                url:`/api/v1/reviews/${rateId}`,
                data:{review:NewCom,rating:NewRate}
            }
            await dis(UpdateRate(obj))
            setShow2(false)
            setIsUpdata(true)
        }
    }
    return[show,setShow,onsubmit,setting,show2,setShow2,NewCom,setNewCom,onEdit]
}
export default RateItemHook