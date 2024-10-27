import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./page/home/HomePage";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/utilty/Footer";
import Navbars from "./components/utilty/NavBar";
import Login from "./page/Auth/Login";
import Register from "./page/Auth/Register";
import CatagoryContanir from "./page/Category/CatagoryContanir";
import BrandContanir from "./page/brand/BrandContainer";
import SearchProduct from "./components/product/SearchProduct";
import ProductsInfo from "./page/product/ProductsInfo";
import CartContainer from "./page/Cart/CartContainer";
import ChoosePymentPage from "./page/paymentChoose/ChoosePymentPage";
import AdminAllProductPage from "./page/Admin/AdminAllProductPage";
import AdminAllOrderPage from "./page/Admin/AdminAllOrderpage";
import AdminOrderDetalisPage from "./page/Admin/AdminOrderDetalisPage";
import AdminBrandPage from "./page/Admin/AdminBrandPage";
import AdminAddCategoryPage from "./page/Admin/AdminAddCategoryPage";
import AdminSubCategoryPage from "./page/Admin/AdminSubCategoryPage";
import AdminAddProductPage from "./page/Admin/AdminAddProductPage";
import UserFavPage from "./page/User/UserFavPage";
import UserAllOrderPage from "./page/User/UserAllOrderPage";
import UserAdrressPage from "./page/User/UserAddressPage";
import UserAddAddressPage from "./page/User/UserAddAddressPage";
import UserEditAddressPage from "./page/User/UserEditAddressPage";
import UserProfilePage from "./page/User/UserProfilePage";
import AdminEditProductPage from "./page/Admin/AdminEditProductPage";
import ForgetPass from "./page/Auth/ForgetPass";
import VerifyCode from "./page/Auth/VerifyCode";
import ResetPass from "./page/Auth/ResetPass";
import AdminAddCouponsPage from "./page/Admin/AdminAddCouponsPage";
import AppHook from "./logic/AppHook";
import ProtectRoute from "./components/utilty/ProtectRoute";
import ProductByCategory from "./page/product/ProductByCategory";
import ProductByBrand from "./page/product/ProductByBrand";
function App() {
  const [isUser, isAdmin] = AppHook();
  return (
    <div className="font">
      <Navbars />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPass />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/Category/:id" element={<ProductByCategory />} />
        <Route path="/ecommerce-App/Categorys" element={<CatagoryContanir />} />
        <Route path="/ecommerce-App/Brands" element={<BrandContanir />} />
        <Route path="/Brand/:id" element={<ProductByBrand />} />
        <Route path="/Search" element={<SearchProduct />} />
        <Route path="/Products/:id" element={<ProductsInfo />} />
        <Route path="/Cart" element={<CartContainer />} />
        <Route path="/order/paymethoud" element={<ChoosePymentPage />} />
        <Route element={<ProtectRoute Auth={isAdmin} />}>
          <Route path="/admin/allProducts" element={<AdminAllProductPage />} />
          <Route path="/admin/allorders" element={<AdminAllOrderPage />} />
          <Route
            path="/admin/order/details/:id"
            element={<AdminOrderDetalisPage />}
          />
          <Route path="/admin/addbrand" element={<AdminBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route
            path="/admin/addsubcategory"
            element={<AdminSubCategoryPage />}
          />
          <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
          <Route
            path="/admin/editproduct/:id"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/coupons" element={<AdminAddCouponsPage />} />
        </Route>
        <Route element={<ProtectRoute Auth={isUser} />}>
          <Route path="/user/allorders" element={<UserAllOrderPage />} />
          <Route path="/user/fav" element={<UserFavPage />} />
          <Route path="/user/address" element={<UserAdrressPage />} />
          <Route
            path="/user/edit-address/:id"
            element={<UserEditAddressPage />}
          />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
