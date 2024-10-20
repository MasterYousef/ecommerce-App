import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import  { GetAllBrand } from "../../redux/slices/Brand/GetBrand";
function HomeBrandHook() {
    const brand = useSelector((state)=>state.GetMyBrand.brand);
    const isLoading = useSelector((state)=>state.GetMyBrand.loading);
    const dis = useDispatch();
    useEffect(()=>{
      dis(GetAllBrand('/api/v1/brand?limit=5'))
    },[])
    return [isLoading,brand]
}

export default HomeBrandHook