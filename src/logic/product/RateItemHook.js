import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteRate, GetRate, UpdateRate } from "../../redux/slices/Rate";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GetProduct } from "../../redux/slices/Product/GetOneProduct";

function RateItemHook(rev) {
  const { id } = useParams();
  const res = useSelector((state) => state.RateSlice.DeleteRate);
  const res2 = useSelector((state) => state.RateSlice.updateData);
  const dis = useDispatch();
  const [show, setShow] = useState(false);
  const [NewCom, setNewCom] = useState(rev.comment);
  const [NewRate, setNewRate] = useState(rev.rating);
  const [show2, setShow2] = useState(false);
  const obj = {
    id,
    page: 1,
    limit: 5,
  };
  const onsubmit = async (id) => {
    await dis(DeleteRate(id));
    setShow(false);
  };
  useEffect(() => {
    if (res === "error") {
      toast.error("حدث خطاء ما لم يتم حذف التقييم");
    } else if (res?.status === 204) {
      toast.success("تم حذف التقييم بنجاح");
      dis(GetRate(obj));
      dis(GetProduct(id));
    }
  }, [res]);
  useEffect(() => {
    if (res2 === "error") {
      toast.error("حدث خطاء ما لم يتم تعديل التقييم");
      setNewCom(rev.comment);
      setNewRate(rev.rating);
    } else if(res2?.status === 200) {
      toast.success("تم تعديل التقييم بنجاح");
      dis(GetRate(obj));
      dis(GetProduct(id));
    }
  }, [res2]);
  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: NewRate,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setNewRate(newValue);
    },
  };
  const onEdit = async (rateId) => {
    if (NewRate === 0) {
      toast.error("من فضلك ادخل تقييم");
      return;
    } else {
      const obj = {
        url: `/api/v1/rating/${rateId}`,
        data: { comment: NewCom, rating: NewRate },
      };
      await dis(UpdateRate(obj));
      setShow2(false);
    }
  };
  return [
    show,
    setShow,
    onsubmit,
    setting,
    show2,
    setShow2,
    NewCom,
    setNewCom,
    onEdit,
  ];
}
export default RateItemHook;
