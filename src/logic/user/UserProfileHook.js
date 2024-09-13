import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UpdatePassword, UpdateProfile } from "../../redux/slices/user/Profile";
import { useNavigate } from "react-router-dom";
import { TokenData } from "../../redux/slices/Auth";
function UserProfileHook() {
  const dis = useDispatch();
  const [user, setUser] = useState("");
  let data;
  const Navigate = useNavigate();
  const res = useSelector((state) => state.ProfileSlice.UpdateData);
  const res2 = useSelector((state) => state.ProfileSlice.UpdatePass);
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [res]);
  useEffect(() => {
    if (user !== "") {
      setName(user?.name);
      setEmail(user?.email);
      setPhone(user?.phone);
    }
  }, [user]);
  const [name, setName] = useState(user?.name);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [password, setpassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setnewPasswordConfirm] = useState("");
  const [show, setShow] = useState(false);
  const [Loading, setLoading] = useState("");
  const [Loading2, setLoading2] = useState("");
  const onSubmit = async () => {
    if (password === "") {
      toast.error("من فضلك ادخل كلمة السر القديمة");
      return;
    } else if (password === "") {
      toast.error("من فضلك ادخل كلمة السر الجديدة");
      return;
    } else if (newPassword !== newPasswordConfirm) {
      toast.error("الرجاء تأكيد كلمة السر بشكل صحيح");
      return;
    } else {
      setLoading2(true);
      const passData = {
        newPassword,
        password,
        newPasswordConfirm,
      };
      await dis(UpdatePassword(passData));
      setLoading2(false);
    }
  };
  const onEdit = async () => {
    if (
      (email === user?.email && name !== user?.name) ||
      phone !== user?.phone
    ) {
      data = {
        name,
        phone,
      };
      setLoading(true);
      await dis(UpdateProfile(data));
      setShow(false);
      setLoading(false);
    } else if (
      name === user?.name &&
      email === user?.email &&
      phone === user?.phone
    ) {
      toast.warn("من فضلك ادخل بيانات جديدة لتعديلها");
      return;
    } else {
      data = {
        name,
        phone,
        email,
      };
      setLoading(true);
      dis(UpdateProfile(data));
      setLoading(false);
      setShow(false);
    }
  };
  useEffect(() => {
    if (Loading === false) {
      if (res.status === 200) {
        toast.success("تم تعديل البيانات بنجاح");
        localStorage.setItem("user", JSON.stringify(res?.data?.data));
        setUser(res?.data?.data);
        dis(TokenData());
      } else if (res?.status === "error" || res?.status === "fail") {
        toast.error("حدث خطاء ما لم يتم تعديل البيانات");
      }
    }
  }, [res,Loading]);
  useEffect(() => {
    if (Loading2 === false) {
      if (res2?.errors || res2?.status === "fail" || res2?.status === "error") {
        toast.error("كلمة السر غير صحيحة");
      } else if (res2?.data?.token) {
        toast.success("تم تعديل كلمة السر بنجاح");
        setTimeout(() => {
          localStorage.removeItem("token");
          dis(TokenData());
          Navigate("/login");
        }, 1000);
      }
    }
  }, [res2,Loading2]);
  return [
    user,
    show,
    setShow,
    Loading,
    name,
    phone,
    email,
    setName,
    setPhone,
    setEmail,
    onEdit,
    password,
    newPassword,
    newPasswordConfirm,
    setpassword,
    setNewPassword,
    setnewPasswordConfirm,
    onSubmit,
    Loading2,
  ];
}

export default UserProfileHook;
