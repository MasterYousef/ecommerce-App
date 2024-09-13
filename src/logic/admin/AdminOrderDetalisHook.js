import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GetAdminOrder,
  UpdateAdminOrder,
} from "../../redux/slices/payment/Order";
import { toast } from "react-toastify";
function AdminOrderDetalisHook() {
  const { id } = useParams();
  const dis = useDispatch();
  const res = useSelector((state) => state.OrderSlice.GetData?.data);
  const Loading = useSelector((state) => state.OrderSlice.Loading);
  const EditRes = useSelector((state) => state.OrderSlice.EditData?.data);
  const [load, setLoad] = useState("");
  const onPay = async () => {
    setLoad(true);
    dis(UpdateAdminOrder(`/api/v1/order/setIsPaid/${id}`));
    setLoad(false);
  };
  const onDiv = () => {
    setLoad(true);
    dis(UpdateAdminOrder(`/api/v1/order/setIsDelivered/${id}`));
    setLoad(false);
  };
  useEffect(() => {
    dis(GetAdminOrder(id));
  }, []);
  useEffect(() => {
    if (load === false) {
      if (EditRes?.status === "success") {
        toast.success("تم تعديل الطلب بنجاح");
        dis(GetAdminOrder(id));
      } else if (EditRes?.status !== "success") {
        toast.error("حدث خطاء ما لم يتم تحديث الطلب");
      }
    }
  }, [EditRes]);
  return [res, Loading, onPay, load, onDiv];
}
export default AdminOrderDetalisHook;
