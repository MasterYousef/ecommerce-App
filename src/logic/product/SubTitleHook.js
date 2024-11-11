import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategory } from "../../redux/slices/Category/GetAllCategorySlice";
import { GetAllBrand } from "../../redux/slices/Brand/GetBrand";
import useSearchProduct from "./SearchProductHook";

const useSubTitle = () => {
  const dispatch = useDispatch();
  const { handleFilters } = useSearchProduct();
  const categories = useSelector((state) => state.GetCategory.Category?.data);
  const brands = useSelector((state) => state.GetMyBrand.brand?.data);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandCheckAll, setBrandCheckAll] = useState(false);
  const [categoryCheckAll, setCategoryCheckAll] = useState(false);
  const [priceRange, setPriceRange] = useState({
    min: localStorage.getItem("priceMin") || "",
    max: localStorage.getItem("priceMax") || "",
  });
  const handleCategoryChange = useCallback(
    (e) => {
      const { value, checked } = e.target;
      setSelectedCategories((prev) => {
        let categories;
        const updated = checked
          ? [...prev, value]
          : prev.filter((cat) => cat !== value);
        if (value === "الكل") {
          localStorage.removeItem("category");
          setCategoryCheckAll(true);
          setSelectedCategories([]);
        } else {
          categories = updated.map((category) => `category[in][]=${category}`);
          localStorage.setItem("category", categories.join("&"));
          setCategoryCheckAll(false);
        }
        handleFilters({ category: categories?.join("&") });
        return updated;
      });
    },
    [handleFilters]
  );

  const handleBrandChange = useCallback(
    (e) => {
      const { value, checked } = e.target;
      setSelectedBrands((prev) => {
        let brands;
        const updated = checked
          ? [...prev, value]
          : prev.filter((brand) => brand !== value);
        if (value === "الكل") {
          localStorage.removeItem("brand");
          setBrandCheckAll(checked);
          setSelectedBrands([]);
        } else {
          brands = updated.map((brand) => `brand[in][]=${brand}`);
          localStorage.setItem("brand", brands.join("&"));
          setBrandCheckAll(false);
        }
        handleFilters({ brand: brands?.join("&") });
        return updated;
      });
    },
    [handleFilters]
  );
  const handlePriceFrom = useCallback(
    (value) => {
      setPriceRange((prev) => {
        const updated = { ...prev, min: value };
        localStorage.setItem("priceMin", value);
        handleFilters({ priceMin: value });
        return updated;
      });
    },
    [handleFilters]
  );
  const handlePriceTo = useCallback(
    (value) => {
      setPriceRange((prev) => {
        const updated = { ...prev, max: value };
        localStorage.setItem("priceMax", value);
        handleFilters({ priceMax: value });
        return updated;
      });
    },
    [handleFilters]
  );
  useEffect(() => {
    dispatch(GetCategory("/api/v1/category?limit=20"));
    dispatch(GetAllBrand("/api/v1/brand?limit=20"));
  }, [dispatch]);
  useEffect(() => {
    const category = localStorage.getItem("category");
    const brands = localStorage.getItem("brand");
    if (category) {
      const category_data = category
        .replaceAll("category[in][]=", "")
        .split("&");
      setSelectedCategories(category_data);
    }
    if (brands) {
      const brand_data = brands.replaceAll("brand[in][]=", "").split("&");
      setSelectedBrands(brand_data);
    }
  }, []);
  return {
    categories,
    brands,
    handleCategoryChange,
    handleBrandChange,
    handlePriceFrom,
    handlePriceTo,
    selectedCategories,
    selectedBrands,
    priceRange,
    brandCheckAll,
    categoryCheckAll,
  };
};

export default useSubTitle;
