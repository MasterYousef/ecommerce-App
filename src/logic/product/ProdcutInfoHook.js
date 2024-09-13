import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../redux/slices/Product/GetOneProduct";
import { GetOneBr } from "../../redux/slices/Brand/GetOneBrand";

function ProdcutInfoHook(id) {
  const dis = useDispatch();
  const product = useSelector((state) => state.GetOneProduct.Product);
  const brand = useSelector((state) => state.GetOneBrand.brand);
  const [productData, setProduct] = useState([]);
  const [brandData, setBrand] = useState([]);
  useEffect(() => {
    dis(GetProduct(id));
  }, []);
  useEffect(() => {
    if (product.data) {
      setProduct(product.data);
      dis(GetOneBr(product?.data?.brand));
    }
  }, [product]);
  useEffect(() => {
    if (brand) {
      setBrand(brand.data);
    }
  }, [brand]);
  return [productData, brandData];
}

export default ProdcutInfoHook;
