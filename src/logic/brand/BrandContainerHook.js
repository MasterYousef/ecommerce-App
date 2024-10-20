import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBrand } from "../../redux/slices/Brand/GetBrand";
function BrandContanirHook(limit=5) {
    const brand = useSelector((state)=>state.GetMyBrand.brand);
    const isLoading = useSelector((state)=>state.GetMyBrand.loading);
    const dis = useDispatch();
    const page = brand?.paginationResult?.numberOfPages
    useEffect(()=>{
      dis(GetAllBrand(`/api/v1/brand?limit=${limit}`))
    },[])
    let SetPage=(p)=>{
      dis(GetAllBrand(`/api/v1/brand?limit=${limit}&page=${p}`))
    }
    return [isLoading,brand,page,SetPage]
}

export default BrandContanirHook