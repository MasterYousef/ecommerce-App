import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from "../../redux/slices/Category/GetAllCategorySlice";


function CatagoryContanirHook() {
    const cate = useSelector((state)=>state.GetCategory.Category);
    const isLoading = useSelector((state)=>state.GetCategory.Loading);
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]
    const dis = useDispatch();
    const page = cate?.paginationResult?.numberOfPages
    useEffect(()=>{
      dis(GetCategory('/api/v1/categories?limit=5'))
    },[])
    let SetPage=(p)=>{
      dis(GetCategory(`/api/v1/categories?limit=5&page=${p}`))
    }
    return [isLoading,cate,colors,page,SetPage]
}

export default CatagoryContanirHook