import BaseUrl from "../Api/BaseUrl"

const useInsertData = async (url,par)=>{
    const config={
        headers:{Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.post(url,par,config);
    return res
}
const useInsertDataWithImg = async (url,par)=>{
    const config={
        headers:{"Content-Type":"multipart/form-data",Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.post(url,par,config);
    return res
}
export {useInsertData,useInsertDataWithImg}