import BaseUrl from "../Api/BaseUrl"

const useUpdateData = async (url,par)=>{
    const config={
        headers:{Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.put(url,par,config);
    return res
}
const useUpdateDataWithImg = async (url,par)=>{
    const config={
        headers:{"Content-Type":"multipart/form-data",Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.put(url,par,config);
    return res
}
export {useUpdateData,useUpdateDataWithImg}