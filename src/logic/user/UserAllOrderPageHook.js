import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserOrder } from "../../redux/slices/user/UserOrder";
function UserAllOrderPageHook() {
  const dis = useDispatch();
  const res = useSelector((state) => state.UserOrderSlice.GetData?.data);
  const Loading = useSelector((state) => state.UserOrderSlice.Loading);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const obj = {
      page,
      limit:3
    }
    if(window.location.href.includes("user")){
      obj.limit = 1
    }
    dis(GetUserOrder(obj));
  }, [page]);
  return [res, Loading, setPage, page, res?.paginationResult];
}

export default UserAllOrderPageHook;
