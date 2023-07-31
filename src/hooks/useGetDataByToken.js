import BaseUrl from "../Api/BaseUrl";

const useGetDataByToken = async (url,par)=>{
    const config={
        headers:{Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.get(url,config);
    return res
}
export default useGetDataByToken