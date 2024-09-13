import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PostAddress } from "../../redux/slices/user/Address";
import { useNavigate } from "react-router-dom";

function UserAddAddressHook() {
  const dis = useDispatch();
  const res = useSelector((state) => state.AddressSlice.PostData);
  const [Loading, setLoading] = useState("");
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const nav = useNavigate();
  const onSubmit = async () => {
    if (alias === "") {
      toast.error("من فضلك ادخل تسمية العنوان");
      return;
    } else if (details === "") {
      toast.error("من فضلك ادخل العنوان بالتفصيل");
      return;
    } else {
      setLoading(true);
      await dis(
        PostAddress({
          alias,
          details,
          city,
          postalCode: postal,
        })
      );
      setLoading(false);
    }
  };
  useEffect(() => {
    if (Loading === false) {
      if (res?.data?.status === "success") {
        toast.success("تم اضافة العنوان بنجاح");
        setTimeout(() => {
          nav("/user/address");
        }, 1500);
      } else {
        toast.error("حدث خطاء ما لم يتم اضافة العنوان");
      }
    }
  }, [res,Loading]);
  return [
    alias,
    setAlias,
    details,
    setDetails,
    onSubmit,
    city,
    setCity,
    postal,
    setPostal,
  ];
}

export default UserAddAddressHook;
