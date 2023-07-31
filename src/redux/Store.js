import {configureStore} from '@reduxjs/toolkit'
import GetAllCategory from './slices/Category/GetAllCategorySlice'
import PostAllCategory from './slices/Category/PostCategory'
import GetBrand from './slices/Brand/GetBrand'
import PostAllBrand from './slices/Brand/PostBrand'
import PostAllSubCategory from './slices/Category/PostSubCategory'
import GetAllSubCategory from './slices/Category/GetSubCategory'
import PostAllProduct from './slices/Product/PostProduct'
import GetAllProducts from './slices/Product/GetAllProduct'
import GetOneProduct from './slices/Product/GetOneProduct'
import GetOneCategory from './slices/Category/GetOneCategory'
import GetOneBrand from './slices/Brand/GetOneBrand'
import DelateOneProduct from './slices/Product/DelateProduct'
import UpdateProduct from './slices/Product/EditProduct'
import SearchProducts from './slices/Product/SearchProduct'
import Authentication from './slices/Auth'
import RateSlice from './slices/Rate'
import Favslice from './slices/Fav'
import CouponsSlice from "./slices/Coupons/Coupons"
import AddressSlice from './slices/user/Address'
import ProfileSlice from './slices/user/Profile'
import CartSlice from "./slices/cart/Cart"
import OrderSlice from "./slices/payment/Order"
import UserOrderSlice from "./slices/user/UserOrder"
const StoreApp = configureStore({
    reducer:{
        GetCategory:GetAllCategory
        ,PostCategory:PostAllCategory
        ,GetMyBrand:GetBrand
        ,PostMyBrand:PostAllBrand
        ,PostMySubCategory:PostAllSubCategory
        ,GetMySubCategorys:GetAllSubCategory
        ,PostMyProduct:PostAllProduct
        ,GetMyProducts:GetAllProducts
        ,GetOneProduct:GetOneProduct
        ,GetOneCategory:GetOneCategory
        ,GetOneBrand:GetOneBrand
        ,DelateOneProduct:DelateOneProduct
        ,UpdateProduct:UpdateProduct
        ,SearchProducts:SearchProducts
        ,Authentication:Authentication
        ,RateSlice:RateSlice
        ,Favslice:Favslice
        ,CouponsSlice:CouponsSlice
        ,AddressSlice:AddressSlice
        ,ProfileSlice:ProfileSlice
        ,CartSlice:CartSlice
        ,OrderSlice:OrderSlice
        ,UserOrderSlice:UserOrderSlice
    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default StoreApp