import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetCategory } from '../../redux/slices/Category/GetAllCategorySlice';
import { GetAllBrand } from '../../redux/slices/Brand/GetBrand';
import SearchProductHook from './SearchProductHook';

function SubTitleHook() {
    const [,,,,,,,GetDataByWord] = SearchProductHook()
    const cate = useSelector((state)=>state.GetCategory.Category);
    const brand = useSelector((state)=>state.GetMyBrand.brand);
    const brands = brand?.data
    const cateegorys = cate?.data
    const dis = useDispatch();
    const [cats,setCats] = useState([])
    const [MyBrands,setMyBrands] = useState([])
    const [from,setFrom] = useState('')
    const [to,setTo] = useState('')
    const opHandllerCate = (e)=>{
        if (e.target.value === "الكل"){
            setCats([])
        }else if(e.target.checked === true){
            setCats([...cats,e.target.value])
        }else if (e.target.checked === false){
            let NewCats = cats.filter((event)=> event !== e.target.value);
            setCats(NewCats)
        }
    }
    const opHandllerBrands = (e)=>{
        if (e.target.value === "الكل"){
            setMyBrands([])
        }else if(e.target.checked === true){
            setMyBrands([...MyBrands,e.target.value])
        }else if (e.target.checked === false){
            let NewBrand = MyBrands.filter((event)=> event !== e.target.value);
            setMyBrands(NewBrand)
        }
    }
    const priceFrom = (e)=>{
        localStorage.setItem('from',e)
        setFrom(e)
    }
    const priceto= (e)=>{
        localStorage.setItem('to',e)
        setTo(e)
    }
    useEffect(()=>{
        let selctedCate = cats?.map(c => 'category[in][]='+c ).join('&')
        localStorage.setItem('cateSelact',selctedCate)
        let selctedBrand = MyBrands?.map(c => 'brand[in][]='+c ).join('&')
        localStorage.setItem('brandSelact',selctedBrand)
        setTimeout(()=>{
            GetDataByWord()
        },500)
    },[cats,MyBrands])
    useEffect(()=>{
        setTimeout(()=>{
            GetDataByWord()
        },1000)
      },[from,to])
    useEffect(()=>{
        dis(GetCategory('/api/v1/categories'))
        dis(GetAllBrand('/api/v1/brands'))
      },[])
      return [cateegorys,brands,opHandllerCate,opHandllerBrands,priceFrom,priceto]
}
export default SubTitleHook