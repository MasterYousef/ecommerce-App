import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetCart } from '../../redux/slices/cart/Cart'

function CartContainerHook() {
    const dis =useDispatch()
    const items = useSelector(state=>state.CartSlice.GetData)
    const loading = useSelector(state=>state.CartSlice.Loading)
    const [totalPrice, setTotalPrice] = useState('items?.data?.totalCartPrice')
    const [totalPriceAfterCo, setTotalPriceAfterCo] = useState('')
    const [couponName, setCouponName] = useState("")
    useEffect(() => {
        dis(GetCart())
    }, [])
    useEffect(() => {
        if(loading === false){
            if(items?.data?.status === "success"){
                setTotalPrice(items?.data?.data?.totalCartPrice)
                if(items?.data?.data?.coupon){
                    setCouponName(items?.data?.data?.coupon)
                    setTotalPriceAfterCo(items?.data?.data?.totalAfterDiscount)
                }
            }
        }
    }, [loading])
    return [items?.data,loading,totalPrice,totalPriceAfterCo,couponName,setCouponName]
}

export default CartContainerHook