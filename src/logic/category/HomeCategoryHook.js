import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from "../../redux/slices/Category/GetAllCategorySlice";
import { useEffect } from "react";
function HomeCategoryHook() {
    const cate = useSelector((state)=>state.GetCategory.Category);
    const isLoading = useSelector((state)=>state.GetCategory.Loading);
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    const dis = useDispatch();
    useEffect(()=>{
      dis(GetCategory('/api/v1/category'))
    },[])
    return [isLoading,cate,colors]
}


export default HomeCategoryHook