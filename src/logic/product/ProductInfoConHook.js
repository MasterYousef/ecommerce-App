import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {GetProducts} from '../../redux/slices/Product/GetAllProduct'
import { GetOnecate } from '../../redux/slices/Category/GetOneCategory'
import { GetProduct } from '../../redux/slices/Product/GetOneProduct'
function ProductInfoConHook(id) {
    const dis = useDispatch()
    const product = useSelector((state)=>state.GetOneProduct.Product)
    const CategoryProduct = useSelector((state)=>state.GetMyProducts.Products)
    const cate = useSelector((state)=>state.GetOneCategory.category)
    let CateProducts = []
    if(CategoryProduct.data){
        CateProducts = CategoryProduct.data
    }else{
        CateProducts = []
    }
    let itemCate = []
    if(cate.data){
        itemCate = cate.data
    }else{
        itemCate = []
    }
    let items = []
    if(product.data){
        items = product.data
    }else{
        items = []
    }
    useEffect(()=>{
        dis(GetProduct(id))
    },[])
    useEffect(()=>{
        dis(GetOnecate(product?.data?.category))
        dis(GetProducts(`/api/v1/products?category[in][]=${itemCate._id}`))
    },[product?.data])
    useEffect(()=>{

    },[product?.data])
    return [CateProducts,items]
}

export default ProductInfoConHook