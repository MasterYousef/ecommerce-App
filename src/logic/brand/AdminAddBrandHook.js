import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from '../../images/avatar.png'
import { toast } from "react-toastify";
import { PostBrands } from "../../redux/slices/Brand/PostBrand";
function AdminAddBrandHook() {
    const [img , setImg] = useState(avatar);
    const [name , setName] = useState('');
    const [sImg , SetsImg] = useState(null);
    const err = useSelector((state)=>state.PostMyBrand.error)
    const Loading = useSelector((state)=>state.PostMyBrand.Loading)
    const imgChange = (ev)=>{
        if(ev.target.files && ev.target.files[0]){
            setImg(URL.createObjectURL( ev.target.files[0]))
            SetsImg(ev.target.files[0])
        }
    }
    const NameChange = (ev)=>{
        setName(ev)
    }
    const dispatch = useDispatch()
const SendData=()=>{
    if(img !== avatar && name!==''){
        const formData = new FormData()
        formData.append("name",name)
        formData.append("image",sImg)
        dispatch(PostBrands(formData))
    }else{
        toast.warn('من فضلك ادخل البيانات ')
    }
}
useEffect(()=>{
    if(Loading === false && err === false){
        setImg(avatar)
        setName('')
        SetsImg(null)
        toast.success('تم الاضافة بنجاح')
    }else if(Loading === false && err === true){
        setImg(avatar)
        setName('')
        SetsImg(null)
        toast.error('حدث خطاء ما الرجاء المحاولة مرة اخرى لاحقا')
    }
},[err,Loading])
    return [img,name,imgChange,NameChange,Loading,SendData]
}

export default AdminAddBrandHook