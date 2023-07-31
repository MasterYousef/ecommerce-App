import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from '../../redux/slices/Product/GetAllProduct';

function AdminAllProductHook(limit) {
    const dis = useDispatch()
    const product = useSelector((state)=>state.GetMyProducts.Products)
    const Loading = useSelector((state)=>state.GetMyProducts.Loading)
    let items = []
    if(product){
        items = product
    }else{
        items = []
    }
    let SetPage = (page)=>{
        dis(GetProducts(`/api/v1/products?limit=${limit}&page=${page}`))
    }
    useEffect(()=>{
        dis(GetProducts(`/api/v1/products?limit=${limit}`))
    },[])
    return [items,Loading,SetPage]
}

export default AdminAllProductHook