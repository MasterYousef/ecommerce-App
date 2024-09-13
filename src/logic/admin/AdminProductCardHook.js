import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelateProduct } from "../../redux/slices/Product/DelateProduct";
import { toast } from "react-toastify";
import { GetProducts } from "../../redux/slices/Product/GetAllProduct";

function AdminProductCardHook() {
  const dis = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const handelRemove = (id) => {
    setLoading(true);
    dis(DelateProduct(id))
      .unwrap()
      .then(() => {
        setLoading(false);
        setError(false);
        setShow(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
        setShow(false);
      });
  };
  useEffect(() => {
    if (loading === false) {
      if (error === true) {
        toast.error("حدث خطاء ما الرجاء المحاولة لاحقا");
      } else if (error === false) {
        toast.success("تم حذف المنتج بنجاح");
        dis(GetProducts(`/api/v1/product?limit=3`))
      }
    }
  }, [loading, error]);
  return [show, handleClose, handleShow, handelRemove];
}

export default AdminProductCardHook;
