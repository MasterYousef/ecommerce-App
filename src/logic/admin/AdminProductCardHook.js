import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {DelateProduct} from "../../redux/slices/Product/DelateProduct";
import {toast} from 'react-toastify'

function AdminProductCardHook() {
    const dis = useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Loading = useSelector(state=>state.DelateOneProduct.Loading)
    const error = useSelector(state=>state.DelateOneProduct.error)
    const handelRemove = async (id) =>{
      await dis(DelateProduct(id))
      setShow(false)
    }
    useEffect(() => {
      if(Loading === false){
        if(error === 'Request failed with status code 401'){
          toast.error('حدث خطاء ما الرجاء المحاولة لاحقا')
        }else{
          window.location.reload()
        }
      }
    }, [Loading])
    
    return [show,handleClose,handleShow,handelRemove]
}

export default AdminProductCardHook