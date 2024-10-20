import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TokenData } from "../../redux/slices/Auth";
import { GetCart } from "../../redux/slices/cart/Cart";
import { useNavigate } from "react-router-dom";

function NavBarHook() {
  const dis = useDispatch();
  const router = useNavigate();
  const res = useSelector((state) => state.Authentication.TokenData);
  const Loading = useSelector((state) => state.Authentication.Loading);
  const [cart, setCart] = useState(0);
  const cartNumber = useSelector((state) => state.CartSlice.numOfCartItems);
  const [user, setUser] = useState([]);
  useEffect(() => {
    dis(TokenData());
  }, []);
  useEffect(() => {
    if (Loading === false) {
      if (
        res === "Expired token, please login again.." ||
        res === "Invalid token, please login again.."
      ) {
        setUser("");
        setCart(0);
        localStorage.removeItem("cart");
        localStorage.removeItem("user");
      } else if (res?.data?.data) {
        setUser(res?.data);
        dis(GetCart());
      }
    }
  }, [Loading, res]);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser("");
    setCart(0);
    if (window.location.pathname !== "/") {
      router("/");
    }
  };
  useEffect(() => {
    if (cartNumber === "deleted") {
      setCart(0);
    } else if (localStorage.getItem("cart")) {
      setCart(localStorage.getItem("cart"));
    } else {
      setCart(0);
    }
  }, [cartNumber]);
  return [user, logout, cart, Loading ];
}
export default NavBarHook;
