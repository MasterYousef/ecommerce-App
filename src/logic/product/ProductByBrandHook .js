import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {GetProducts} from '../../redux/slices/Product/GetAllProduct';

function ProductByBrandHook () {
    const {id} = useParams();
    const dis = useDispatch()
    const [page, setPage] = useState(0)
    const res = useSelector(state=>state.GetMyProducts.Products)
    const Loading = useSelector(state=>state.GetMyProducts.Loading)
    useEffect(() => {
        dis(GetProducts(`/api/v1/product?brand=${id}&page=${page}&limit=12`))
    }, [page])
    return [res,Loading,setPage,page]
}

export default ProductByBrandHook