import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../redux/slices/Product/SearchProduct";

const useSearchProduct = () => {
  const dispatch = useDispatch();
  const { data, totalResults, paginationResult } = useSelector(
    (state) => state.SearchProducts.Products
  );

  const [searchParams, setSearchParams] = useState({
    query: localStorage.getItem("searchQuery") || "",
    sort: localStorage.getItem("sort") || "-ratingsAverage",
    page: localStorage.getItem("page") || 1,
    limit: 12,
    category: localStorage.getItem("category") || "",
    brand: localStorage.getItem("brand") || "",
    priceRange: {
      min: localStorage.getItem("priceMin") || "",
      max: localStorage.getItem("priceMax") || "",
    },
  });

  const handleSearch = useCallback((value) => {
    localStorage.setItem("searchQuery", value);
    setSearchParams((prev) => ({ ...prev, query: value }));
    if (window.location.pathname !== "/Search") {
      window.location.href = "/Search";
    }
  }, []);

  const handleSort = useCallback((value) => {
    localStorage.setItem("sort", value);
    setSearchParams((prev) => ({ ...prev, sort: value }));
  }, []);

  const handlePageChange = useCallback((page) => {
    localStorage.setItem("page", page);
    setSearchParams((prev) => ({
      ...prev,
      page,
      priceRange: {
        min: localStorage.getItem("priceMin") || "",
        max: localStorage.getItem("priceMax") || "",
      },
    }));
  }, []);

  const handleFilters = useCallback(
    ({ category, brand, priceMin, priceMax }) => {
      if (priceMax !== undefined) localStorage.setItem("priceMax", priceMax);
      if (priceMax !== undefined) localStorage.setItem("priceMax", priceMax);
      setSearchParams((prev) => ({
        ...prev,
        category: category || localStorage.getItem("category") || "",
        brand: brand || localStorage.getItem("brand") || "",
        priceRange: {
          min: priceMin || localStorage.getItem("priceMin") || "",
          max: priceMax || localStorage.getItem("priceMax") || "",
        },
      }));
    },
    []
  );

  useEffect(() => {
    const { query, sort, page, limit, category, brand, priceRange } =
      searchParams;
    const priceQuery = [
      priceRange.min && `price[gte]=${priceRange.min}`,
      priceRange.max && `price[lte]=${priceRange.max}`,
    ]
      .filter(Boolean)
      .join("&");
    const queryString = `/api/v1/product?keyword=${query}&limit=${limit}&page=${page}&sort=${sort}${
      category ? `&${category}` : ""
    }${brand ? `&${brand}` : ""}${priceQuery ? `&${priceQuery}` : ""}`;
    dispatch(search(queryString));
  }, [dispatch, searchParams]);
  return {
    products: data || [],
    totalResults,
    totalPages: paginationResult?.numberOfPages || 0,
    currentPage: searchParams.page,
    searchQuery: searchParams.query,
    handleSearch,
    handleSort,
    handlePageChange,
    handleFilters,
  };
};

export default useSearchProduct;
