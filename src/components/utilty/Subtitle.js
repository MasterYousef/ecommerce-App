import React from 'react'
import { Row } from 'react-bootstrap'
import SubTitleHook from '../../logic/product/SubTitleHook'

function Subtitle() {
  const [cateegorys,brands,opHandllerCate,opHandllerBrands,priceFrom,priceto] = SubTitleHook();
  let toprice = localStorage.getItem('to')
  let fromprice = localStorage.getItem('from')
  return (
    <Row>
          <div className="d-flex flex-column mt-2">
            <div className="filter-title">الفئة</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="الكل" onClick={(e)=>opHandllerCate(e)} />
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            {
              cateegorys?.length ? (cateegorys.map((e,index)=>{
                return  <div key={index} className="d-flex mt-3">
                <input type="checkbox" value={e._id} onClick={(e)=>opHandllerCate(e)} />
                <div className="filter-sub me-2">{e.name}</div>
              </div>
              })):<h4>لا يوجد تصنيفات</h4>
            }
          </div>
  
          <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">الماركة</div>
            <div className="d-flex mt-3">
              <input type="checkbox" value="الكل" onClick={(e)=>opHandllerBrands(e)}/>
              <div className="filter-sub me-2 ">الكل</div>
            </div>
            {
              brands?.length ? (brands.map((e,index)=>{
                return  <div key={index} className="d-flex mt-3">
                <input type="checkbox" value={e._id} onClick={(e)=>opHandllerBrands(e)} />
                <div className="filter-sub me-2 ">{e.name}</div>
              </div>
              })):<h4>لا يوجد تصنيفات</h4>
            }
          </div>
          <div className="filter-title my-3">السعر</div>
          <div className="d-flex">
            <p className="filter-sub my-2">من:</p>
            <input
              className="m-2 text-center"
              onChange={e=>priceFrom(e.target.value)}
              value={fromprice}
              type="number"
              style={{ width: "80px", height: "25px" }}
            />
          </div>
          <div className="d-flex">
            <p className="filter-sub my-2">الي:</p>
            <input
              className="m-2 text-center"
              type="number"
              value={toprice}
              onChange={e=>priceto(e.target.value)}
              style={{ width: "80px", height: "25px" }}
            />
          </div>
        </Row>
  )
}

export default Subtitle