import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../redux/slices/Product/GetAllProduct";
function ProductContainerHook(Discount) {
  const dis = useDispatch();
  const product = useSelector((state) => state.GetMyProducts.Products);
  const [items, setItems] = useState([]);
  useEffect(() => {
    dis(GetProducts("/api/v1/product"));
  }, []);
  useEffect(() => {
    if (Discount === true) {
      const data = product?.data?.filter((v) => {
         return v.priceAfterDiscount > 0 ? v : null
      });
      setItems(data?.slice(0,4));
    } else {
      setItems(product?.data?.slice(0,4));
    }
  }, [product]);
  return [items];
}
export default ProductContainerHook;
