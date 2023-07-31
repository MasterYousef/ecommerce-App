import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { search } from '../../redux/slices/Product/SearchProduct';
function SearchProductHook() {
const dis = useDispatch()
const product = useSelector((state)=>state.SearchProducts.Products)
const [Search , SetSearch] = useState([]);
let word = '' , sort = '', limit = 2, page , cate, brand , to ='', from ='', priceFromcontroll ,priceToControll
const changeSearch = (e)=>{
    localStorage.setItem('search',e.target.value)
    SetSearch(e.target.value)
    if(window.location.pathname !== '/Search'){
        window.location.href = '/Search'
    }
}
const sorting = ()=>{
    if(localStorage.getItem('sort')!== null){
        sort = localStorage.getItem('sort')
    }
}
const SetPage = async(p)=>{
        page = p
        getStorge()
            await dis(search(`/api/v1/products?keyword=${word}&limit=${limit}&page=${page}&sort=${sort}&${cate}&${brand}&${priceFromcontroll}&${priceToControll}`))
}
const getStorge = ()=>{
    if (localStorage.getItem('search')!== null)
    SetSearch(localStorage.getItem('search'))
    word = localStorage.getItem('search')
    sorting()
    if(localStorage.getItem("cateSelact")!== null)
    cate = localStorage.getItem("cateSelact")
    if(localStorage.getItem("brandSelact") !== null)
    brand = localStorage.getItem("brandSelact")
    if(localStorage.getItem('from')!==null)
    from = localStorage.getItem('from')
    if(localStorage.getItem('to')!==null)
    to = localStorage.getItem('to')

    if(from === '' || from <=0){
        priceFromcontroll = ''
    }else{
        priceFromcontroll = `price[gte]=${from}`
    }
    if(to === '' || to <=0){
        priceToControll = ''
    }else{
        priceToControll = `price[lte]=${to}`
    }
}
const Sorting = async(s)=>{
localStorage.setItem('sort',s)
GetDataByWord()
}
const GetDataByWord = async ()=>{
    getStorge()
    await dis(search(`/api/v1/products?keyword=${word}&limit=${limit}&page=${page}&sort=${sort}&${cate}&${brand}&${priceFromcontroll}&${priceToControll}`))
}
useEffect(()=>{
    setTimeout(()=>{
        GetDataByWord()
    },1000)
},[Search])
let items = [] ; let num = 0 ; let PaginationNum = 0
if(product.data){
    items = product.data
}
if(product.results){
    num = product.results
}
if(product.paginationResult){
    PaginationNum = product.paginationResult.numberOfPages
}
useEffect(()=>{
    dis(search(`/api/v1/products?keyword=${word}&limit=${limit}&page=${page}&sort=${sort}`))
},[])
return [items,Search,changeSearch,num,PaginationNum,SetPage,Sorting,GetDataByWord]

}
export default SearchProductHook