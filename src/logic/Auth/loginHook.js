import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, TokenData , resetState  } from "../../redux/slices/Auth";
import { useNavigate } from "react-router-dom";
function LoginHook() {
  const route = useNavigate();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const res = useSelector((state) => state.Authentication.LoginRes);
  const Loading = useSelector((state) => state.Authentication.Loading);
  let isVald = false;
  const dis = useDispatch();
  const onChangeEmail = (e) => {
    SetEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    SetPassword(e.target.value);
  };
  const valde = () => {
    const REmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (REmail.test(email) !== true) {
      toast.error(" من فضلك ادخل بريدالكتروني صحيح");
      return isVald;
    }
    if (password.length <= 0) {
      toast.error("من فضلك ادخل كلمة السر");
      return isVald;
    } else return (isVald = true);
  };
  const onesubmit = async () => {
    valde();
    if (isVald === true) {
      await dis(
        login({
          email,
          password,
        })
      );
    } else return;
  };
  useEffect(() => {
    if (Loading === false) {
      if (res === "user not found" || res === "wrong password") {
        localStorage.removeItem("token");
        toast.error("خطاء في كلمة السر او البريد الالكتروني");
        dis(resetState())
      } else if (res?.status === 200) {
        toast.success("تم تسجيل الدخول بنجاح");
        dis(resetState())
        if (res?.data?.token) {
          localStorage.setItem("token", res?.data?.token);
          setTimeout(() => {
            route("/");
            dis(TokenData());
          }, 500);
        }
        if (res?.data?.user) {
          localStorage.setItem("user", JSON.stringify(res?.data?.user));
        }
      } else if (res?.status !== 200 && res !== "") {
        toast.error(
          "حدث خطاء اثناء تسجيل الدخول الرجاء المحاولة مرة اخرى لاحقا"
        );
        localStorage.removeItem("token");
        dis(resetState())
      }
    }
  }, [res,Loading]);
  return [email, onChangeEmail, password, onChangePassword, onesubmit, Loading];
}

export default LoginHook;
