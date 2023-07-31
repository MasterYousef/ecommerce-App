import BaseUrl from "../Api/BaseUrl"

const useGetData = async (url,par)=>{
    const res = await BaseUrl.get(url,par);
    return res
}
export default useGetData