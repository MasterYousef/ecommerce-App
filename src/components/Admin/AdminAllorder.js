import React from "react";
import { Row, Spinner } from "react-bootstrap";
import AdminOrderCard from "./AdminOrderCard";
import UserAllOrderPageHook from "../../logic/user/UserAllOrderPageHook";
import Pagination from "../utilty/Pagination";
function AdminAllorder() {
  const [res, Loading, setPage, page, pagin] = UserAllOrderPageHook();
  return (
    <Row className="mt-2 flex-row">
      <h2>ادارة الطلبات</h2>
      {Loading === true ? (
        <h3>
          جاري التحميل...
          <Spinner animation="grow" />{" "}
        </h3>
      ) : res?.data.length ? (
        res?.data?.map((i, index) => <AdminOrderCard key={index} item={i} />)
      ) : (
        <h3>لا يوجد طلبات </h3>
      )}
      {pagin?.numberOfPages > 1 ? (
        <Pagination
          numberOfPages={pagin?.numberOfPages}
          SetPage={setPage}
          page={page}
        />
      ) : null}
    </Row>
  );
}

export default AdminAllorder;
