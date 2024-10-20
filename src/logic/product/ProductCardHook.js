import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFav, GetFav, PostFav } from "../../redux/slices/Fav";
import { toast } from "react-toastify";
function ProductCardHook(id, favId) {
  const dis = useDispatch();
  const res = useSelector((state) => state.Favslice.PostData);
  const DelRes = useSelector((state) => state.Favslice.DelData);
  const [loading, setLoading] = useState("");
  const [loading2, setLoading2] = useState("");
  const [heart, setHeart] = useState("");
  let isFav = favId?.some((e) => e === id);
  const user = JSON.parse(localStorage.getItem("user"));
  const heartOn = async () => {
    if (!user) {
      toast.warn("من فضلك سجل الدخول لحذف المنتج من المفضلة");
    } else if (user?.role === "admin") {
      toast.warn("لا يسمح للمشرفين بأضافة منتج الي المفضلة");
    } else {
      setLoading(true);
      await dis(
        PostFav({
          product: id,
        })
      );
      await dis(GetFav());
      setLoading(false);
    }
  };
  const heartOff = async () => {
    if (!user) {
      toast.warn("من فضلك سجل الدخول لأضافة المنتج الي المفضلة");
    } else if (user?.role === "admin") {
      toast.warn("لا يسمح للمشرفين بأضافة منتج الي المفضلة");
    } else {
      setLoading2(true);
      await dis(DeleteFav(id));
      await dis(GetFav());
      setLoading2(false);
    }
  };
  useEffect(() => {
    if (favId?.some((e) => e === id) === true) {
      setHeart(true);
    } else if (favId?.some((e) => e === id) === false) {
      setHeart(false);
    }
  }, [isFav]);

  useEffect(() => {
    if (loading === false) {
      if (res?.data?.status === "success") {
        toast.success("تم اضافة المنتج بنجاح");
      } else {
        toast.error("حدث خطاء ما لم يتم اضافة المنتج");
      }
    }
  }, [loading]);
  useEffect(() => {
    if (loading2 === false) {
      if (DelRes?.data?.status === "success") {
        toast.success("تم حذف المنتج بنجاح");
      } else {
        toast.error("حدث خطاء ما لم يتم حذف المنتج");
      }
    }
  }, [loading2]);

  return [heart, heartOff, heartOn];
}

export default ProductCardHook;
