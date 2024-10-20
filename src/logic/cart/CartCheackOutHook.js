import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CartCoupon, DeleteCart, GetCart } from "../../redux/slices/cart/Cart";
import { useNavigate } from "react-router-dom";
function CartCheackOutHook(couponName, price, setCouponName) {
  const dis = useDispatch();
  const res = useSelector((state) => state.CartSlice.DeleteData);
  const couponRes = useSelector((state) => state.CartSlice.CartCouponData);
  const [loading, setLoading] = useState("");
  const [loading2, setLoading2] = useState("");
  const navti = useNavigate();
  const onDelete = async () => {
    setLoading(true);
    await dis(DeleteCart());
    setLoading(false);
  };
  const onCoupon = async () => {
    setLoading2(true);
    await dis(
      CartCoupon({
        coupon: couponName,
      })
    );
    setLoading2(false);
  };
  const paymint = () => {
    if (price >= 1) {
      navti("/order/paymethoud");
    } else {
      toast.warn("لا يوجد منتجات في العربة");
    }
  };

  useEffect(() => {
    if (loading === false) {
      if (res.status === 204) {
        toast.success("تم حذف العربة بنجاح");
        localStorage.removeItem("cart");
        setCouponName("");
        dis(GetCart());
      } else {
        toast.error("لم يتم حذف محتويات العربة");
      }
    }
  }, [res, loading]);
  useEffect(() => {
    if (loading2 === false) {
      if (couponRes?.data?.status === "success") {
        toast.success("تم تطبيق الخصم بنجاح");
        dis(GetCart());
      } else if (couponRes?.data?.status !== "success") {
        toast.error("حدث خطاء ما لم يتم تطبيق الكوبون");
      }
    }
  }, [couponRes, loading2]);
  return [onDelete, loading, loading2, onCoupon, paymint];
}

export default CartCheackOutHook;
