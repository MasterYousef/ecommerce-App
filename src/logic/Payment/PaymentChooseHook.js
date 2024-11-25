import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAddress } from "../../redux/slices/user/Address";
import { toast } from "react-toastify";
import { GetCart } from "../../redux/slices/cart/Cart";
import { PostOrder, PostCardOrder } from "../../redux/slices/payment/Order";
import { useNavigate } from "react-router-dom";
function PaymentChooseHook() {
  const navti = useNavigate();
  const dis = useDispatch();
  const res = useSelector((state) => state.AddressSlice.GetData);
  const cart = useSelector((state) => state.CartSlice.GetData);
  const order = useSelector((state) => state.OrderSlice.PostData);
  const Card = useSelector((state) => state.OrderSlice.CardData);
  const [Pay, setPay] = useState("");
  const [loading, setLoading] = useState("");
  const [loading2, setLoading2] = useState("");
  const [option, setOption] = useState("0");
  const [price, setPrice] = useState("0");

  useEffect(() => {
    if (cart?.data?.data?.totalPriceAfterDiscount) {
      setPrice(cart?.data?.data?.totalPriceAfterDiscount);
    } else if (cart?.data?.data?.totalPrice) {
      setPrice(cart?.data?.data?.totalPrice);
    }
  }, [cart]);
  const onSubmit = async () => {
    if (Pay === "") {
      toast.warn("من فضلك اختر طريقة الدفع");
      return;
    } else if (option === "0") {
      toast.warn("من فضلك اختر عنوان");
      return;
    } else if (Pay === "الدفع عند الاستلام") {
      setLoading(true);
      const obj = {
        id: cart?.data?.data?._id,
        data: {
          shippingAddress: res?.data?.addresses[option - 1]?._id,
        },
      };
      await dis(PostOrder(obj));
      setLoading(false);
    } else if (Pay === "الدفع عن طريق الفيزا") {
      const obj = {
        shippingAddress: res?.data?.addresses[option - 1]?._id,
      };
      setLoading2(true);
      await dis(PostCardOrder(obj));
      setLoading2(false);
    }
  };
  useEffect(() => {
    dis(GetAddress("/api/v1/user/userAddresses"));
    dis(GetCart());
  }, []);
  useEffect(() => {
    if (loading === false) {
      if (order?.data?.status !== "success") {
        toast.error("حدث خطاء ما الرجاء المحاولة مرة اخرى لاحقا");
      } else if (order?.data?.status === "success") {
        toast.success("تم عمل الطلب بنجاح");
        localStorage.removeItem("cart");
        dis(GetCart())
        setTimeout(() => {
          navti("/user/allorders");
        }, 1000);
      }
    }
  }, [order,loading]);
  useEffect(() => {
    if (loading2 === false) {
      if (Card?.data?.status === "success") {
        if (Card?.data?.data?.url) {
          window.location.href = Card?.data?.data?.url
        }
      } else if (Card?.status !== "success") {
        toast.error("حدث خطاء ما الرجاء المحاولة لاحقا");
      }
    }
  }, [Card,loading2]);
  return [
    price,
    res?.data,
    setPay,
    option,
    setOption,
    onSubmit,
    loading,
    loading2,
  ];
}

export default PaymentChooseHook;
