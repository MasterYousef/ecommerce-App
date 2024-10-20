import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import avatar from "../../images/avatar.png";
import { toast } from "react-toastify";
import { PostCategory } from "../../redux/slices/Category/PostCategory";
function AdminAddCategoryHook() {
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [sImg, SetsImg] = useState(null);
  const dis = useDispatch();
  const err = useSelector((state) => state.PostCategory.error);
  const Loading = useSelector((state) => state.PostCategory.Loading);
  let imgChange = (ev) => {
    if (ev.target.files && ev.target.files[0]) {
      setImg(URL.createObjectURL(ev.target.files[0]));
      SetsImg(ev.target.files[0]);
    }
  };
  let NameChange = (ev) => {
    setName(ev);
  };
  let Warn = () => {
    toast.warn("من فضلك ادخل البيانات ");
  };
  let SendData = () => {
    if (img !== avatar && name !== "") {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", sImg);
      dis(PostCategory(formData));
    } else {
      Warn();
    }
  };
  useEffect(() => {
    if (Loading === false) {
      if (err === "Created") {
        toast.success("تم الاضافة بنجاح");
        setImg(avatar);
        setName("");
        SetsImg(null);
      } else if (err === "fail") {
        setImg(avatar);
        setName("");
        SetsImg(null);
        toast.error("الرجاء المحاولة مرة اخرى ");
      }
    }
  }, [err, Loading]);

  return [img, name, imgChange, NameChange, Loading, SendData];
}

export default AdminAddCategoryHook;
