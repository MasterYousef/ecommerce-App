import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSubCategory } from "../../redux/slices/Category/GetSubCategory";
import { GetCategory } from "../../redux/slices/Category/GetAllCategorySlice";
import { GetAllBrand } from "../../redux/slices/Brand/GetBrand";
import { toast } from "react-toastify";
import { GetProduct } from "../../redux/slices/Product/GetOneProduct";
import { EditProduct } from "../../redux/slices/Product/EditProduct";
function AdminEditProductHook(id) {
  const [images, setImages] = useState([]);
  const [name, setname] = useState("");
  const [disc, setDisc] = useState("");
  const [salBefore, setSalBefore] = useState("");
  const [salAfter, setSalAfter] = useState("");
  const [qty, setQty] = useState("");
  const [catId, setCatId] = useState("0");
  const [BrandId, setBrandId] = useState("");
  const [ShowColor, setShowColor] = useState(false);
  const [Colors, setColors] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectSub, setSelectSub] = useState([]);
  const brand = useSelector((state) => state.GetMyBrand.brand);
  const cate = useSelector((state) => state.GetCategory.Category);
  const Subcate = useSelector((state) => state.GetMySubCategorys.SubCategory);
  const err = useSelector((state) => state.UpdateProduct.error);
  const loading = useSelector((state) => state.UpdateProduct.Loading);
  const product = useSelector((state) => state.GetOneProduct.Product.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProduct(id));
  }, []);
  useEffect(() => {
    if (product) {
      setname(product.title);
      setDisc(product.description);
      setSalBefore(product.price);
      setSalAfter(product?.priceAfterDiscount);
      setQty(product.quantity);
      setCatId(product.category._id);
      setBrandId(product.brand);
      setColors(product.colors);
      setImages(product.images);
      setSelectSub(product?.subcategories);
    }
  }, [product]);
  const handelColor = (color) => {
    setColors([...Colors, color.hex]);
    setShowColor(!ShowColor);
  };
  const SubCategory = (e) => {
    setCatId(e);
  };
  const DelateColors = (e) => {
    const NewColors = Colors.filter((c) => c !== e);
    setColors(NewColors);
  };
  const onSelect = (e) => {
    setSelectSub(e);
  };
  const onRemove = (e) => {
    setSelectSub(e);
  };
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    return new File([data], Math.random(), { type: "image/jpeg" });
  };
  useEffect(() => {
    if (catId !== 0) {
      const run = async () => {
        await dispatch(GetSubCategory(`/api/v1/category/${catId}/subCategory`));
      };
      run();
    }
  }, [catId]);
  useEffect(() => {
    if (catId !== 0) {
      if (Subcate.data) {
        setOptions(Subcate.data);
      }
    }
  }, [Subcate]);
  useEffect(() => {
    dispatch(GetCategory("/api/v1/category"));
    dispatch(GetAllBrand("/api/v1/brand"));
  }, []);
  const sendData = async () => {
    if (
      name === "" ||
      disc === "" ||
      qty === "" ||
      salBefore === "" ||
      images[0] === undefined ||
      catId === "0" ||
      BrandId === "0"
    ) {
      toast.warn("من فضلك ادخل جميع البيانات");
      return;
    } else if (
      name === product.title &&
      disc === product.description &&
      qty === product.quantity &&
      salBefore === product.price &&
      catId === product.category._id &&
      BrandId === product.brand &&
      images === product.images &&
      selectSub === product?.subcategories &&
      Colors === product.colors &&
      salAfter === product?.priceAfterDiscount
    ) {
      toast.warn("لا يمكنك تعديل المنتج بنفس البيانات");
      return;
    } else {
      const info = new FormData();
      if (salAfter && salAfter !== product?.priceAfterDiscount) {
        info.append("priceAfterDiscount", salAfter);
      }
      const par = { id: id, formData: info };
      const data = {
        title: name,
        description: disc,
        price: salBefore,
        priceAfterDiscount: salAfter,
        quantity: qty,
        category: { _id: catId, name: product.category.name },
        brand: BrandId,
        subcategories: selectSub,
        colors: Colors,
        images,
      };
      const imageProcessingPromises = [];
      Object.entries(data).map(([key, value]) => {
        Object.entries(product).map(async ([key2, value2]) => {
          if (key === key2) {
            if (value !== value2) {
              if (key === "category") {
                if (value._id !== value2._id) {
                  info.set("category", value._id);
                }
              } else if (key === "images") {
                for (let imgKey in value) {
                  let img = value[imgKey];
                  if (typeof img === "string" && img.length >= 1000) {
                    const imagePromise = convertURLtoFile(img).then((image) => {
                      info.append("images", image);
                    });
                    imageProcessingPromises.push(imagePromise);
                  } else {
                    info.append("images", img);
                  }
                }
              } else if (key === "colors") {
                Object.values(value).map((v) => info.append("colors", v));
              } else if (key === "subcategories") {
                if(value.length === 0){
                  info.append("subcategories", "none");
                }else{
                  value.map((v) => info.append("subcategories", v._id));
                  info.append("category", catId);
                }
              } else {
                info.append(key, value);
              }
            }
          }
        });
      });
      await Promise.all(imageProcessingPromises);
      dispatch(EditProduct(par, info));
    }
  };
  useEffect(() => {
    if (loading === false) {
      if (err !== false) {
        toast.error("حدث خطاء اثناء التعديل ");
      } else {
        toast.success("تم التعديل بنجاح بنجاح");
        window.location.reload();
      }
    }
  }, [loading]);
  return [
    images,
    setImages,
    name,
    setname,
    disc,
    setDisc,
    salBefore,
    setSalBefore,
    salAfter,
    setSalAfter,
    qty,
    setQty,
    catId,
    SubCategory,
    cate,
    options,
    onSelect,
    onRemove,
    BrandId,
    setBrandId,
    brand,
    Colors,
    DelateColors,
    ShowColor,
    handelColor,
    setShowColor,
    sendData,
    loading,
    selectSub,
  ];
}

export default AdminEditProductHook;