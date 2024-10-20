import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from "../../redux/slices/Category/GetAllCategorySlice";
import { toast } from "react-toastify";
import {PostSubCategory} from "../../redux/slices/Category/PostSubCategory";
function AdminSubCategoryHook() {
    const cate = useSelector((state)=>state.GetCategory.Category);
    const dis = useDispatch();
    const [name,setName] = useState('');
    const [id,setId] = useState('0');
    const err = useSelector((state)=>state.PostMySubCategory.error)
    const Loading = useSelector((state)=>state.PostMySubCategory.Loading)
    useEffect(()=>{
      dis(GetCategory('/api/v1/category'))
    },[])
    let AddName =(e)=>{
        setName(e)
    }
    let AddId =(e)=>{
        setId(e)
    }
    let SentData=()=>{
        if(id === '0'){
            toast.warn("من فضلك ادخل تصنيف رئيسي")
        }else if (name === ''){
            toast.warn("من فضلك ادخل اسم التصنيف الفرعي")
        }else{
            const RowData = {
                "name":name,
                "category":id
            }
             dis(PostSubCategory(RowData))
            setName('')
            setId('0')
        }
    }
    useEffect(() => {
        if(Loading === false){
            if(err === 'fail'){
                toast.error('حدث خطاء اثناء الاضافة اعد اضافة التصنيف')
            }else if(err === "Created"){
                toast.success('تم الاضافة بنجاح')
            }
        }
    }, [Loading,err])
    return [cate,Loading,name,id,AddName,AddId,SentData]
}

export default AdminSubCategoryHook