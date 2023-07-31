import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetSubCategory} from "../../redux/slices/Category/GetSubCategory";
import { GetCategory } from "../../redux/slices/Category/GetAllCategorySlice";
import { GetAllBrand } from "../../redux/slices/Brand/GetBrand";
import { toast } from "react-toastify";
import { GetProduct } from "../../redux/slices/Product/GetOneProduct";
import {EditProduct} from "../../redux/slices/Product/EditProduct";
function AdminEditProductHook(id) {
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
    const err = useSelector((state)=>state.UpdateProduct.error);
    const loading = useSelector((state)=>state.UpdateProduct.Loading);
    const product = useSelector((state)=>state.GetOneProduct.Product.data);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(GetProduct(id))
    },[])
    useEffect(()=>{
        if(product){
            setname(product.title)
            setDisc(product.description)
            setSalBefore(product.price)
            setSalAfter(product.priceAfterDiscount)
            setQty(product.quantity)
            setCatId(product.category)
            setBrandId(product.brand)
            setColors(product.availableColors)
            setImages(product.images)
        }
    },[product])
    const handelColor = (color)=>{
        setColors([...Colors,color.hex])
        setShowColor(!ShowColor)
    }
    const SubCategory= (e)=>{
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
    useEffect(() => {
        
            if(catId != 0){
                const run = async ()=>{
                    await dispatch(GetSubCategory(`/api/v1/categories/${catId}/subcategories`))
                }
                run()
            }
    }, [catId])
    useEffect(()=>{
        if(catId != 0){
            if(Subcate.data){
                setOptions(Subcate.data)
            }
        }
    },[Subcate])
    useEffect(()=>{
        dispatch(GetCategory('/api/v1/categories'))
        dispatch(GetAllBrand('/api/v1/brands'))
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
    const convertURLtoFile = async (url) => {
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
        return new File([data], Math.random(), metadata);
    };
      
      
    const sendData = ()=>{
        if(name === '' || disc === '' || qty === '' || salBefore === '' ||images[0] === undefined|| catId === "0" || BrandId === "0"){ 
            toast.warn('من فضلك ادخل جميع البيانات')
        }else{
            let imageCover;
            if(images[0].length <= 1000){
                  convertURLtoFile(images[0]).then(val => imageCover = val)
            }else{
                imageCover = dataURLtoFile(images[0],Math.random() + ".png")
            }
            const info = new FormData();
            let ItemImages = []
            Array.from(Array(Object.keys(images).length).keys()).map(
                (item, index) => {
                    if (images[index].length <= 1000) {
                        convertURLtoFile(images[index]).then(val => ItemImages.push(val))
                    }
                    else {
                        ItemImages.push(dataURLtoFile(images[index], Math.random() + ".png"))
                    }
                })
            info.append('title',name)
            info.append('description',disc)
            info.append('quantity',qty)
            info.append('price',salBefore)
            info.append('category',catId)
            info.append('brand',BrandId)
            info.append('priceAfterDiscount',salAfter)
            Colors.map((color)=> info.append('availableColors',color))
            console.log(ItemImages)
            setTimeout(() => {
                info.append('imageCover',imageCover)
                ItemImages.map((i)=>info.append('images',i))
            }, 1000);
            selectSub.map((s)=>info.append('subcategory',s._id))
            setTimeout(()=>{
                const par = {id : id,formData : info}
                dispatch(EditProduct(par,info))
            },1000)

        }
    }
    useEffect(()=>{
        if(loading === false){
            if(err !== false){
                toast.error('حدث خطاء اثناء الاضافة ')
            }else{
                toast.success('تم التعديل بنجاح بنجاح')
                window.location.reload()
            }
        }
    },[loading])
    return [images , setImages ,name ,setname , disc ,setDisc , salBefore 
        ,setSalBefore , salAfter , setSalAfter ,qty ,setQty ,catId ,SubCategory,
        cate,options ,onSelect,onRemove,BrandId,setBrandId,brand,Colors,DelateColors
        ,ShowColor,handelColor,setShowColor,sendData,loading
    ]
}


export default AdminEditProductHook