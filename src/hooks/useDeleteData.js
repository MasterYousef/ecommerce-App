import BaseUrl from "../Api/BaseUrl"

const useDeleteData = async (url,par)=>{
    const config={
        headers:{Authorization : `Bearer ${localStorage.getItem('token')}`}
    }
    const res = await BaseUrl.delete(url,config);
    return res
}
export default useDeleteData