import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {GetProducts} from '../../redux/slices/Product/GetAllProduct'
function ProductContainerHook() {
const dis = useDispatch()
const product = useSelector((state)=>state.GetMyProducts.Products)
let items
if(product.data){
    items = product.data.slice(0,4)
}else{
    items = []
}
useEffect(()=>{
    dis(GetProducts('/api/v1/products'))
},[])
return [items]
}
export default ProductContainerHook