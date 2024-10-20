import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/slices/Product/SearchProduct";
function SearchProductHook() {
  const dis = useDispatch();
  const product = useSelector((state) => state.SearchProducts.Products);
  const [Search, SetSearch] = useState([]);
  const [items, setitems] = useState([]);
  const [num, setnum] = useState([]);
  const [sort, setsort] = useState("-ratingsAverage");
  const [limit, setlimit] = useState(12);
  const [page, setpage] = useState(1);
  const [cate, setcate] = useState("");
  const [brand, setbrand] = useState("");
  const [to, setto] = useState("");
  const [from, setfrom] = useState("");
  const [PaginationNum, setPaginationNum] = useState("");
  const changeSearch = (e) => {
    localStorage.setItem("search", e.target.value);
    SetSearch(e.target.value);
    if (window.location.pathname !== "/Search") {
      window.location.href = "/Search";
    }
  };
  const sorting = (e) => {
    if (e) {
      setsort(e.target.value);
    } else {
      if (localStorage.getItem("sort") && localStorage.getItem("sort") !== "") {
        setsort(localStorage.getItem("sort"));
      }
    }
  };
  const SetPage = async (p) => {
    localStorage.setItem("page", p);
    setpage(p);
  };
  const getStorge = () => {
    if (localStorage.getItem("search") && localStorage.getItem("search") !== "")
      SetSearch(localStorage.getItem("search"));
    sorting();
    if (
      localStorage.getItem("cateSelact") &&
      localStorage.getItem("cateSelact") !== ""
    ) {
      setcate(localStorage.getItem("cateSelact"));
    } else if (!localStorage.getItem("cateSelact")) {
      setcate("");
    }
    if (localStorage.getItem("page") && localStorage.getItem("page") !== "")
      setpage(localStorage.getItem("page"));
    if (
      localStorage.getItem("brandSelact") &&
      localStorage.getItem("brandSelact") !== ""
    ) {
      setbrand(localStorage.getItem("brandSelact"));
    } else if (!localStorage.getItem("brandSelact")) {
      setbrand("");
    }
    if (
      localStorage.getItem("from") &&
      localStorage.getItem("from") !== "0" &&
      localStorage.getItem("from") !== ""
    ) {
      setfrom(`&price[gte]=${localStorage.getItem("from")}`);
    } else if (
      !localStorage.getItem("from") ||
      localStorage.getItem("from") === "0" ||
      localStorage.getItem("from") === ""
    ) {
      setfrom("");
    }
    if (
      localStorage.getItem("to") &&
      localStorage.getItem("to") !== "0" &&
      localStorage.getItem("to") !== ""
    ) {
      setto(`&price[lte]=${localStorage.getItem("to")}`);
    } else if (
      !localStorage.getItem("to") ||
      localStorage.getItem("to") === 0 ||
      localStorage.getItem("to") === ""
    ) {
      setto("");
    }
  };
  const Sorting = (s) => {
    if (s) {
      localStorage.setItem("sort", s);
      setsort(s);
    }
  };
  useEffect(() => {
    getStorge();
    dis(
      search(
        `/api/v1/product?keyword=${Search}&limit=${limit}&page=${page}&sort=${sort}${cate}${brand}${to}${from}`
      )
    );
  }, [Search, sort, page, cate, brand, to, from]);
  useEffect(() => {
    if (product.data) {
      setitems(product?.data);
    }
    if (product?.results) {
      setnum(product?.totalResults);
    }
    if (product?.paginationResult) {
      setPaginationNum(product?.paginationResult?.numberOfPages);
    }
  }, [product, Search, sort, page, cate, brand]);
  return [
    items,
    Search,
    changeSearch,
    num,
    PaginationNum,
    SetPage,
    page,
    Sorting,
    getStorge,
    setbrand,
    setfrom,
    setto
  ];
}
export default SearchProductHook;
