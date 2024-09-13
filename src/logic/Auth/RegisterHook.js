import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetState, SighnUp } from "../../redux/slices/Auth";
import { useNavigate } from "react-router-dom";
function RegisterHook() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [newPasswordConfirm, SetnewPasswordConfirm] = useState();
  const [phone, SetPhone] = useState("");
  const res = useSelector((state) => state.Authentication.SighnUpRes);
  const Loading = useSelector((state) => state.Authentication.Loading);
  const navti = useNavigate();
  let isVald = false;
  const dis = useDispatch();
  const onChangeName = (e) => {
    SetName(e.target.value);
  };
  const onChangeEmail = (e) => {
    SetEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    SetPassword(e.target.value);
  };
  const onChangenewPasswordConfirm = (e) => {
    SetnewPasswordConfirm(e.target.value);
  };
  const onChangePhone = (e) => {
    SetPhone(e.target.value);
  };
  const valde = () => {
    const REmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (name === "") {
      toast.error("من افصلك ادخل الاسم");
      return (isVald = false);
    }
    if (newPasswordConfirm !== password) {
      toast.error("كلمة السر غير مطابقة ");
      return (isVald = false);
    }
    if (phone?.length <= 10 || phone?.length === "") {
      toast.error("من فضلك ادخل رقم هاتف صحيح");
      return (isVald = false);
    }
    if (REmail.test(email) !== true) {
      toast.error(" من فضلك ادخل بريدالكتروني صحيح");
      return;
    } else return (isVald = true);
  };
  const onesubmit = () => {
    valde();
    if (isVald === true) {
      dis(
        SighnUp({
          name,
          email,
          password,
          newPasswordConfirm,
          phone,
        })
      );
    } else return;
  };
  useEffect(() => {
    if (Loading === false) {
      if (res === "must be at least 3 chars") {
        toast.error("يجب ان يكون الاسم اكثر من ثلاث احرف");
        dis(resetState())
      } else if (res === "E-mail already in use") {
        toast.error("البريد الالكتروني مستخدم بالفعل");
        dis(resetState())
      } else if (res === "accept only egypt phone numbers") {
        toast.error("يجب ان يكون رقم الهاتف مصري ");
        dis(resetState())
      } else if (res?.data) {
        toast.success("تم انشاء حساب بنجاح");
        dis(resetState())
        setTimeout(() => {
          navti("/login");
        }, 3000);
      }else if(res!==""&&res?.status !== 200){
        toast.error("حدث خطاء اثناء تسجيل الدخول الرجاء المحاولة مرة اخرى لاحقا");
        dis(resetState())
      }
    }
  }, [res]);
  return [
    name,
    email,
    password,
    newPasswordConfirm,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangenewPasswordConfirm,
    onChangePhone,
    onesubmit,
    Loading,
  ];
}

export default RegisterHook;
