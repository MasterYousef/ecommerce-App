import React from "react";
import { Row } from "react-bootstrap";
import SubTitleHook from "../../logic/product/SubTitleHook";

function Subtitle() {
  const search = SubTitleHook();
  return (
    <Row>
      <div className="d-flex flex-column mt-2">
        <div className="filter-title">الفئة</div>
        <div className="d-flex mt-3">
          <input
            type="checkbox"
            value="الكل"
            checked={search.categoryCheckAll}
            onClick={(e) => search.handleCategoryChange(e)}
          />
          <div className="filter-sub me-2 ">الكل</div>
        </div>
        {search.categories?.length ? (
          search.categories.map((e) => {
            return (
              <div key={e._id} className="d-flex mt-3">
                <input
                  type="checkbox"
                  checked={search.selectedCategories?.includes(e._id)}
                  value={e._id}
                  onClick={(e) => search.handleCategoryChange(e)}
                />
                <div className="filter-sub me-2">{e.name}</div>
              </div>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات</h4>
        )}
      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title mt-3">الماركة</div>
        <div className="d-flex mt-3">
          <input
            type="checkbox"
            value="الكل"
            checked={search.brandCheckAll}
            onClick={(e) => search.handleBrandChange(e)}
          />
          <div className="filter-sub me-2 ">الكل</div>
        </div>
        {search.brands?.length ? (
          search.brands?.map((e) => {
            return (
              <div key={e._id} className="d-flex mt-3">
                <input
                  type="checkbox"
                  checked={search.selectedBrands?.includes(e._id)}
                  value={e._id}
                  onClick={(e) => search.handleBrandChange(e)}
                />
                <div className="filter-sub me-2 ">{e.name}</div>
              </div>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات</h4>
        )}
      </div>
      <div className="filter-title my-3">السعر</div>
      <div className="d-flex">
        <p className="filter-sub my-2">من:</p>
        <input
          className="m-2 text-center"
          onChange={(e) => search.handlePriceFrom(e.target.value)}
          value={search.priceRange.min}
          type="number"
          style={{ width: "80px", height: "25px" }}
        />
      </div>
      <div className="d-flex">
        <p className="filter-sub my-2">الي:</p>
        <input
          className="m-2 text-center"
          type="number"
          value={search.priceRange.max}
          onChange={(e) => search.handlePriceTo(e.target.value)}
          style={{ width: "80px", height: "25px" }}
        />
      </div>
    </Row>
  );
}

export default Subtitle;
