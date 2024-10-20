import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteOneCart,
  GetCart,
  UpdateCart,
} from "../../redux/slices/cart/Cart";
function CartItemHook(item,setCoupon) {
  const dis = useDispatch();
  const resEdit = useSelector((state) => state.CartSlice.UpdateData);
  const [count, setCount] = useState(item?.quantity);
  const [Loading, setLoading] = useState("");
  const DeleteRes = useSelector((state) => state.CartSlice.DeleteOneData);
  const [loading2, setLoading2] = useState("");
  const onDeleteItem = async () => {
    const obj = {
      id: item?.product?.id,
      color: item.color,
    };
    setLoading2(true);
    await dis(DeleteOneCart(obj));
    setLoading2(false);
  };
  const onEdit = async() => {
    if (count === item?.quantity) {
      toast.warn("من فضلك غير الكمية ");
      return;
    } else {
      setLoading(true);
      const obj = {
        id: item?.product?.id,
        par: { quantity: count, color: item?.color },
      };
      await dis(UpdateCart(obj));
      setLoading(false);
    }
  };
  useEffect(() => {
    if (Loading === false) {
      if (resEdit?.status === "error" || resEdit?.status === "fail") {
        toast.error("حدث خطاء ما لم يتم تعديل الكمية");
      } else if (resEdit?.data?.status === "success") {
        toast.success("تم تعديل الكمية بنجاح");
        dis(GetCart());
      }
    }
  }, [Loading, resEdit]);
  useEffect(() => {
    if (loading2 === false) {
      if (DeleteRes?.data?.status === "success") {
        toast.success("تم حذف المنتج بنجاح");
        setCoupon("")
        dis(GetCart());
      } else {
        toast.error("لم يتم حذف المنتج من العربة");
      }
    }
  }, [DeleteRes,loading2]);
  return [count, setCount, Loading, onEdit, loading2, onDeleteItem];
}

export default CartItemHook;
