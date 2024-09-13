import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCart } from "../../redux/slices/cart/Cart";

function CartContainerHook() {
  const dis = useDispatch();
  const items = useSelector((state) => state.CartSlice.GetData);
  const loading = useSelector((state) => state.CartSlice.Loading);
  const [couponName, setCouponName] = useState("");
  useEffect(() => {
    dis(GetCart());
  }, []);
  useEffect(() => {
    if (loading === false) {
      if (items?.data?.status === "success") {
        if (items?.data?.data?.coupon) {
          setCouponName(items?.data?.data?.coupon);
        }
      } else {
        localStorage.removeItem("cart");
      }
    }
  }, [loading]);
  return [
    items?.data,
    loading,
    couponName,
    setCouponName,
  ];
}

export default CartContainerHook;
