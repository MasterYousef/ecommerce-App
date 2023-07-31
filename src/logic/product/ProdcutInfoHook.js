import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {GetProduct} from '../../redux/slices/Product/GetOneProduct'
import {GetOnecate} from '../../redux/slices/Category/GetOneCategory'
import {GetOneBr} from '../../redux/slices/Brand/GetOneBrand'

function ProdcutInfoHook(id) {
    const dis = useDispatch()
    const product = useSelector((state)=>state.GetOneProduct.Product)
    const cate = useSelector((state)=>state.GetOneCategory.category)
    const brand = useSelector((state)=>state.GetOneBrand.brand)
    let item = []
    if(product.data){
        item = product.data
    }else{
        item = []
    }
    let itemCate = []
    if(cate.data){
        itemCate = cate.data
    }else{
        itemCate = []
    }
    let itemBrand = []
    if(brand.data){
        itemBrand = brand.data
    }else{
        itemBrand = []
    }
    useEffect(()=>{
        dis(GetProduct(id))
    },[])
    useEffect(()=>{
        dis(GetOnecate(item.category))
        dis(GetOneBr(item.brand))
    },[item])
    return [item ,itemCate,itemBrand]
}

export default ProdcutInfoHook