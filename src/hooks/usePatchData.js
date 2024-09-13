import BaseUrl from "../Api/BaseUrl"

const usePatchData = async (url,par)=>{
    const config={
        headers:{Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.patch(url,par,config);
    return res
}
export default usePatchData;