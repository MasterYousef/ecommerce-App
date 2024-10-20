import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../redux/slices/Product/GetAllProduct";
import { GetOnecate } from "../../redux/slices/Category/GetOneCategory";
import { GetProduct } from "../../redux/slices/Product/GetOneProduct";
function ProductInfoConHook(id) {
  const dis = useDispatch();
  const product = useSelector((state) => state.GetOneProduct.Product);
  const CategoryProduct = useSelector((state) => state.GetMyProducts.Products);
  const cate = useSelector((state) => state.GetOneCategory.category);
  useEffect(() => {
    dis(GetProduct(id)).then((i) => {
      dis(GetOnecate(i.payload?.data?.category._id));
    });
  }, [id]);
  useEffect(() => {
    if (cate) {
      dis(GetProducts(`/api/v1/product?category=${cate?.data?._id}`));
    }
  }, [cate]);
  return [CategoryProduct.data, product.data];
}

export default ProductInfoConHook;
