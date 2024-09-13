import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../redux/slices/Product/GetAllProduct";

function AdminAllProductHook(limit) {
  const dis = useDispatch();
  const product = useSelector((state) => state.GetMyProducts.Products);
  const Loading = useSelector((state) => state.GetMyProducts.Loading);
  const [page, setPage] = useState(1);
  const [items, setitems] = useState([]);
  useEffect(() => {
    dis(GetProducts(`/api/v1/product?limit=${limit}&page=${page}`));
  }, [page]);
  useEffect(() => {
    if (product) {
      setitems(product);
    } else {
      setitems([]);
    }
  }, [product]);
  return [items, Loading, setPage, page];
}

export default AdminAllProductHook;
