import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { GetRate, PostRate } from "../../redux/slices/Rate";
import { GetProduct } from "../../redux/slices/Product/GetOneProduct";
function RatePoostHook() {
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const res = useSelector((state) => state.RateSlice.PostData);
  const Loading = useSelector((state) => state.RateSlice.Loading);
  const dis = useDispatch();
  let user;
  if (localStorage.getItem("user") !== null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  const onSubmit = async () => {
    if (rate === 0) {
      toast.warn("من فضلك ادخل تقييم");
    } else {
      const obj = {
        url: `/api/v1/product/${id}/rating`,
        data: { comment, rating: rate },
      };
      await dis(PostRate(obj));
    }
  };
  useEffect(() => {
    if (Loading === false) {
      if (res?.message === "You are not allowed to perform this action") {
        toast.error("غير مسموح لك بأضافة تعليق");
      } else if (res?.errors) {
        if (res.errors[0]?.msg === "you have already rated this product") {
          toast.error("خطاء لقد قمت بأضافة تعليق بالفعل");
        }
      } else if (res?.statusText === "Created") {
        toast.success("تم الاضافة بنجاح");
        setComment("");
      } else {
        toast.error("حدث خطاء ما الرجاء المحاولة مرة اخرى");
      }
    }
  }, [Loading]);
  useEffect(() => {
    const obj = {
      id,
      page: 1,
      limit: 5,
    };
    dis(GetRate(obj));
    dis(GetProduct(id));
  }, [res]);
  return [user, comment, setComment, setRate, onSubmit];
}

export default RatePoostHook;
