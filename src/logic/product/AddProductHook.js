import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetSubCategory} from "../../redux/slices/Category/GetSubCategory";
import { GetCategory } from "../../redux/slices/Category/GetAllCategorySlice";
import { GetAllBrand } from "../../redux/slices/Brand/GetBrand";
import { toast } from "react-toastify";
import {PostProduct} from "../../redux/slices/Product/PostProduct";
function AddProductHook() {
    const [images, setImages] = useState([]);
    const [name, setname] = useState('');
    const [disc, setDisc] = useState('');
    const [salBefore, setSalBefore] = useState('');
    const [salAfter, setSalAfter] = useState('');
    const [qty, setQty] = useState('');
    const [catId, setCatId] = useState("0");
    const [BrandId, setBrandId] = useState('');
    const [ShowColor, setShowColor] = useState(false);
    const [Colors, setColors] = useState([]);
    const [options,setOptions] = useState([])
    const [selectSub,setSelectSub] = useState([])
    const brand = useSelector((state)=>state.GetMyBrand.brand);
    const cate = useSelector((state)=>state.GetCategory.Category);
    const Subcate = useSelector((state)=>state.GetMySubCategorys.SubCategory);
    const err = useSelector((state)=>state.PostMyProduct.error);
    const loading = useSelector((state)=>state.PostMyProduct.Loading);
    const dispatch = useDispatch()
    const handelColor = (color)=>{
        setColors([...Colors,color.hex])
        setShowColor(!ShowColor)
    }
    const SubCategory= async(e)=>{
        if(e !== '0'){
            await dispatch(GetSubCategory(`/api/v1/category/${e}/subCategory`))
        }
    setCatId(e)
    }
    const DelateColors =(e)=>{
        const NewColors = Colors.filter((c)=> c!== e)
        setColors(NewColors)
    }
    const onSelect = (e) => {
        setSelectSub(e)
    }
    const onRemove = (e) => {
        setSelectSub(e)
    }
    useEffect(()=>{
        if(catId !== '0'){
            if(Subcate.data){
                setOptions(Subcate.data)
            }
        }
    },[catId])
    useEffect(()=>{
        dispatch(GetCategory('/api/v1/category'))
        dispatch(GetAllBrand('/api/v1/brand?limit=20'))
    },[])
    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    const sendData =()=>{
        if(name === '' || disc === '' || qty === '' || salBefore === '' ||images[0] === undefined|| catId === "0" || BrandId === "0"){ 
            toast.warn('من فضلك ادخل جميع البيانات')
        }else if(Colors.length <= 0){
            toast.warn('من فضلك اختر لون')
        }else if((salBefore * 1) <= (salAfter * 1)){
            toast.warn(' من فضلك ادخل سعر قبل الخصم اكبر من سعر بعد الخصم')
        }
        else{
            const imageCover = dataURLtoFile(images[0],Math.random() + ".png")
            const info = new FormData();
            const ItemImages =Array.from(Array(Object.keys(images)?.length).keys())?.map((e)=>{
                return dataURLtoFile(images[e],Math.random() + ".png")
            });
            if(salAfter !== 0 && salAfter !== ""){
            info.append('priceAfterDiscount',salAfter)
            }
            info.append('title',name)
            info.append('description',disc)
            info.append('quantity',qty)
            info.append('price',salBefore)
            info.append('imageCover',imageCover)
            info.append('category',catId)
            info.append('brand',BrandId)
            Colors.map((color)=> info.append('colors',color))
            ItemImages.map((i)=>info.append('images',i))
            selectSub.map((s)=>info.append('subcategories',s._id))
            dispatch(PostProduct(info))
        }
    }
    useEffect(()=>{
        if(loading === false){
            if(err === true){
                toast.error('حدث خطاء اثناء الاضافة ')
            }else if(err === false){
                toast.success('تم الاضافة بنجاح')
                setname('')
                setBrandId('')
                setCatId('0')
                setColors([])
                setDisc('')
                setImages([])
                setOptions([])
                setSalAfter('')
                setSalBefore('')
                setQty('')
                setSelectSub([])
                setShowColor(false)
            }
        }
    },[loading])
    return [images , setImages ,name ,setname , disc ,setDisc , salBefore 
        ,setSalBefore , salAfter , setSalAfter ,qty ,setQty ,catId ,SubCategory,
        cate,options ,onSelect,onRemove,BrandId,setBrandId,brand,Colors,DelateColors
        ,ShowColor,handelColor,setShowColor,sendData,loading
    ]
}

export default AddProductHook